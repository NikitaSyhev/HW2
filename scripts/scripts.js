alert('Задание 1');

//создали массив
var arr1 = ['Hello', 'Constant', 'Windows', 'Win'];
//создали и инициализировали переменные для записи макс длины и самого длинного слова
var stringMax = '';
var maxNum = arr1[0].length;

for(let i = 0; i < arr1.length; ++i) {
    if(arr1[i].length > maxNum) {
        maxNum = arr1[i].length;
        stringMax = arr1[i];      
    }
}

const newArray = Array.from(stringMax); 
console.log(`Исходный массив: ${arr1}`);
console.log(`Итоговый массив: ${newArray}`);


alert('Задание 2');


//создали функцию
function marker (text, color, num) {
    document.write(`<p style="font-size: ${num}px; font-family: 'Comic Sans MS'; color: ${color};">${text}</p>`);
}
// вызвали ее
marker('Hello, world!', 'red', 33);


alert('Задание 3');

function placeImages(array){
    
    for(let i = 0; i < array.length; ++i) {
    box.innerHTML = `<img src ="${array[i]}" alt="text">`;
    }
}

let arrayPath = ['https://papik.pro/uploads/posts/2021-11/thumbs/1636170530_54-papik-pro-p-stalker-logotip-foto-56.png', 'https://papik.pro/uploads/posts/2021-11/1636170492_39-papik-pro-p-stalker-logotip-foto-40.jpg'];

placeImages(arrayPath);

