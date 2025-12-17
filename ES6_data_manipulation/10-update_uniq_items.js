function updateUniqueItems(map) {
    if (map instanceof Map) {
        for (const [key, value] of map) {
            if (value === 1) {
               map.set(key, 100);
            }
        }
        return map;
    } else {
        throw new Error("Cannot process");
    }
}

export default updateUniqueItems;
