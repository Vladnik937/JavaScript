# JavaScript
## HW_1 (in process)
```Javascript
// 1. Создаем переменную item_1
let item_1 = 5;  // 2. Присваиваем 5
console.log("item_1 = " + item_1);  // 3. Выводим item_1

// 4. Создаем переменную item_2
let item_2 = 3;  // 5. Присваиваем 3
console.log("item_2 = " + item_2);  // 6. Выводим item_2

// 7. Создаем переменную item_3
let item_3 = item_1 + item_2;  // 8. Присваиваем результат сложения
console.log("item_1 + item_2 = " + item_3);  // 9. Выводим item_3

// 10. Создаем переменную item_4
let item_4 = "Yolochka";  // 11. Присваиваем строку
console.log("item_4 = " + item_4);  // 12. Выводим item_4

// 13. Выводим сложение item_3 и item_4
console.log("Конкатенация item_3 + item_4: " + (item_3 + item_4));  // 13. Конкатенация

// 14. Выводим умножение item_3 и item_4
console.log("Умножение item_3 * item_4: " + (item_3 * item_4));  // 14. Умножение (будет NaN)

// 15. Создаем переменную item_5
let item_5 = item_3;  // 16. Присваиваем item_3

// 17. Создаем переменную item_6
let item_6 = 15;  // 19. Присваиваем 15
let item_6_type = typeof item_6;  // 20. Присваиваем тип item_6

// 21. Выводим тип данных item_6
console.log("item_6 == " + item_6 + ", item_6_type == " + item_6_type);  // 21. Выводим item_6 и тип

// 22. Преобразуем item_6 в строку и сохраняем в item_7
let item_7 = String(item_6);  // 22. Преобразуем в строку

// 23. Создаем переменную item_7_type
let item_7_type = typeof item_7;  // 24. Присваиваем тип item_7

// 25. Выводим тип данных item_7
console.log("item_7 == " + item_7 + ", item_7_type == " + item_7_type);  // 25. Выводим item_7 и его тип

// 26. Создаем переменную age_1
let age_1 = 10;  // 26. Присваиваем 10
let age_2 = 18;  // 27. Присваиваем 18
let age_3 = 60;  // 28. Присваиваем 60

// 29. Создаем if для проверки age_1
if(age_1 < age_2) {  // 30. Если age_1 < age_2
    console.log("You don't have access cause your age is " + age_1 + " It's less then " + age_2);
} else if(age_1 >= age_2 && age_1 < age_3) {  // 31. Если age_1 >= age_2 и age_1 < age_3
    console.log("Welcome !");
} else if(age_1 > age_3) {  // 32. Если age_1 > age_3
    console.log("Keep calm and look Culture channel");
} else {  // 33. В любом другом случае
    console.log("Technical work");
}
```
### Дополнительные задания к HW_1
#### HW_1_1
Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст. Вывести в консоль результат работы функции с возрастами 17, 18, 61
```javascript
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
```
#### HW_1_2
Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.
```javascript
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
console.log("NaN: " + check_age(NaN)); // Добавить проверку
console.log("Infinity: " + check_age(Infinity)); // добавить проверку
```
#### HW_1_3
Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
```javascript
const check_age = function(age) {
    const age_n = Number(age); // const age_n = +age
    
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
```
#### HW_1_4
Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке
```javascript
function UserAge() {
    const age = prompt("Введите ваш возраст");
    if(age === null || age.trim() ==="") {
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

// Добавление слушателя ивента на кнопку в html, чтобы при нажатии на кнопку выполнялась функция.
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("checkAge");
    button.addEventListener("click", UserAge);
});
```
Страница html
```html
<html>
  <head>
    <script src="JS_HW_1_4.js"></script> <!--Подключение JavaScript файла-->
  </head>
  <body>
    <div class="block1">
      <button id="checkAge"> AGE </button>
    </div>
  </body>
</html>
```
