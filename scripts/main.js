
document.querySelector('h1').onclick = function () {
    alert("别戳我，疼");
}

let myImage = document.querySelector('img');
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/image1.jpeg') {
        myImage.setAttribute('src', 'images/image2.jpeg');
    } else {
        myImage.setAttribute('src', 'images/image1.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myButton.onclick = function () {
    setUserName();
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

function test(num1, num2) {
    let sum = num1 + num2;
    return sum
}

function setUserName() {
    let myName = prompt('请输入你的名字！');
    if (!myName || myName === null) {
        setUserName()
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }
}