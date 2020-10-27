var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

const handle = (arr) => {
    const result = Array.from(new Set(arr.flat(4))).sort((a, b) => a - b)
    return result
}

// 补充： flat() 方法对node版本有要求，至少需要12.0以上
const handle = (arr) => {
    while(arr.some(Array.isArray)){
        arr = [].concat(...arr)
    }
    arr = Array.from(new Set(arr)).sort((a, b) => a - b)
    return arr
}
// 
console.log(handle(arr)); 