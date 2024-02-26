// constants for query selector
const customNumberInput = document.getElementById("customNumber");
const myStudentIdParagraph = document.getElementById("myStudentId");
const changeCustomColorButton = document.querySelector(".custColor");
const changeRandomColorButton = document.querySelector(".randColor");
const imageSelect = document.getElementById("imageSelect");
const images = document.getElementById("images");

// function to change bg color from user input and add student id
function changeCustomColor() {
    var inputNumber = parseInt(document.getElementById("customNumber").value);
    var studentId = "200554189"; 
    document.getElementById("myStudentId").innerText = studentId;

    if (inputNumber < 0 || inputNumber > 100) {
        document.body.style.backgroundColor = "red";
    } else if (inputNumber >= 0 && inputNumber < 20) {
        document.body.style.backgroundColor = "green";
    } else if (inputNumber >= 20 && inputNumber < 40) {
        document.body.style.backgroundColor = "blue";
    } else if (inputNumber >= 40 && inputNumber < 60) {
        document.body.style.backgroundColor = "orange";
    } else if (inputNumber >= 60 && inputNumber < 80) {
        document.body.style.backgroundColor = "purple";
    } else if (inputNumber >= 80 && inputNumber <= 100) {
        document.body.style.backgroundColor = "yellow";
    }
}

// function to change bg color from random no.
function changeRandomColor() {
    var randomNum = Math.floor(Math.random() * 100) + 1;
    document.getElementById("customNumber").value = randomNum;
    changeCustomColor();
}

// function to generate options for select list
function addList() {
    var imageNames = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"]; 
    var selectList = document.getElementById("imageSelect");

    // Clear existing options
    selectList.innerHTML = "";

    // Add new options
    for (var i = 0; i < imageNames.length; i++) {
        var option = document.createElement("option");
        option.value = imageNames[i];
        option.text = imageNames[i];
        selectList.appendChild(option);
    }
}

// function to change image
function changeImage() {
    var selectElement = document.getElementById("imageSelect");
    var selectedImage = selectElement.options[selectElement.selectedIndex].value;
    document.getElementById("images").src = "img/" + selectedImage;
}

// Call addList() to populate the dropdown list when the page loads
window.onload = addList;

// Event Listeners
changeCustomColorButton.addEventListener("click", changeCustomColor);
changeRandomColorButton.addEventListener("click", changeRandomColor);
imageSelect.addEventListener("change", changeImage);
