function distroyer(arr, ...elems) {
    return arr.filter(elem => !elems.includes(elem))
}