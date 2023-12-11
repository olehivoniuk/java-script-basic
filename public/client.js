
function formatDateToObject(dateString) {
    const [year, month, day] = dateString.split('-');

    return {
        year,
        month,
        day,
    };
}

const inputDate = '2025-12-31';
const result = formatDateToObject(inputDate);

console.log(result);
