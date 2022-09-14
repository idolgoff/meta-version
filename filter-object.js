module.exports = {
    filterObject: (obj, filterFunction) => Object.keys(obj).reduce((acc, key) => {
        if (filterFunction(key, obj[key])) acc[key] = obj[key];
        return acc;
    }, {}),
}