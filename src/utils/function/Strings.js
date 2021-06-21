export const stringLength = (text, count, insertDots) => {
	return text.slice(0, count) + (((text.length > count) && insertDots) ? "..." : "");
}

export const ObjectStr = (obj) => JSON.stringify(obj, null, 2);