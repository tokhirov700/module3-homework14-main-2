function fn () {
    let num = +prompt("Takrorlanishlar sonini kiriting")
    let number ;
    let arr = []
    let i = 0
  do {
    number = +prompt("Array uchun raqam kiriting")
    arr.push(number)
    i++
  } while (i < num);
  console.log(arr)
}
fn()