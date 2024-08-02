function describeName() {
  const description = ["blue", "big", "small", "old", "new"];
  const name = prompt("Please provide a name:");
  const x = description[Math.floor(Math.random() * 3)];
  console.log(`${name} ${x}`);
}

describeName();
