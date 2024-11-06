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
