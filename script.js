let a = 15;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);


let age = 17;

if (age >= 18) {
    console.log("Доступ разрешён");
} else {
    console.log("Доступ запрещён");
}
let number = 24;

if (number % 2 === 0) {
    console.log("Чётное");
} else {
    console.log("Нечётное");
}
let score = 85;

if (score >= 90 && score <= 100) {
    console.log("Отлично");
} else if (score >= 70 && score <= 89) {
    console.log("Хорошо");
} else if (score >= 50 && score <= 69) {
    console.log("Удовлетворительно");
} else if (score >= 0 && score <= 49) {
    console.log("Не сдал");
} else {
    console.log("Некорректный балл");
}
let color = "green";

if (color === "red") {
    console.log("Стой");
} else if (color === "yellow") {
    console.log("Подожди");
} else if (color === "green") {
    console.log("Можно идти");
} else {
    console.log("Неизвестный сигнал");
}
let age2 = 16;

if (age2 >= 18) {
    console.log("Совершеннолетний");
} else {
    console.log("Несовершеннолетний");
}
let balance = 50000;
let withdraw = 20000;

if (withdraw <= 0) {
    console.log("Некорректная сумма");
} else if (withdraw > balance) {
    console.log("Недостаточно средств");
} else {
    balance = balance - withdraw;
    console.log("Новый баланс:", balance);
}
let total = 35000;
let discount;

if (total < 10000) {
    discount = 0;
} else if (total < 30000) {
    discount = 5;
} else if (total < 50000) {
    discount = 10;
} else {
    discount = 15;
}

let discountAmount = total * discount / 100;
let finalTotal = total - discountAmount;

console.log("Скидка:", discount + "%");
console.log("Размер скидки:", discountAmount);
console.log("Итоговая сумма:", finalTotal);
for (let i = 1; i <= 10; i++) {
    console.log("7 x " + i + " = " + (7 * i));
}
function checkPassword(password) {
    if (password.length < 8) {
        console.log("Слишком короткий пароль");
    } else if (!/\d/.test(password)) {
        console.log("Добавьте цифру");
    } else {
        console.log("Пароль принят");
    }
}

checkPassword("abc123");
checkPassword("abcdefgh");
checkPassword("abc12345");