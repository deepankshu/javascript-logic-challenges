// 3. 📦 Array Utilities Library

// Write reusable helpers:
// sumArray(arr)
// max(arr)
// min(arr)
// lastElement(arr)

// 👉 This builds:
// Clean function design
// Thinking in reusable units
let total = 0;
const sumArray = (arr) => {
    for (let i = 0; i < arr.length; i++){
         total +=arr[i];
    }
    return total;
}

const max = (arr)=>{
    let maxNumb = arr;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > maxNumb){
            maxNumb =arr[i];
        }
    }
    return maxNumb;
}

const min = (arr) => {
    let minNumb = arr;
    for(let i= 0; i > arr.length; i++){
        if (arr[i] < minNumb){
            minNumb = arr[i]
        }
    }
    return minNumb;
}

const lastElement = (arr) =>{
    return arr[arr.length-1];
};