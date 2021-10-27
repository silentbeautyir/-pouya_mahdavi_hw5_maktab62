let tedad = Number(prompt("Enter The Number OF Car:"));
let star = '';
for (let i = 0; i < 300; i++) {
    star += ('*');
}
starArr = star.split('');

let done = true;
let indexOfFirstCar = 0;
let indexOfSecondCar = 1;
let indexOfThirdCar = 2;
let carNameArr = [];
for (let i = 1; i <= tedad; i++) {
    let carName = prompt("Enter The Name OF Car:");
    carNameArr.push(carName);
}


let arrNumCar = [];

while (done) {
    for (let j = 1; j <= 3; j++) {
        let num = Math.floor(Math.random() * 10);

        if (j === 1) {
            if (indexOfFirstCar === 0) {
                starArr.splice((num + indexOfFirstCar), 1, carNameArr[0]);

                indexOfFirstCar = num + indexOfFirstCar;
            }
            else {
                starArr.splice((num + indexOfFirstCar), 1, carNameArr[0]);
                starArr.splice(indexOfFirstCar, 1, '*');
                indexOfFirstCar = num + indexOfFirstCar;
            }
            console.log(starArr);
            if (indexOfFirstCar === indexOfSecondCar) {
                indexOfSecondCar = 0;
            }
            else if (indexOfFirstCar === indexOfThirdCar) {
                indexOfThirdCar = 0;
            }
        }
        else if (j === 2) {
            if (indexOfSecondCar === 0) {
                starArr.splice((num + indexOfSecondCar), 1, carNameArr[1]);

                indexOfSecondCar = num + indexOfSecondCar;
            }
            else {
                starArr.splice((num + indexOfSecondCar), 1, carNameArr[1]);
                starArr.splice(indexOfSecondCar, 1, '*');
                indexOfSecondCar = num + indexOfSecondCar;
            }
            console.log(starArr);
            if (indexOfSecondCar === indexOfFirstCar) {
                indexOfFirstCar = 0;
            }
            else if (indexOfSecondCar === indexOfThirdCar) {
                indexOfThirdCar = 0;
            }
        }
        else if (j === 3) {
            if (indexOfThirdCar === 0) {
                starArr.splice((num + indexOfThirdCar), 1, carNameArr[2]);

                indexOfThirdCar = num + indexOfThirdCar;
            }
            else {
                starArr.splice((num + indexOfThirdCar), 1, carNameArr[2]);
                starArr.splice(indexOfThirdCar, 1, '*');
                indexOfThirdCar = num + indexOfThirdCar;
            }
            console.log(starArr);
            if (indexOfThirdCar === indexOfFirstCar) {
                indexOfFirstCar = 0;
            }
            else if (indexOfThirdCar === indexOfSecondCar) {
                indexOfSecondCar = 0;
            }
        }

    }
    arrNumCar.push(indexOfFirstCar, indexOfSecondCar, indexOfThirdCar);
    console.log(arrNumCar);
    if (indexOfFirstCar > 300) {

        done = false;
        console.log(`Winner is : ${carNameArr[0]}`);
    }
    else if (indexOfSecondCar > 300) {
        done = false;
        console.log(`Winner is : ${carNameArr[1]}`);
    }
    else if (indexOfThirdCar > 300) {
        done = false;
        console.log(`Winner is : ${carNameArr[2]}`);
    }
}