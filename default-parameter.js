function add(num1, num2){
    const total = num1+ num2;
    return total;
}

// const number =add(12, 23); 
// console.log(number);

//default value
function add(num1, num2=23){
    const total = num1+ num2;
    return total;
}

const number =add(12); 
console.log(number);


function frdName(first, last){
    const name =first +' '+last;
    return name;

}
const fullName =frdName('Nishat', 'Fariza');
console.log(fullName);



function frdNameN(first, last='Ahmed'){
    const name1 =first +' '+last;
    return name1;

}
const fullName2 =frdNameN('Nishat');
console.log(fullName2);