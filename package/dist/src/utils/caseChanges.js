export function camelToKebabCase(str) {
    return str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}
export function kebabToCamelCase(str) {
    return str.replace(/-./g, match => match[1].toUpperCase());
}
export function kebabToPascalCase(str) {
    return str
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join("");
}
export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
