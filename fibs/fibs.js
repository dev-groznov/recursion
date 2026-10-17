const fibs = function(n) {
    const res = []
     if (n === 1) {
        res.push(0)
    } else if (n === 2) {
        res.push(0, 1)
    } else if (n > 2) {
        res.push(0, 1)
        for(let i = 2; i < n; i++) {
            res.push(res[i - 1] + res[i - 2])
        }
    }
    return res
}

const fibsRec = function(n) {
     if (n === 1) {
        return [0]
    } else if (n === 2) {
        return [0, 1]
    } else if (n > 2) {
        const lastFib = fibsRec(n - 1)
        lastFib.push(lastFib.at(-1) + lastFib.at(-2))
        return  lastFib
    } else {
        return []
    }
}

module.exports = fibsRec;