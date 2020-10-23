"use strict";
let toDoItem = document.getElementById("Todo"),
    ok = document.getElementById("Save"),
    toDoList = {},
    i = 0,
    arr = document.getElementById("Arr"),
    arrlist = document.querySelectorAll(".arrlist"),
    xdelete = document.querySelectorAll(".delete");


function myFunction() {
  toDoList[i] = toDoItem.value;
  if (toDoList[i] !== ''){
    arr.innerHTML += `
    <div class="arrlist">${toDoList[i]}
     <span class="delete">x</span>
     </div>`;
    toDoItem.value = '';
    i++;
  } else{
    alert("Вы не ввели значение! Попытайтесь еще раз!");
  }
}


ok.addEventListener("click", myFunction);

// Почему это работает??????
arr.onclick = () => {
  console.log("test_1");
};
// А это не работает?????????????????????????????????????????????
arrlist.onclick = () => {
  console.log("test_2");
};



