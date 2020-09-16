package game

type MaterialType string

const (
	Wood      MaterialType = "Wood"
	Stone     MaterialType = "Stone"
	Iron      MaterialType = "Iron"
	Steel     MaterialType = "Steel"
	Leather   MaterialType = "Leather"
	Chainmail MaterialType = "Chainmail"
	Cloth     MaterialType = "Cloth"
	Plate     MaterialType = "Plate"
)

type ItemCondition uint

const (
	WornCondition ItemCondition = 0
	FairCondition ItemCondition = 1
	GoodCondition ItemCondition = 2
)

type ItemQuality string

const (
	LowQuality       ItemQuality = "Low"
	NormalQuality    ItemQuality = "Normal"
	HighQuality      ItemQuality = "High"
	LegendaryQuality ItemQuality = "Legendary"
)
