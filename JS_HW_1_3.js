const check_age = function(age) {
    const age_n = Number(age);
    
    // отсечение NaN, Inf, -Inf, дробных и отрицательных значений age
    if(!Number.isFinite(age_n) || !Number.isInteger(age_n) || age_n <= 0) {
        console.error("Ошибка: введите корректное число");
        return;
    }  
        
    if(age_n < 18) {
        return "You don't have access cause your age is " + age_n + " It's less then ";
    } else if(age_n >= 18 && age_n < 60) {
        return "Welcome !";
    } else if(age_n >= 60) {
        return "Keep calm and look Culture channel";
    } else {
        return "Technical work"; // просто есть
    }
}


console.log("Age 17: " + check_age(17));
console.log("Age 18: " + check_age(18));
console.log("Age 61: " + check_age(61));
console.log("Age 2: " + check_age("2"));
console.log("Age 14.5: " + check_age(14.5));
console.log("Text: " + check_age("Text"));
console.log("NaN: " + check_age(NaN)); 
console.log("Infinity: " + check_age(Infinity));