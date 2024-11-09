function UserAge() {
    const age = prompt("Введите ваш возраст");
    if(age === null || age.trim() === "") {
        alert("Вы нажали кнопку отмена или оставили поле пустым");
        return;
    }
    const age_n = Number(age); // const age_n = +age
    
    // отсечение NaN, Inf, -Inf, дробных и отрицательных значений age
    if(!Number.isFinite(age_n) || !Number.isInteger(age_n) || age_n <= 0) {
        console.error("Ошибка: введите корректное число");
        alert("Введите корректное число");
        return;
    }  
        
    if(age_n < 18) {
        alert("You don't have access cause your age is " + age_n + " It's less then ");
    } else if(age_n >= 18 && age_n < 60) {
        alert("Welcome !");
    } else if(age_n >= 60) {
        alert("Keep calm and look Culture channel");
    } else {
        alert("Technical work"); // просто есть
    }
}

// Добавление слушателя ивента на кнопку в html
// Чтобы при нажатии на кнопку выполнялась функция.
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("checkAge");
    button.addEventListener("click", UserAge);
});