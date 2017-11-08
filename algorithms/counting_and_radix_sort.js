function countingSort(arr) {
    let temp = [];
    let order = {};
    for (let i = 0; i < arr.length; i ++) {
        if (order.hasOwnProperty(arr[i])) {
            order[arr[i]] += 1;
        }
        else {
            order[arr[i]] = 1;
        }
        temp.push(arr[i]);
    }
    temp.sort(function(a, b) {
        return a - b;
    });
    return temp;
}

var arr = [5, 3, 10, 2, 4, 2, 3];
console.log(countingSort(arr));

function radixSort(arr, temp=[], result=[]) {
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i].length >= 1) {
            temp.push(arr[i]);
            let nums = arr[i].toString().split("");
            nums = nums.slice(0, nums.length - 1);
            arr[i] = parseInt(nums.join(""), 10);
            console.log(arr[i]);
            temp = countingSort(temp);
        }
    }
    if (!arr.some(isNaN)) {
        radixSort(arr, temp, result);
        }
    else {
        return result;
    }
}

var arr2 = [100, 2039, 421, 29383, 44, 2, 10, 120];
console.log(radixSort(arr2));
    