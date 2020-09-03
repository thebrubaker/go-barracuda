import Vue from 'vue'
import { generateKey, distinctValues } from './utils'
import {
  STAMINA_FULL,
  STAMINA_HIGH,
  STAMINA_HALF,
  STAMINA_LOW,
  STAMINA_EMPTY,
  NORMAL_ATTACK,
  STRONG_ATTACK,
  WILD_ATTACK,
  QUICK_ATTACK,
  DEFENSIVE_STANCE,
  RECOVER,
  RALLY,
} from './combat'
import {
  ARMOR_LEATHER,
  ARMOR_CHAINMAIL,
  ARMOR_PLATE,
  BUCKLER,
  KITE,
  TOWER,
  QUALITY_LOW,
  QUALITY_NORMAL,
  QUALITY_HIGH,
  QUALITY_LEGENDARY,
  CONDITION_WORN,
  CONDITION_FAIR,
  CONDITION_GOOD,
} from './armor'
import { WAR_HAMMER, GREAT_AXE, SPEAR, MACE, SWORD, DAGGER } from './weapons'
import { MATERIAL_WOOD, MATERIAL_IRON, MATERIAL_STEEL } from './materials'
import { RESOURCE_FOOD, RESOURCE_WATER } from './resources'

function newResource(resourceKey) {
  return {
    key: resourceKey,
    count: 0,
    target: 0,
  }
}

function newUnitGroup({ name }) {
  return {
    name,
    unitKeys: [],
    weaponTypes: [WAR_HAMMER, GREAT_AXE, SPEAR, MACE, SWORD, DAGGER],
    weaponQuality: [
      QUALITY_LOW,
      QUALITY_NORMAL,
      QUALITY_HIGH,
      QUALITY_LEGENDARY,
    ],
    weaponMaterials: [MATERIAL_WOOD, MATERIAL_IRON, MATERIAL_STEEL],
    shieldTypes: [BUCKLER, KITE, TOWER],
    shieldQuality: [
      QUALITY_LOW,
      QUALITY_NORMAL,
      QUALITY_HIGH,
      QUALITY_LEGENDARY,
    ],
    shieldMaterials: [MATERIAL_WOOD, MATERIAL_IRON, MATERIAL_STEEL],
    armorTypes: [ARMOR_LEATHER, ARMOR_CHAINMAIL, ARMOR_PLATE],
    armorQuality: [
      QUALITY_LOW,
      QUALITY_NORMAL,
      QUALITY_HIGH,
      QUALITY_LEGENDARY,
    ],
    armorCondition: [CONDITION_WORN, CONDITION_FAIR, CONDITION_GOOD],
    tactics: {
      [STAMINA_FULL]: [
        NORMAL_ATTACK,
        STRONG_ATTACK,
        STRONG_ATTACK,
        STRONG_ATTACK,
        STRONG_ATTACK,
        WILD_ATTACK,
        WILD_ATTACK,
        WILD_ATTACK,
        WILD_ATTACK,
      ],
      [STAMINA_HIGH]: [NORMAL_ATTACK, STRONG_ATTACK, WILD_ATTACK],
      [STAMINA_HALF]: [
        DEFENSIVE_STANCE,
        NORMAL_ATTACK,
        NORMAL_ATTACK,
        QUICK_ATTACK,
        QUICK_ATTACK,
        QUICK_ATTACK,
      ],
      [STAMINA_LOW]: [
        RALLY,
        RECOVER,
        QUICK_ATTACK,
        DEFENSIVE_STANCE,
        DEFENSIVE_STANCE,
        DEFENSIVE_STANCE,
        DEFENSIVE_STANCE,
      ],
      [STAMINA_EMPTY]: [RECOVER],
    },
    supplies: {
      [RESOURCE_FOOD]: {
        key: RESOURCE_FOOD,
        count: 0,
        target: 10,
      },
      [RESOURCE_WATER]: {
        key: RESOURCE_WATER,
        count: 0,
        target: 10,
      },
    },
  }
}

export const unitGroupState = Vue.observable({
  group: {},
})

export function createUnitGroup(name) {
  const groupKey = generateKey()
  Vue.set(unitGroupState.group, groupKey, newUnitGroup({ name }))
  unitGroupState.group[groupKey] = newUnitGroup({ name })
  return groupKey
}

export function addUnitToGroup(groupKey, unitKey) {
  getUnitGroup(groupKey).unitKeys = distinctValues([
    ...getUnitGroup(groupKey).unitKeys,
    unitKey,
  ])
}

export function removeUnitFromGroup(groupKey, unitKey) {
  getUnitGroup(groupKey).unitKeys = getUnitGroup(groupKey).unitKeys.filter(
    key => key !== unitKey
  )
}

export function setWeaponQuality(groupKey, qualityTypes) {
  getUnitGroup(groupKey).weaponQuality = distinctValues(qualityTypes)
}

export function setWeaponTypes(groupKey, types) {
  getUnitGroup(groupKey).weaponTypes = distinctValues(types)
}

export function setWeaponMaterials(groupKey, materials) {
  getUnitGroup(groupKey).weaponMaterials = distinctValues(materials)
}

export function setShieldQuality(groupKey, qualityTypes) {
  getUnitGroup(groupKey).shieldQuality = distinctValues(qualityTypes)
}

export function setShieldTypes(groupKey, types) {
  getUnitGroup(groupKey).shieldTypes = distinctValues(types)
}

export function setShieldMaterials(groupKey, materials) {
  getUnitGroup(groupKey).shieldMaterials = distinctValues(materials)
}

export function setArmorQuality(groupKey, qualityTypes) {
  getUnitGroup(groupKey).armorQuality = distinctValues(qualityTypes)
}

export function setArmorTypes(groupKey, types) {
  getUnitGroup(groupKey).armorTypes = distinctValues(types)
}

export function setArmorCondition(groupKey, conditionTypes) {
  getUnitGroup(groupKey).armorCondition = distinctValues(conditionTypes)
}

export function increaseTactic(groupKey, staminaKey, tactic) {
  getTactic(groupKey, staminaKey).push(tactic)
}

export function decreaseTactic(groupKey, staminaKey, tactic) {
  const index = getTactic(groupKey, staminaKey).findIndex(t => t === tactic)
  getUnitGroup(groupKey).tactics[staminaKey] = getTactic(
    groupKey,
    staminaKey
  ).filter((_, i) => i !== index)
}

export function getTactic(groupKey, staminaKey) {
  return getUnitGroup(groupKey).tactics[staminaKey]
}

export function getUnitGroup(groupKey) {
  return unitGroupState.group[groupKey]
}

export function increaseResourceTarget(groupKey, resourceKey) {
  const resource =
    getResource(groupKey, resourceKey) || createResource(groupKey, resourceKey)

  resource.target++
}

export function decreaseResourceTarget(groupKey, resourceKey) {
  const resource = getResource(groupKey, resourceKey)
  if (!resource) {
    return
  }
  resource.target--
  if (resource.target <= 0 && resource.count <= 0) {
    removeResource(groupKey, resourceKey)
  }
}

export function increaseResourceCount(groupKey, resourceKey) {
  const resource =
    getResource(groupKey, resourceKey) || createResource(groupKey, resourceKey)

  resource.count++
}

export function decreaseResourceCount(groupKey, resourceKey) {
  const resource = getResource(groupKey, resourceKey)
  if (!resource) {
    return
  }
  resource.count--
  if (resource.target <= 0 && resource.count <= 0) {
    removeResource(groupKey, resourceKey)
  }
}

export function getResource(groupKey, resourceKey) {
  return getUnitGroup(groupKey).supplies[resourceKey]
}

export function createResource(groupKey, resourceKey) {
  Vue.set(
    getUnitGroup(groupKey).supplies,
    resourceKey,
    newResource(resourceKey)
  )

  return getResource(groupKey, resourceKey)
}

export function removeResource(groupKey, resourceKey) {
  Vue.delete(getUnitGroup(groupKey).supplies, resourceKey)
}
