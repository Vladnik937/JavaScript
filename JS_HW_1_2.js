const check_age = function(age) {
    if(typeof age === "number") {
        if(age > 0 && age < 18) {
            return "You don't have access cause your age is " + age + " It's less then ";
        } else if(age >= 18 && age < 60) {
            return "Welcome !";
        } else if(age >= 60) {
            return "Keep calm and look Culture channel";
        } else {
            return "Technical work";
        } 
    } else {
        console.error("Ошибка: введите число")
    }
}

console.log("Age 17: " + check_age(17));
console.log("Age 18: " + check_age(18));
console.log("Age 61: " + check_age(61));
console.log("Text: " + check_age("Text"));
//console.log("NaN: " + check_age(NaN)); // Добавить проверку
//console.log("Infinity: " + check_age(Infinity)); // добавить проверку