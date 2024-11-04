### 1. **Переменные и типы данных**

#### **Переменные**
В JavaScript есть три способа объявить переменные: `var`, `let`, и `const`.

- **`var`** – старая конструкция, редко используется в новых проектах.
- **`let`** – используется для переменных, которые могут изменяться.
- **`const`** – используется для констант, значения которых не изменяются.

Пример:
```javascript
let name = "Vlad"; // переменная
const age = 29;     // константа
```

#### **Типы данных**
- **Примитивные типы**: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`.
- **Сложные типы**: объекты и массивы.

Пример:
```javascript
let text = "Hello, world !";    // string
let number = 42;       // number
let isTrue = true;     // boolean
let empty = null;      // null
let notDefined;        // undefined
let bigNum = 12345678901234567890n; // bigint

let array = [1, 2, 3];          // массив
let object = { key: "value" };  // объект
```

### 2. **Условия и циклы**

#### **Условия (`if`, `else`, `else if`)**

Условные операторы позволяют выполнять код в зависимости от определенных условий.

Пример:
```javascript
let temperature = 30;

if (temperature > 25) {
    console.log("It's hot outside!");
} else if (temperature > 15) {
    console.log("It's warm outside.");
} else {
    console.log("It's cold outside.");
}
```

#### **Циклы (`for`, `while`, `do while`)**

Циклы используются для повторения кода несколько раз.

**`for` цикл**:
```javascript
for (let i = 0; i < 5; i++) {
    console.log("Iteration:", i);
}
```

**`while` цикл**:
```javascript
let count = 0;
while (count < 5) {
    console.log("Count is:", count);
    count++;
}
```

**`do while` цикл**:
```javascript
let num = 0;
do {
    console.log("Number is:", num);
    num++;
} while (num < 5);
```
