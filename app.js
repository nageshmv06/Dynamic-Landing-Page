//DOM Elements
const time = document.getElementById("time"),
      greeting = document.getElementById("greeting"),
      name = document.getElementById("name"),
      focus = document.getElementById("focus");

 //showTime
 function showTime()  {
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    //am or pm
    const amPm = hour >= 12 ? "PM" : "AM";

    //12 hour format
    hour = hour % 12;

    //output time
    time.innerHTML = addZero(hour) + ':' + addZero(min) + ':' + addZero(sec) + " " + amPm;

    setTimeout(showTime, 1000);

    //add zeroes
    function addZero (n) {
        return (parseInt(n, 10) < 10 ? "0" : "") + n;
    }
 }

 //run
 showTime();

 //set Background and greeting
   function setBgGreet() {
       let today = new Date(),
       hour = today.getHours();
     if(hour<12){
         //morning
         document.body.classList.add("Img");
         greeting.textContent = "Good Morning";
     }else if(hour<18){
         //noon
         document.body.classList.add("Img2");
         greeting.textContent = "Good Afternoon";
     }else{
         //night
         document.body.classList.add("Img3");
         greeting.textContent = "Good Night";
     }
   }

setBgGreet();

//get name
function getName() {
    if(localStorage.getItem("name") === null){
        name.textContent = "(Enter name)";
    }else{
        name.textContent = localStorage.getItem("name");
        }
}

getName();

//set name
function setName(e){
  if(e.type === "keypress"){
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem("name",e.target.innerText);
            name.blur();
        }
  }else{
    localStorage.setItem("name",e.target.innerText);
  }
}
name.addEventListener("keypress", setName);
name.addEventListener("blur",setName);

//get focus
function getFocus() {
    if(localStorage.getItem("focus") === null){
        focus.textContent = "(Enter focus)";
    }else{
        focus.textContent = localStorage.getItem("focus");
        }
}

getFocus();

//set focus
function setFocus(e){
    if(e.type === "keypress"){
          if(e.which == 13 || e.keyCode == 13){
              localStorage.setItem("focus",e.target.innerText);
              focus.blur();
          }
    }else{
      localStorage.setItem("focus",e.target.innerText);
    }
  }
  focus.addEventListener("keypress", setFocus);
  focus.addEventListener("blur",setFocus);
  