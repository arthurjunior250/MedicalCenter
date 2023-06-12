
/*----------------------- SubList Menu Desktop -------------------*/

var arrowUp = document.getElementById("arrow");
var sublist = document.getElementsByClassName("subList")[0];

//when the mouse over CLASSES the menue will appear and arrow rotate to up
function showSublist() {
  sublist.classList.add("show");
  arrowUp.style.transform = "rotate(180deg)";
}

//some elements when the mouse overthem we need to hide the menu
function hideMenu() {
  sublist.classList.remove("show");
  arrowUp.style.transform = "rotate(00deg)";
}

/*---------------------- Mobile NavBar --------------------------*/

var burgerIcone = document.getElementById("burger");
var sideMenu = document.getElementsByClassName('mainList-Mobile')[0];
var banner = document.getElementsByClassName("banner-mobile")[0];
var arrowMobile = document.getElementById('arrowM');
var subListMobile = document.getElementById('sub-list-Mobile');
var dropDown = document.getElementById('toggle-icon');
var left = document.getElementsByClassName('about')[0];
var logo = document.getElementById('logomobile');
var counter = 0;


//1: count how many the icon clicked to decide if the side menu will show or close
//2: when counter is odd this mean (close the menu) while the even number mean (show the meun)
//3: when close the side menu return the blur to the orginal and close the subList mobile 

function showMobileMenu(e) {
    e.classList.toggle("swip");
    if (counter % 2 === 0) {
        sideMenu.style.display = "block";
        banner.style.filter= "blur(3px)";
        left.style.filter= "blur(3px)";
        logo.style.filter= "blur(3px)";
        sideMenu.style.width = "40%";
    }
    else {
      closeMenu();
    }
    counter = counter + 1;
}

//1: When open the mobile side menu and return to the dektop and then return to mobile view
//2: The menu still appear this code solve this issue
window.addEventListener('resize' , function(){
  let widthScreen = window.innerWidth;
  //console.log( widthScreen + "width");
  if (widthScreen>700) {
    closeMenu();
    burgerIcone.classList.remove("swip");
    counter=0;
  }

  else 
  {
    return;
  }

});

function closeMenu() {
  subListMobile.classList.remove('active');
  sideMenu.style.display = "none";
  banner.style.filter= "blur(0px)"; 
  logo.style.filter="blur(0px)";
  left.style.filter="blur(0px)";
}



//4: when the user click on CLASS the sub menu will toggle and the arrow will rotate
  dropDown.addEventListener('click', function () {
  subListMobile.classList.toggle('active');
  if (arrowMobile.style.transform == 'rotate(180deg)') {
    arrowMobile.style.transform = 'rotate(00deg)';
  }
  else {
    arrowMobile.style.transform = 'rotate(180deg)';
  }

});



/*---------------------- Classes section --------------------------*/

var mainContainer = document.getElementsByClassName('classes')[0];
//1: get the higeht of the top and bottom whole page
var triggerBottom = window.innerHeight; 
//console.log("height page "+triggerBottom);
var images = [
  {
    "src": "https://images.pexels.com/photos/3775589/pexels-photo-3775589.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "text": "appointment",
    "time": "Monday 10:00 AM - 10:30 PM",
  },
  {
    "src": "https://i.ibb.co/z7Kc6cb/yoga-Class.png",
    "text": "appointment",
    "time": "Sunday 12:30 PM to 1:00 PM",

  },
  {
    "src": "https://i.ibb.co/f12v4k2/FIT-FOREVER-FITNESS-13.png",
    "text": "appointment",
    "time": "Tuesday 8:00 PM to 8:30 PM",

  },
  {
    "src": "https://i.ibb.co/8BqBXVQ/FIT-FOREVER-FITNESS-14.png",
    "text": "appointment",
    "time": "Saturday 8:10 Pm to 8:30 PM",

  },
  {
    "src": "https://i.ibb.co/r2LSDgD/FIT-FOREVER-FITNESS-16.png",
    "text": "appointment",
    "time": "Friday 2:32 PM Pm to 3:00",

  },
  {
    "src": "https://i.ibb.co/0VzzPnc/FIT-FOREVER-FITNESS-18.png",
    "text": "appointment",
    "time": "Monday 9:00 AM to 9:30 AM"
  }

]
//2: Create div boxes based on ithe imagesArray size and set the class name to box so each one  take the style

for (let i =0 ; i<images.length ; i++){
  let box = document.createElement('div');
  let descrbition = document.createElement('h4');
  let time = document.createElement('p');
  mainContainer.appendChild(box);
  box.appendChild(descrbition);
  box.appendChild(time);
  box.className = "box";
  descrbition.className = "description";
  time.className = "Time";
}

var boxes = document.querySelectorAll('.box');
var desc = document.getElementsByClassName('description');
var timeClasses = document.getElementsByClassName('Time');

/*3: When the window scrolled the function will calculte the top of each boxes 
once it is less than the higeht of page it will do the animation */
//4: getBoundingClientRect() will return object recatangle (x,y,bottom ..etc) of the box and I need only the top 
window.addEventListener('scroll', checkBoxes)
function checkBoxes() {
    for ( let i=0 ; i<boxes.length ; i++ ) {
        let boxTop = boxes[i].getBoundingClientRect().top;
        triggerBottom = window.innerHeight; //Depen on the viewporst so should be updated
        if(boxTop <= triggerBottom) {
          boxes[i].style.backgroundImage = "url("+images[i].src+")";
          desc[i].textContent = images[i].text;
          timeClasses[i].textContent= images[i].time;
          boxes[i].classList.add('show')
        } else {
          boxes[i].classList.remove('show')
        }
      }
    }


/*---------------------- BMI Section And model Window --------------------------*/

//1: Forumla is weight(kg) / (height* hieght in (cm)) 
//2: Convert height from cm to m by divide it by 100 

let weightInput = document.getElementById('weight-input');
let heightInput = document.getElementById('height-input');
let result = document.getElementsByClassName('result')[0];
let resultW = document.getElementsByClassName('result-weight')[0];
let resultH = document.getElementsByClassName('result-height')[0];
let resulBMI = document.getElementsByClassName('about-BMI')[0];
let arrowWeight = document.getElementById("needle");
let range = document.getElementById("range");
let numberBMI = document.getElementById("bmi");
let scale = document.getElementById('scale_main');

function calculateBMI() {

  let weightUser = parseFloat(weightInput.value);
  let heightUser = parseFloat(heightInput.value);

  result.textContent = "For the information you entered:";
  resultW.textContent = "Weight: "+weightUser +" kilograms";
  resultH.textContent = "Height: "+heightUser +" centimeters";

  if (weightUser <= 0|| heightUser <= 0 ||  document.getElementById('weight-input').value === "" || document.getElementById('height-input').value === "" ) {
    result.textContent = "Please check the accuracy of the information you entered:";
    resulBMI.textContent="";
    arrowWeight.style.transform = "skew(00deg)";
    arrowWeight.style.background = "lightgray";
    range.textContent = "ERROR";
    numberBMI.textContent = "";
      return;
  }
  let height = heightUser / 100 ;
  let BMI = Math.round(weightUser/(height*height));

  if (BMI <= 19) {
    resulBMI.textContent = "Your BMI is "+ BMI+", indicating your weight is in the Underweight category for adults of your height.Talk with your healthcare provider to determine possible causes of underweight and if you need to gain weight";
    arrowWeight.style.transform = "skew(40deg)";
    arrowWeight.style.background = "red";
    arrowWeight.style.width = "7px";
    range.textContent = "Underweight"
    numberBMI.textContent = BMI;
    shake(scale);
    return;
  }

  else if (BMI >= 20 && BMI<= 24) {
      resulBMI.textContent = "Your BMI is "+ BMI+",  indicating your weight is in the Normal category for adults of your height.Maintaining a healthy weight may reduce the risk of chronic diseases associated with overweight and obesity.";
      arrowWeight.style.transform = "skew(00deg)";
      arrowWeight.style.background = "green";
      arrowWeight.style.width = "7px";
      range.textContent = "Normal"
      numberBMI.textContent = BMI;
      return;
  }

  else if (BMI >= 25 && BMI <= 29) {
      resulBMI.textContent = "Your BMI is "+ BMI+", indicating your weight is in the Oerweight category for adults of your height. People who are overweight or obese are at higher risk for chronic conditions such as high blood pressure, diabetes, and high cholesterol.";
      arrowWeight.style.transform = "skew(-20deg)";
      arrowWeight.style.background = "orange";
      arrowWeight.style.width = "7px";
      range.textContent = "Oerweight"
      numberBMI.textContent = BMI;
      return;
  }

  else {
      resulBMI.textContent = "Your BMI is "+ BMI+", indicating your weight is in the Obese category for adults of your height. People who are overweight or obese are at higher risk for chronic conditions such as high blood pressure, diabetes, and high cholesterol.";
      arrowWeight.style.transform = "skew(-30deg)";
      arrowWeight.style.background = "red";
      arrowWeight.style.width = "7px";
      range.textContent = "Obese";
      numberBMI.textContent = BMI;
      shake(scale);
      return;
    }
  }

//This function will do the animation shake for some cases
function shake (id) {
  id.animate([
    // keyframes
    { transform: 'translate(1px, 1px) rotate(5deg)'},
    { transform: 'translate(-1px, -1px) rotate(-5deg)'},
    { transform: 'translate(1px, 1px) rotate(5deg)'},
    { transform: 'translate(-1px, -1px) rotate(-5deg)'},
    { transform: 'translate(1px, 1px) rotate(5deg)'},
    { transform: 'translate(-1px, -1px) rotate(-5deg)'},
    { transform: 'translate(1px, 1px) rotate(5deg)'}
  ], {
    // timing options
    duration: 500,
    iterations: 2,
  });
  return;
}


function clean() {
    weightInput.value = "";
    heightInput.value = "";
    result.innerText = "Body mass index is a value derived from the mass (weight) and height of a person it help you to know if you are healthy or not and check your family also!";
    resultW.innerText = "";
    resultH.innerText = "";
    resulBMI.innerText = "";
    arrowWeight.style.width = "7px";
    arrowWeight.style.transform = "skew(00deg)";
    arrowWeight.style.background = "#fbc052";
    range.textContent ="BMI";
    numberBMI = "---";
}


/*-------------------------------- Model Window -------------------------------*/

var modal = document.getElementById("myModal"); //ID Parent Model
var span = document.getElementsByClassName("close")[0]; //ID of X

function showModel() {
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
  clean();
}

//When click on the X  the window will close
span.onclick = function() {
  modal.style.display = "none";
  document.body.style.overflow = "visible";
  clean();
};

//When click on anywhere in page the window will close
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "visible";  
     clean();
  }
};

/*-------------------------------- Contact us vaildation -------------------------------*/

var form = document.getElementById('frm');
var namefailed = document.getElementById('fname');
var emailfailed = document.getElementById('email');
var subjectfailed = document.getElementById('subject');
var error = document.getElementsByClassName('error')[0];
var btn = document.getElementById("submitt");
var formPostionY = form.getBoundingClientRect().top;

function verfiy() {
error.textContent =  "";

if(form.username.value.length <= 2) {

 error.style.display = "block";
 error.textContent =  "Enter correct name";
 error.style.color =  "red";
  form.username.focus();
  event.preventDefault();
}

else if(emailfailed.value === ""  || !(emailfailed.value.includes("@"))) {
  error.style.display = "block";
  error.textContent =  "Please enter you email";
  error.style.color =  "red";
   form.emaill.focus();
   event.preventDefault();
 } 

 else if(subjectfailed.value === "" || subjectfailed.value.length <= 5 )  {
  error.style.display = "block";
  error.textContent =  "Please type your message";
  error.style.color =  "red";
  form.subject.focus();
  event.preventDefault();
 }

else if (subjectfailed.value !== "" && emailfailed.value !== ""  && form.username.value.length > 2) {

  error.style.display = "block";
  error.style.color = "green";
  error.textContent =  "Your message has been sent successfully";
  namefailed.style.display= "none";
  emailfailed.style.display= "none";
  subjectfailed.style.display= "none";
  btn.style.display= "none";
  event.preventDefault();
}
}


/*  window.scrollTo( {
    top: 9000,
    behavior: "smooth"
  });*/


var i = 0;
//var txt = 'Have you ever imagined youerself cycling in a fantsy world or futuirtic cities ?'; 
var speed = 1000; //3s
var textMove = document.getElementById("text-move");


window.addEventListener('scroll', typeWriter);
function typeWriter() {
//Got the top of the video since the user scroll on this part the text wil typing 
let sectionTop = textMove.getBoundingClientRect().top;
let triggerBottom2 = window.innerHeight; 

  if (sectionTop <= triggerBottom2) {
    if (textMove.innerText === "") {
      textMove.innerText = "Have you ever imagined youerself cycling in a fantsy world or futuirtic cities?";
      textMove.style.animation = " typing 5s steps(200,end) forwards ";

    }
    else {
      textMove.style.animation = " typing 5s steps(200,end) forwards ";
    }

  }
  else {
    textMove.innerText = "";
      i = 0;
  }

}


/*-------------------- Arrow to top of the page -----------------------------*/

//1: every thime check the scroll top and width of the screen to ensure it is mobile or dektop
//2: widthScreen > 700 to check it is on the dektop 

window.addEventListener('scroll', function() {
  let widthScreen = window.innerWidth;
  if (document.documentElement.scrollTop < 400 && widthScreen > 700 ){
    console.log(" less" + document.documentElement.scrollTop);
    document.getElementById("top").style.position="static";
  }
  if (document.documentElement.scrollTop >= 400 && widthScreen > 700){
    console.log(" greater" + document.documentElement.scrollTop);
    document.getElementById("top").style.position="fixed";
    document.getElementById("top").style.display="block";
    document.getElementById("topMobile").style.display="none";

  }

  if (document.documentElement.scrollTop < 400 && widthScreen <= 700 ) {
    document.getElementById("topMobile").style.position="static";
  }

  if (document.documentElement.scrollTop >= 400 && widthScreen <= 700){
    console.log(" greater" + document.documentElement.scrollTop);
    document.getElementById("topMobile").style.position="fixed";
    document.getElementById("topMobile").style.display="block";
    document.getElementById("top").style.display="none";

  }
}); 

/*---------- Regitser ----------------------*/
var messagee = document.getElementsByClassName('error1')[0];
var formRegiter = document.getElementsByClassName('Register')[0];

var uuname = document.getElementById('uname');
var uueamil = document.getElementById('uemail');
var uupass = document.getElementById('pass');
var uucheckpass = document.getElementById('checkpass');
var registerbtn = document.getElementById('registerr');
var immg = document.getElementsByClassName('fa-user-alt')[0];


var eye1 = document.getElementById("eye");
var eye2 = document.getElementById("eye2");


function check() {
  messagee.textContent =  "";


  if(formRegiter.name.value.length <= 2) {
    messagee.style.display = "block";
    messagee.textContent =  "Enter correct name";
    messagee.style.color =  "red";
    formRegiter.name.focus();
     event.preventDefault();
     return;
   }

   if(formRegiter.email.value.length <= 3 || (!uueamil.value.includes("@"))) {
    messagee.style.display = "block";
    messagee.textContent =  "Enter correct email";
    messagee.style.color =  "red";
    formRegiter.email.focus();
     event.preventDefault();
     return;
   }

   if(formRegiter.pass.value.length <= 3 ) {
    messagee.style.display = "block";
    messagee.textContent =  "password should be more than 3 chracters";
    messagee.style.color =  "red";
    formRegiter.pass.focus();
     event.preventDefault();
     return;
   }

   if(formRegiter.repass.value.length <= 3 ||  uucheckpass.value !== uupass.value) {
    messagee.style.display = "block";
    messagee.textContent =  "Password dose not match";
    messagee.style.color =  "red";
    formRegiter.repass.focus();
     event.preventDefault();
     return;
   }
   else {
    messagee.style.display = "block";
    messagee.style.color = "green";
    messagee.textContent =  "You has been registered successfully";
    uuname.style.display= "none";
    uueamil.style.display= "none";
    uupass.style.display= "none";
    uucheckpass.style.display= "none";
    registerbtn.style.display= "none";
    eye1.style.display="none";
    eye2.style.display="none";
    event.preventDefault();
   }
  

}

var modalRegiter = document.getElementsByClassName("popup")[0]; // Parent Model
var span = document.getElementsByClassName("closeRegiter")[0]; // class  of X

function showPopUp() {
  modalRegiter.style.display = "flex";
  document.body.style.overflow = "hidden";
}

//When click on the X  the window will close
span.onclick = function() {
  modalRegiter.style.display = "none";
  document.body.style.overflow = "visible";
  cleanRegiter();
};

//When click on anywhere in page the window will close
window.onclick = function(event) {
  if (event.target == modalRegiter) {
    modalRegiter.style.display = "none";
    document.body.style.overflow = "visible";  
    cleanRegiter();
  }
};

function cleanRegiter() {
  uuname.value = "";
  uueamil.value = "";
  messagee.innerText = "";
  uupass.value = "";
  uucheckpass.value = "";

  uuname.style.display= "block";
  uueamil.style.display= "block";
  uupass.style.display= "block";
  uucheckpass.style.display= "block";
  registerbtn.style.display= "block";

  eye1.style.display= "block";
  eye2.style.display= "block";


  eye1.setAttribute("class", "fas fa-eye");
  eye2.setAttribute("class", "fas fa-eye");
  uupass.type = "password";
  uucheckpass.type = "password";

}


//when click on the eye icon show it as text it is toggle also
eye1.addEventListener("click", function(e) {
  if (uupass.type === "password") {
    e.target.setAttribute("class", "fas fa-eye-slash");
    uupass.type = "text";
  }
  else {
    e.target.setAttribute("class", "fas fa-eye");
    uupass.type = "password";
  }


});


eye2.addEventListener("click", function(e) {
  if (uucheckpass.type === "password") {
    e.target.setAttribute("class", "fas fa-eye-slash");
    uucheckpass.type = "text";
  }
  else {
    e.target.setAttribute("class", "fas fa-eye");
    uucheckpass.type = "password";
  }


});



document.getElementById('nike').play(); 

