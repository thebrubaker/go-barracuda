package game

type AttackType string

const (
	SwingAttack  AttackType = "Swing"
	ThrustAttack AttackType = "Thrust"
)

type DamageType string

const (
	SlashDamage  DamageType = "Slash"
	BluntDamage  DamageType = "Blunt"
	PierceDamage DamageType = "Pierce"
)

type Equipment struct {
	Head   *Armor
	Chest  *Armor
	Weapon *Weapon
	Shield *Shield
}

type Armor struct {
	Type      ArmorType
	Condition ItemCondition
	Quality   ItemQuality
}

type ArmorType struct {
	Name         string
	DefenseTypes map[AttackType]DamageType
	Material     MaterialType
}

var ChainmailArmor = ArmorType{
	Name: "Chainmail Armor",
	DefenseTypes: map[AttackType]DamageType{
		SwingAttack:  SlashDamage,
		ThrustAttack: PierceDamage,
	},
}

var ChainmailHelmet = ArmorType{
	Name: "Chainmail Helmet",
	DefenseTypes: map[AttackType]DamageType{
		SwingAttack:  SlashDamage,
		ThrustAttack: PierceDamage,
	},
}

var LeatherArmor = ArmorType{
	Name: "Leather Armor",
	DefenseTypes: map[AttackType]DamageType{
		SwingAttack: SlashDamage,
	},
}

var LeatherHelmet = ArmorType{
	Name: "Leather Helmet",
	DefenseTypes: map[AttackType]DamageType{
		SwingAttack: SlashDamage,
	},
}

type Weapon struct {
	Type      WeaponType
	Condition ItemCondition
	Quality   ItemQuality
	Material  MaterialType
}

type WeaponType struct {
	Name  string
	Class WeaponClass
}

var ShortSword = WeaponType{
	Name:  "Short Sword",
	Class: Sword,
}

var KrisDagger = WeaponType{
	Name:  "Kris",
	Class: Dagger,
}

type WeaponClass struct {
	Name           string
	AllowedTactics []Tactic
	DamageTypes    map[AttackType]DamageType
	Size           uint
}

var WarHammer = WeaponClass{
	Name: "War Hammer",
	AllowedTactics: []Tactic{
		NormalAttack,
		StrongAttack,
	},
	DamageTypes: map[AttackType]DamageType{
		SwingAttack: BluntDamage,
	},
	Size: 3,
}

var Sword = WeaponClass{
	Name: "Sword",
	AllowedTactics: []Tactic{
		NormalAttack,
		StrongAttack,
		WildAttack,
		QuickAttack,
	},
	DamageTypes: map[AttackType]DamageType{
		SwingAttack:  SlashDamage,
		ThrustAttack: PierceDamage,
	},
	Size: 2,
}

var Dagger = WeaponClass{
	Name: "Dagger",
	AllowedTactics: []Tactic{
		NormalAttack,
		QuickAttack,
	},
	DamageTypes: map[AttackType]DamageType{
		SwingAttack:  SlashDamage,
		ThrustAttack: PierceDamage,
	},
	Size: 1,
}

type Shield struct {
	Type      ShieldType
	Material  MaterialType
	Condition ItemCondition
	Quality   ItemQuality
}

type ShieldType struct {
	Name string
	Size uint
}

var Buckler = ShieldType{
	Name: "Buckler",
	Size: 1,
}
