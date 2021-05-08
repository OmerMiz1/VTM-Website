export const stringLength  = (text, count, insertDots) => {
    return text.slice(0, count) + (((text.length > count) && insertDots) ? "..." : "");
}