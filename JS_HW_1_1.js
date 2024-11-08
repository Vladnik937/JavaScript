const check_age = function(age) {
    if(age > 0 && age < 18) {
        return "You don't have access cause your age is " + age + " It's less then ";
    } else if(age >= 18 && age < 60) {
        return "Welcome !";
    } else if(age >= 60) {
        return "Keep calm and look Culture channel";
    } else {
        return "Technical work";
    }
}

console.log(check_age(17));
console.log(check_age(18));
console.log(check_age(61));