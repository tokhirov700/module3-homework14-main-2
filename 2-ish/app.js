function fn(array) {
    let type;

    array.forEach(element => {

        type = (typeof element)

        if (type == "string") {
           return (element)
        }
    });
}
let result = fn([2,true,"salom",undefined,"hello",null, "world"])
console.log(result)