
/* const array = [a, b, 43, 56, true]
console.log('array', array)/
*/

function foo(b,c) {
    return a = b + c;
}
console.log(foo(13,41)) 

/*
const foo1 = function (name) {
    return "Меня зовут " + name;
}

console.log(foo1('Николай'))
*/
let $nav = document.querySelectorAll('.nav-item__link');
console.log('$nav', $nav)

let $btn = document.querySelector('.btn')

// function foo(event) {
//     event.preventDefault()
//     alert('Вы нажали на кнопку')

}
/* действие при нажатии на кнопку Learn More

$btn.addEventListener('click', function valueInput(event) {
    let $mainBlock = document.querySelector('.main-block')
let input = document.createElement('input')
input.classList.add('main-input')
$mainBlock.append(input)

}
)
*/

const arr = [1,2,3,4,5]
function foo2(arr) {
    const arr1 = []
    for(let i=0; i<arr.lenght;i++){
        arr1.push(arr[i]*2)
    }
    return arr1
}

foo2(arr)

