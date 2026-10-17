const merge = function(leftArr, rightArr) {
    let l = 0, r = 0;
    let newArr = []

    while(l < leftArr.length && r < rightArr.length) {
        if (leftArr[l] > rightArr[r]) {
            newArr.push(rightArr[r])
            r += 1
        } else {
            newArr.push(leftArr[l])
            l += 1
        }
    }

    if (l < leftArr.length) {
        return newArr = [...newArr, ...leftArr.slice(l)]
    } 
    return newArr = [...newArr, ...rightArr.slice(r)]
}

const mergeSort = function(arr) {
    if (arr.length <= 1) return arr
    const mid = Math.floor(arr.length / 2)
    const leftArr = mergeSort(arr.slice(0, mid))
    const rightArr = mergeSort(arr.slice(mid))
    return merge(leftArr, rightArr)
}

module.exports = mergeSort;