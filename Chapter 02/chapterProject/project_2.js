const inchesToCM = 2.54;
const poundsToKilos = 2.2046;

const heightInch = 71;
const weightPounds = 168;

const heightCM = heightInch * inchesToCM;
const weightKilo = weightPounds / poundsToKilos;

let bmi = weightKilo / ((heightCM / 100) ** 2);

console.log(`${heightInch} inches in cm is : ${heightCM}`);
console.log(`${weightPounds} pounds in kilos is : ${weightKilo}`);
console.log(`bmi is : ${bmi}`);