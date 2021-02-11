// Events
document.querySelector('.board').addEventListener("click", check);
//Functions

function addTask() {
    //Getting Values
    let text = document.getElementById('text').value;

    // Generate the HTML 
    const contBoxes = document.getElementById('cont-boxes');
    const contBox = document.createElement('div');
    const contCheck = document.createElement('div');
    const contCheckBox = document.createElement('div');
    const imgCheck = document.createElement('img');
    const contTitle = document.createElement('div');
    const contDelete = document.createElement('div');
    const contDeleteBox = document.createElement('div');
    const imgDelete = document.createElement('img');

    contBox.classList.add('box');
    contCheck.classList.add('check');
    contCheckBox.classList.add('check-box');
    imgCheck.classList.add('checker');
    contTitle.classList.add('title');
    contDelete.classList.add('delete');
    contDeleteBox.classList.add('delete-box');


    contTitle.textContent = text;
    imgCheck.src = "assets/images/uncheck.png";
    imgCheck.setAttribute("alt", "uncheck");
    imgDelete.src = "assets/images/delete.png";
    imgDelete.setAttribute("alt", "delete");

    // Delete Task
    contDelete.setAttribute('onclick', "this.parentNode.remove(); showAll();");


    contBoxes.appendChild(contBox);
    contBox.appendChild(contCheck);
    contCheck.appendChild(contCheckBox);
    contCheckBox.appendChild(imgCheck);
    contBox.appendChild(contTitle);
    contBox.appendChild(contDelete);
    contDelete.appendChild(contDeleteBox);
    contDeleteBox.appendChild(imgDelete);


    //Clean textarea
    document.getElementById('text').value = "";

    //Show All Task info
    showAll();
}

function check(checkbox) {
    if (checkbox.target.alt == "check") {
        checkbox.target.src = "assets/images/uncheck.png";
        checkbox.target.alt = "uncheck";

    } else if (checkbox.target.alt == "uncheck") {
        checkbox.target.src = "assets/images/check.png";
        checkbox.target.alt = "check";
    }
}

/*-----------------------------------*/

function showAll() {
    let checker = document.getElementsByClassName('checker');

    for (let i = 0; i < checker.length; i++) {
        checker[i].parentNode.parentNode.parentNode.style.display = 'flex';
    }
    document.getElementById('task-info').innerHTML = checker.length + " Tasks";
}

function showActive() {
    let checker = document.getElementsByClassName('checker');
    let n = 0;

    showAll();

    for (let i = 0; i < checker.length; i++) {
        if (checker[i].alt !== "uncheck") {
            checker[i].parentNode.parentNode.parentNode.style.display = 'none';
            n = n + 1;

        }
    }
    let activeTask = checker.length - n;
    document.getElementById('task-info').innerHTML = activeTask + " Tasks";
}

function showCompleted() {
    let checker = document.getElementsByClassName('checker');
    let n = 0;

    showAll();

    for (let i = 0; i < checker.length; i++) {
        if (checker[i].alt == "uncheck") {
            checker[i].parentNode.parentNode.parentNode.style.display = 'none';
            n = n + 1;
        }
    }
    let completedTask = checker.length - n;
    document.getElementById('task-info').innerHTML = completedTask + " Tasks";
}