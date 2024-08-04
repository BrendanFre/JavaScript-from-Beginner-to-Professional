let target = '01 January 2028';

function countdown(date) {
  let updated = Date.parse(date) - new Date();
  let days = Math.floor(updated / (1000 * 60 * 60 * 24));
  let hours = Math.floor((updated / (1000 * 60 * 60) % 24));
  let minutes = Math.floor((updated / (1000 * 60)  % 60));
  let seconds = Math.floor((updated / (1000) % 60));

  return {
    "days": days,
    "hours": hours,
    "minutes": minutes,
    "seconds": seconds,
  }
}

function update(date){
  setTimeout(() => {
    let temp = countdown(date)
    let output = '';
    Object.keys(temp).forEach(key => output += `${temp[key]} ${key} `)
    output += `until ${date}`

    console.log(output)
  }, 1000)

}

update(target)