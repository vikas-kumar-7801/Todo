let todoList =['Go for lunch', 'Wash my car', 'Meditation'];
let todoDate =['02-09-2024','02-09-2024','02-09-2024'];
let todoTime =['22:09','22:09','22:09'];
let i;
let date = document.querySelector('#date');
let task = document.querySelector('#task');
let time = document.querySelector('#time');


displayItems();

function addTask() {
  if (task.value ==='') {
    alert('Please Enter Task')
  }else if (date.value === '') {
    date.value = todayDate();
  }else{
    console.log(task.value);
    console.log(date.value);
    console.log(time.value);
    todoList.push(task.value);  
    todoDate.push(date.value);  
    todoTime.push(time.value);  
  }
  
  task.value ='';
  displayItems();
}

function defaultDate() {
  date.value = todayDate();
}

function todayDate() {
  let finalDate;
  let dateNumber = new Date().getDate();
  let dateMonth = new Date().getMonth()+1;
  let dateYear = new Date().getFullYear();
  
  if (dateNumber.toString().length === 1) {
    dateNumber=`0${dateNumber}`;
  }
  
  if (dateMonth.toString().length === 1) {
    dateMonth=`0${dateMonth}`;  
  }
  
  finalDate = `${dateYear}-${dateMonth}-${dateNumber}`
  return finalDate;
}

function defaulttime() {
  time.value = CurrentTime();
}

function CurrentTime() {
  let finalTime;
  let timeHours = new Date().getHours();
  let timeMinutes = new Date().getMinutes();
  if (timeHours.toString().length === 1) {
    timeHours=`0${timeHours}`;
  }
  if (timeMinutes.toString().length === 1) {
    timeMinutes=`0${timeMinutes}`;
  }
  
  finalTime = `${timeHours}:${timeMinutes}`;
  return finalTime;
}




function displayItems() {
  let displayContainer = document.querySelector('#displayContainer');
  let newHtml = '';

  for (let i = 0; i < todoList.length; i++) {
    newHtml +=`
      <div class='js-div'>
 

      <div class='js-spanContainer'>
        <div class='boxL'>
          <span id='js-todoList'>${todoList[i]}</span>
        </div>
        <div class='boxDT'>
          <div class='span'>
            <span id='js-todoDate'>${todoDate[i]}</span>
            <span id='js-todoTime'>${todoTime[i]}</span>
          </div>
          <div class='close'>
            <button onclick=
            'todoList.splice(${i}, 1);todoDate.splice(${i}, 1);todoTime.splice(${i}, 1);displayItems();' id='close'>
            <span class="material-symbols-outlined">close</span>
            </button>
          </div>
        </div>
      </div>
 


      </div>
    `;

  }

  displayContainer.innerHTML = newHtml;
}

