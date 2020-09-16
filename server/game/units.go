package game

import "math/rand"

type Unit struct {
	Name          string
	Type          UnitType
	BodyParts     []BodyPart
	Wounds        []BodyPart
	Equipment     *Equipment
	MaxExhaustion int
	Speed         int
	Morale        int
}

type UnitType string

const (
	Human  UnitType = "Human"
	Goblin UnitType = "Goblin"
)

type BodyPart string

const (
	RightArm BodyPart = "RightArm"
	LeftArm  BodyPart = "LeftArm"
	RightLeg BodyPart = "RightLeg"
	LeftLeg  BodyPart = "LeftLeg"
	Head     BodyPart = "Head"
	Chest    BodyPart = "Chest"
)

func CreateHumanoidBodyParts() []BodyPart {
	return []BodyPart{
		RightArm,
		LeftArm,
		RightLeg,
		LeftLeg,
		Head,
		Chest,
	}
}

func GenerateHuman(name string) *Unit {
	return &Unit{
		Name:      GenerateHumanName(),
		Type:      Human,
		BodyParts: CreateHumanoidBodyParts(),
		Equipment: &Equipment{
			Head: &Armor{
				Type:      ChainmailHelmet,
				Quality:   NormalQuality,
				Condition: FairCondition,
			},
			Chest: &Armor{
				Type:      ChainmailArmor,
				Quality:   NormalQuality,
				Condition: FairCondition,
			},
			Weapon: &Weapon{
				Type:      ShortSword,
				Material:  Iron,
				Quality:   NormalQuality,
				Condition: FairCondition,
			},
			Shield: &Shield{
				Type:      Buckler,
				Material:  Wood,
				Quality:   NormalQuality,
				Condition: FairCondition,
			},
		},
		MaxExhaustion: rand.Intn(10) + 15,
		Speed:         rand.Intn(3) + 2,
		Morale:        rand.Intn(2) + 0,
	}
}

func GenerateGoblin() *Unit {
	return &Unit{
		Name:      GenerateGoblinName(),
		Type:      Goblin,
		BodyParts: CreateHumanoidBodyParts(),
		Equipment: &Equipment{
			Chest: &Armor{
				Type:      LeatherArmor,
				Quality:   LowQuality,
				Condition: WornCondition,
			},
			Weapon: &Weapon{
				Type:      KrisDagger,
				Material:  Iron,
				Quality:   LowQuality,
				Condition: WornCondition,
			},
		},
		MaxExhaustion: rand.Intn(4) + 8,
		Speed:         rand.Intn(3) + -3,
		Morale:        rand.Intn(3) + -2,
	}
}

func CreateGoblin(name string) *Unit {
	return &Unit{
		Name: GenerateGoblinName(),
		Type: Goblin,
	}
}
