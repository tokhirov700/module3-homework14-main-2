// .................. N 15 ............
// function fn(arr) {
//     let newArr = []
//    arr.forEach(num => {
//     if (num % 2 == 1) {
//         newArr.push(num)
//     }
//    });
//    return (newArr)
// }
// let result = fn([11,17,12,21,72,98,81,97,76,3,1,16,13,14,31,120,26])
// console.log(result)


// ...................... N 17 ..............

// function fn (arr1, arr2) {
//     let res = []
//    arr1.forEach(num => {

//     arr2.forEach(n =>{

//         if (n == num) {

//            res.push(n)

//         }
//     })
//    });
//    return (res)
// }
// let result = fn([2,4,5,3,45], [2,4,5,78,9,3])
// console.log(result)

// .................. N 18 ..............
// function fn () {
//     let num = +prompt("Takrorlanishlar sonini kiriting")
//     let number ;
//     let arr = []
//     let i = 0
//   do {
//     number = +prompt("Array uchun raqam kiriting")
//     arr.push(number)
//     i++
//   } while (i < num);
//   console.log(arr)
// }
// fn()

// ............. N 19 ..............
// function fn () {
//     let num = +prompt("Takrorlanishlar sonini kiriting")
//     let number ;
//     let arr = []
//     let i = 0
//   do {
//     number = +prompt("Array uchun raqam kiriting")
//     arr.push(number)
//     i++
//   } while (i < num);
//     let total = arr.reduce((a,b) => a + b,0)
//     return total
// }
// let result = fn()
// console.log(result)

// ................ N 20 ...............
// function fn () {
//     let num = +prompt("Takrorlanishlar sonini kiriting")
//     let number ;
//     let arr = []
//     let juft = []
//     let toq = []
    
//     let i = 0
//     let n = prompt("juft toqligini kiriting")
//   do {
//     number = +prompt("Array uchun raqam kiriting")
//     arr.push(number)
//     i++
//   } while (i < num);
//    for ( let i = 0; i < arr.length; i++){
//      if (i % 2 == 0) {
//         juft.push(arr[i])
//      }else{
//         toq.push(arr[i])
//      }
//    }
//    let key = prompt("juft yoki toq")
//    if (key == "juft") {
//     console.log(juft)
//    }else if( key == "toq"){
//     console.log(toq)
//    }
   
// }
// let result = fn()
// console.log(result)

// ............... N 21 ...............
// function fn (arr) {

//     for( let i = 0; i <arr.length; i++){
   
//     }
//     return (arr[arr.length -1])
// }
// let res = fn([2,3,1,3,"hi",true,"hello"])

// console.log(res)

// ................ N 22 ...............

// function set(arr) {
   
//     arr.sort((a, b) => a - b);
    
   
//     let uniqueArray = [];
//     for (let i = 0; i < arr.length; i++) {
       
//         if (arr[i] !== arr[i + 1]) {
//             uniqueArray.push(arr[i]);
//         }
//     }
    
//     return uniqueArray;

// }
// let res = set([1,2,3,1,66,4,3,66])
// console.log(res)