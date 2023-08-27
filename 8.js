let date1 = new Date();
let date2 = new Date('2023-08-31');

let total_seconds = Math.abs(date2-date1)/1000;
let day_difference = Math.floor(total_seconds/(60*60*24));
console.log(day_difference);
