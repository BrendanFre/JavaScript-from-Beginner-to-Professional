const car = {
  make: "Vauxhall",
  model: "Astra",
  MOT: true,
};

for (const key in car) {
    console.log(`${key} : ${car[key]}`)
}