document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("check_pass");
    button.addEventListener("click", valid_script);
});

function valid_script() {
    const pass = prompt("Введите значение");

    // пустое поле, либо отмена
    if (empty_null(pass)) {
        alert("Вы отменили действие или оставили поле пустым");
        return;
    }

    // min-max range
    if (!max_min_range(pass)) {
        return;
    }

    // проверки на содержимое
    if (!lower_field(pass)) {
        alert("Поле должно содержать строчные буквы");
        return;
    }

    if (!upper_field(pass)) {
        alert("Поле должно содержать хотя-бы одну заглавную букву");
        return;
    }

    if (!number_field(pass)) {
        alert("Поле должно содержать хотя-бы одну цифру");
        return;
    }

    if (!includes_field(pass)) {
        alert("Поле должно содержать символ '@'");
        return;
    }
    alert("Поле прошло все проверки!");
}

function empty_null(pass) {
    return pass === null || pass.trim() === "";
}

function max_min_range(pass) {
    if (pass.length < 5) {
        alert("Минимальная длина поля составляет 5 символов");
        return false;
    }

    if (pass.length > 64) {
        alert("Максимальная длина поля составляет 64 символа");
        return false;
    }
    return true;
}

const lower = /[a-z]/;
const upper = /[A-Z]/;
const numbers = /[0-9]/;  // const numbers = /\d/;


function lower_field(pass) {
    return lower.test(pass);
}


function upper_field(pass) {
    return upper.test(pass);
}


function number_field(pass) {
    return numbers.test(pass);
}


function includes_field(pass) {
    return pass.includes("@");
}