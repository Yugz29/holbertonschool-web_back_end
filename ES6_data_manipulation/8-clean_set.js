function cleanSet(set, startString) {
    if (typeof startString !== 'string' || startString === '') {
        return '';
    }

    const result = [];

    for (const value of set) {
        if (typeof value === 'string' && value.startsWith(startString)) {
            const extracted = value.slice(startString.length);
            result.push(extracted);
        }
    }
    return result.join('-');
}

export default cleanSet
