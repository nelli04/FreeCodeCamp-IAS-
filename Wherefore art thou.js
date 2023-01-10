function whatIsInAName(collection, source) {
    const arr = []
    for (let i = 0; i < collection.length; i++) {
        let x = true;
        for (let sources in source) {
            if (collection[i][sources] !== source[sources]) {
                x = false;
                break;
            }
        }
        if (x) arr.push(collection[i])
    }
    return arr;
}