function hasValuesFromArray(set, array) {
    for (let element of array) {
        if (!set.has(element)) {
            return false;
        }
    }
    return true;
}

export default hasValuesFromArray;
