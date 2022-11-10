"use strict";


let student = {
    name: "Ray",
    class: "IV",
    rollno: 12
}

console.log(student)

delete student.rollno
console.log(student);

let arr = [];

for (let prop in student) {
    if (student.hasOwnProperty(prop)) {
        arr.push(prop);
    }
}

console.log(arr.length);

let library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

for (let books = 0; books < library.length; books++) {
    let book = "'" + library[books].title + "'" + "by " + library[books].author
    if (library[books].readingStatus === true) {
        console.log("Has already read the " + book)
    } else console.log("Still needs to read the " + book);
}

let volume = null;
let pi = Math.PI;
let radius = 2;
let height = 7;

volume = height * pi * radius * radius;
console.log(volume.toFixed(4));

const data = [6, 4, 0, 3, -2, 1];

data.sort(function (a, b) {
    return a - b;
});

console.log(data);

var library2 = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

library2.sort((a, b) => b.libraryID - a.libraryID);

console.log(library2);

function numReverse(num) {
    num = 32243;
    let reversed = (num.toString().split("").reverse().join(""));
    return console.log(parseInt(reversed));
}

numReverse();

const array = ["madam", "nurse", "eye", "stop"];

function isPalindrome() {
    for (let arr of array) {
        if (arr.split("").join() === arr.split("").reverse().join()) {
            console.log(arr + " is palindrome");
        } else console.log(arr + " is not palindrome")
    }
};

isPalindrome()

function inAlphabeticalOrder() {
    let str = "webmaster";
    console.log(str.split("").sort().join(""));
}

inAlphabeticalOrder();

function eachWordToUpperString() {
    let str = "the quick brown fox";
    console.log(str.split(""))
};

function longestString(string) {
    string = "Web Development Tutorial";
    let longestStr = string.match(/\w[a-z]{0,}/gi);
    let firstItem = longestStr[0]
    for (let i of longestStr) {
        if (i.length > firstItem.length) {
            firstItem = i;
            console.log(i)
        }
    }
}

longestString()

function searchVowel() {
    let str = "THE QUICK BROWN FOX";
    let splitStr = str.toLowerCase().split("");
    let count = 0;
    const vowels = ["a", "e", "i", "o", "u"];

    for (let vowel of splitStr) {
        if (
          vowel === vowels[0] ||
          vowel === vowels[1] ||
          vowel === vowels[2] ||
          vowel === vowels[3] ||
          vowel === vowels[4]
        ) {
          count++;
        }
    };
    console.log(count);
};

searchVowel();

async function secondLowHigh() {
  let arr = [12, 34, 54, 643, 2434];
  let sorted = arr.sort((a,b) => b - a);
  sorted.shift();
  sorted.pop();
 
  console.log(Math.min(...sorted), Math.max(...sorted));
};

secondLowHigh();

console.log("---------------------------------------");

//form submission

let users = [];

function submitData() {

const userData = {
  firstname: document.getElementById("name").value.trim(),
  lastname: document.getElementById("lastname").value.trim(),
  email: document.getElementById("email").value.trim(),
};
    
if (userData.firstname === "") {
        document.getElementById("name").value = "Please enter a valid name";
    };
if (userData.lastname === "") {
      document.getElementById("lastname").value =
        "Please enter a valid lastname";
    };
if (userData.email === "" || !userData.email.includes("@")) {
      document.getElementById("email").value = "Please enter a valid email";
    };
if (
      userData.firstname !== "" &&
      userData.lastname !== "" &&
      userData.email !== "" &&
      userData.email.includes("@")
    ) {
    document.querySelectorAll(".input").forEach((el) =>
        el.value = "");
    
    let user = new Object();

    user.id = Date.now() + Math.floor(Math.random());
    user.firstname = userData.firstname;
    user.lastname = userData.lastname;
    user.email = userData.email;

    console.log(user);

    users.push(user);
    };
};

document.querySelectorAll(".input").forEach((el) =>
    el.addEventListener("click", function () {
        if (el.value === "Please enter a valid name" ||
            el.value === "Please enter a valid lastname" ||
            el.value === "Please enter a valid email") {
            el.value = "";
        }
    }));

function showUsers() {
  users.forEach(function (el) {

    let list = document.createElement("li");
    let ulList = document.getElementById("ul");
    let br = document.createElement("br");

    let createNameLists = document.createTextNode(
      `Firstname: ${el.firstname}  
      Lastname: ${el.lastname}  
      E-mail: ${el.email} `
    );
      
    list.appendChild(createNameLists);
    document.body.style = "white-space: pre;";

    ulList.appendChild(list);
    ulList.appendChild(br)
  }
  );
  users = [];
};

const arrUsers = [
  {
    id: 1,
    name: "Ray",
    isActive: true,
  },
   {
    id: 2,
    name: "Bob",
    isActive: false,
  },
    {
    id: 3,
    name: "Sam",
    isActive: false,
  },
     {
    id: 4,
    name: "Zoe",
    isActive: true,
  }
];

const usersName = [];
const usersNameByActive = [];
const usersNameByNotActive = [];

arrUsers.map((user) => usersName.push(user.name));

console.log(usersName);

arrUsers.map(function getByUserActive(user) {
  if (user.isActive === true) {
    usersNameByActive.push(user.name)
  } else {
    usersNameByNotActive.push(user.name);
  }
})

console.log(usersNameByActive)
console.log(usersNameByNotActive);

const [a, b, c, d] = arrUsers;
console.log(a, b, c, d);

//Nullish operator test

// const restaurant = {
//   numGuest: 0
// };

// function nulishOpPlus() {
//   restaurant.numGuest++;
//   let test = document.getElementById("test");
//   test.innerHTML = restaurant.numGuest;
//   const guests = restaurant.numGuest ?? restaurant.numGuest;
//   console.log(guests);
// }
// function nulishOpMinus() {
//   restaurant.numGuest--;
//   let test = document.getElementById("test");
//   test.innerHTML = restaurant.numGuest;
//   const guests = restaurant.numGuest ?? restaurant.numGuest;
//   console.log(guests);
// }

//Async await test

async function asyncTest() {
  let c = new Promise(function (resolve, reject) {
    resolve(5 + 5);
    reject("something went wrong")
  });

  await c;
  return console.log(c);
};

asyncTest();