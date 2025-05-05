// opportunities[0].campaigns[0]
// opportunities: map bigintToString
// campaign: map bigintToString
export default function bigintToString(obj) {
    if (Array.isArray(obj))
        return obj.map(bigintToString);
    if (typeof obj === "object" && obj !== null) {
        return Object.keys(obj).reduce((acc, key) => {
            const value = obj[key];
            if (typeof value === "bigint")
                acc[key] = value.toString();
            else if (typeof value === "object" || Array.isArray(value))
                acc[key] = bigintToString(value);
            else
                acc[key] = value;
            return acc;
        }, {});
    }
    return obj;
}
