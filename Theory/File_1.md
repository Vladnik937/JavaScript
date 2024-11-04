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
