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
  if (toDoList[i] !== "") {
    arr.innerHTML += `
    <div class="arrlist">${toDoList[i]}
     <span class="delete">x</span>
     </div>`;
    toDoItem.value = "";
    i++;
  } else {
    alert("Вы не ввели значение! Попытайтесь еще раз!");
  }
}

ok.addEventListener("click", myFunction);

// Почему это работает??????
//--> Все просто, элемент Arr существует сразу в разметке и это Element собственной персоной
arr.onclick = () => {
  console.log("test_1");
};
// А это не работает?????????????????????????????????????????????
//-->  arrlist это коллекция а не Element, а нужно на каждом Елементе в коллекции
//--> и еще очень ВАЖНО помнить
//--> один из самых простых вариантов для коллекции - ее нужно обновлять на каждом добалении Елемента
//--> arrlist = document.querySelectorAll(".arrlist") нужно делать КАЖДЫЙ раз
/*
т.е. в myFunction нужно добавить в конце if примерно такой вот код
  arrlist = document.querySelectorAll(".arrlist");
  xdelete = document.querySelectorAll(".delete");
  for(el in xdelete) {
      if(xdelete.hasOwnProperty(el)) {
          console.log(xdelete[el])  
          xdelete[el].onclick = () => {
            console.log("test_delete");
          };  
      }
  }
самый этакий ламерский но тож ничего, перепишем потом на более "правильный"
*/
arrlist.onclick = () => {
  console.log("test_2");
};
