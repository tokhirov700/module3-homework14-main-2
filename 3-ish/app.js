function fn (arr1, arr2) {
    let res = []
   arr1.forEach(num => {

    arr2.forEach(n =>{

        if (n == num) {

           res.push(n)

        }
    })
   });
   return (res)
}
let result = fn([2,4,5,3,45], [2,4,5,78,9,3])
console.log(result)