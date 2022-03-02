const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

const TODOS_KEY = "todos";
let toDos = []; // 새로고침하기 전 값들 저장 위해 let 사용

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos)); // array로 저장되지는 않음
}
// JSON.stringify는 array또는 어떤 jscode던 배열같이 생긴 string으로 바꿔줌 
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now() // 랜덤값 부여, ID를 통해 삭제 값식별위해
    };
    toDos.push(newTodoObj); // 배열에 저장
    paintToDo(newTodoObj);
    saveToDos();
}


function deleteToDo(event){
   const li = event.target.parentElement; // 해당 버튼의 정보 제공
   li.remove(); 
   toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
   saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo.text;
    toDoList.appendChild(li);
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null)
{
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
} 