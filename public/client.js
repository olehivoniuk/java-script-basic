

let curr = new Date();
let currentMonth = curr.getMonth();
let currentYear = curr.getFullYear();

for (let i = currentMonth; i <= 11; i++) {
    let lastDayOfMonth = new Date(currentYear, i + 1, 0).getDate();

    for (let j = 1; j <= lastDayOfMonth; j++) {
        let date = new Date(currentYear, i, j);

        if (date.getDate() === 13 && date.getDay() === 5) {
            console.log(date);
        }
    }
}














