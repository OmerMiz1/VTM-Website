// TODO: function to split words
const numberToString = {
	1: "private",
	2: "custom",
	3: "public"
}

const stringToNumber = {
	"private": 1,
	"custom": 2,
	"public": 3
}

export const NumberToString = (number) => numberToString[number];
export const StringToNumber = (string) => stringToNumber[string];
