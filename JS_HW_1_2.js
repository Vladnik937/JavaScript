const check_age = function(age) {
    let age_type = typeof age;
    console.log("Тип данных: " + age_type);
    if(age_type === "number") {
        if(age < 10) {
            return "You don't have access cause your age is " + age + " It's less then ";
        } else if(age >= 18 && age < 60) {
            return "Welcome !";
        } else if(age >= 60) {
            return "Keep calm and look Culture channel";
        } else {
            return "Technical work";
        }
    } else {
        console.error("Ошибка типа данных");
    }
    
}

console.log(check_age(9));
console.log(check_age(17));
console.log(check_age(18));
console.log(check_age(61));
console.log(check_age("Text"));