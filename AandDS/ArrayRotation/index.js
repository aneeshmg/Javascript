// Rotate an array 'k' times

const rotate = (a, k) => {
    k = k % a.length
    return new Promise(resolve => {
        if (k == 0) resolve(a)
        else {
            let b = []
            while(k > 0) {
                for(let i = 0; i < a.length - 1; i++) {
                    b[i + 1] = a[i]
                }
                b[0] = a[a.length - 1]
                a = b.slice(0)
                k--
            }
            resolve(b)
        }
    })
}

module.exports = rotate