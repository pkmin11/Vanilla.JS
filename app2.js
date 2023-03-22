/*const player = {
    name: "Nico",
    age: 98,
};
console.log(player);
player.name = "nicolas";
console.log(player);
player.sexy = "soon";
console.log(player, console);

function plus(potato,salad){
    console.log(potato+salad);
}

plus(5,10);
plus(1.4544,9898);
plus(9898, 1.4544)

function minusFive(potato){
    console.log(potato -5);
}

minusFive(5,10,12,34,4,5,6,7);

const calculator = {
    add: function(a,b){
        console.log(a,b);
    } 
};

calculator.add(5,1);
console.log();*/

/* DAY 3 과제 : Calculator 만들기 2.10
const caculator = {
    add: function(a,b){
        console.log(a+b);
    },
    minus: function(a,b){
        console.log(a-b);
    },
    divide: function(a,b){
        console.log(a/b);
    },
    multi: function(a,b){
        console.log(a*b);
    },
    powerof: function(a,b){
        console.log(a**b)
    }
}
caculator.add(8,2);
caculator.minus(8,2);
caculator.divide(8,2);
caculator.multi(8,2);
caculator.powerof(8,2);*/

/*
const age = 96;

function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge);

const calculator = {
    add: function(a,b){
        return a+b;
        console.log("hello");
        // 함수는 return에서 끝나므로 console.log 출력x
    },
    minus: function(a,b){
        return a-b;
    },
    divide: function(a,b){
        return a/b;
    },
    multi: function(a,b){
        return a*b;
    },
    powerof: function(a,b){
        return a**b
    }
};
const addResult = calculator.add(8,2);
const minusResult = calculator.minus(addResult,2);
const divideResult = calculator.divide(8,minusResult);
const multiResult = calculator.multi(divideResult,2);
const powerResult = calculator.powerof(8,multiResult);

console.log(addResult);
console.log(minusResult);
console.log(divideResult);
console.log(multiResult);
console.log(powerResult);
*/


const age = parseInt(prompt("How old are you? "));

//console.log(age);
//console.log(age, parseInt(age));

/*true || true === true
false || true === true
true || false === true
false || false === false
true && true === true
false && true === false
true && false === false
false || false === false*/

if(isNaN(age) || age < 0){
    /// condition === true
    console.log("Please write a real positive number.")
}else if (age < 18){
    console.log("You are too young.");
} else if (age>=18 && age <= 50) {
    console.log("Yes, you can drink");
} else if ( age> 50 && age <=80){
    console.log("you should exercise");
} else if (age === 100){
    console.log("Wow you are wise");
} else if (age > 80) {
    console.log("You can do whatever you want");
} 













