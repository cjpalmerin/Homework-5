// var date = new Date();
// $("#currentDay").text(date.toDateString());

var date = moment().format('llll');
$("#currentDay").text(date);


var today = new Date();
var hourNow = today.getHours();

console.log(hourNow);

var nineAM = $("#nineAM"); 
if (hourNow > 9) {
    console.log("it's past 9AM")
    nineAM.attr("class", "past");
}
else if (hourNow == 9) {
    nineAM.attr("class", "present");
    console.log("it's 9AM")

}
else if (hourNow < 9) {
    nineAM.attr("class", "future");
    console.log("it's before 9AM")

}

var tenAM = $("#tenAM"); 
if (hourNow > 10) {
    tenAM.attr("class", "past");
}
else if (hourNow == 10) {
    tenAM.attr("class", "present");
}
else if (hourNow < 10) {
    tenAM.attr("class", "future");
}

var elevenAM = $("#elevenAM"); 
if (hourNow > 11) {
    elevenAM.attr("class", "past");
}
else if (hourNow == 11) {
    elevenAM.attr("class", "present");
}
else if (hourNow < 11) {
    elevenAM.attr("class", "future");
}

var twelvePM = $("#twelvePM"); 
if (hourNow > 12) {
    twelvePM.attr("class", "past");
}
else if (hourNow == 12) {
    twelvePM.attr("class", "present");
}
else if (hourNow < 12) {
    twelvePM.attr("class", "future");
}

var onePM = $("#onePM"); 
if (hourNow > 13) {
    onePM.attr("class", "past");
}
else if (hourNow == 13) {
    onePM.attr("class", "present");
}
else if (hourNow < 13) {
    onePM.attr("class", "future");
}

var twoPM = $("#twoPM"); 
if (hourNow > 14) {
    twoPM.attr("class", "past");
}
else if (hourNow == 14) {
    twoPM.attr("class", "present");
}
else if (hourNow < 14) {
    twoPM.attr("class", "future");
}

var threePM = $("#threePM"); 
if (hourNow > 15) {
    threePM.attr("class", "past");
}
else if (hourNow == 15) {
    threePM.attr("class", "present");
}
else if (hourNow < 15) {
    threePM.attr("class", "future");
}

var fourPM = $("#fourPM"); 
if (hourNow > 16) {
    fourPM.attr("class", "past");
}
else if (hourNow == 16) {
    fourPM.attr("class", "present");
}
else if (hourNow < 16) {
    fourPM.attr("class", "future");
}

var fivePM = $("#fivePM"); 
if (hourNow > 17) {
    fivePM.attr("class", "past");
}
else if (hourNow == 17) {
    fivePM.attr("class", "present");
}
else if (hourNow < 17) {
    fivePM.attr("class", "future");
}

// var sixPM = $("#sixPM"); 
// if (hourNow > 18) {
//     sixPM.attr("class", "past");
// }
// else if (hourNow == 18) {
//     sixPM.attr("class", "present");
// }
// else if (hourNow < 18) {
//     sixPM.attr("class", "future");
// }

// var sevenPM = $("#sevenPM"); 
// if (hourNow > 19) {
//     sevenPM.attr("class", "past");
// }
// else if (hourNow == 19) {
//     sevenPM.attr("class", "present");
// }
// else if (hourNow < 19) {
//     sevenPM.attr("class", "future");
// }

// var eightPM = $("#eightPM"); 
// if (hourNow > 20) {
//     eightPM.attr("class", "past");
// }
// else if (hourNow == 20) {
//     eightPM.attr("class", "present");
// }
// else if (hourNow < 20) {
//     eightPM.attr("class", "future");
// }

// var ninePM = $("#ninePM"); 
// if (hourNow > 21) {
//     ninePM.attr("class", "past");
// }
// else if (hourNow == 21) {
//     ninePM.attr("class", "present");
// }
// else if (hourNow < 21) {
//     ninePM.attr("class", "future");
// }

// var tenPM = $("#tenPM"); 
// if (hourNow > 22) {
//     tenPM.attr("class", "past");
// }
// else if (hourNow == 22) {
//     tenPM.attr("class", "present");
// }
// else if (hourNow < 22) {
//     tenPM.attr("class", "future");
// }

// var elevenPM = $("#elevenPM"); 
// if (hourNow > 23) {
//     elevenPM.attr("class", "past");
// }
// else if (hourNow == 23) {
//     elevenPM.attr("class", "present");
// }
// else if (hourNow < 23) {
//     elevenPM.attr("class", "future");
// }

// var twelveAM = $("#twelveAM"); 
// if (hourNow > 24) {
//     twelveAM.attr("class", "past");
// }
// else if (hourNow == 24) {
//     twelveAM.attr("class", "present");
// }
// else if (hourNow < 24) {
//     twelveAM.attr("class", "future");
// }

// render1();

// var userInput1 = $("#userInput1");

// function getInput1() {
//     userSubmit1 = userInput1.val();
//     console.log(userSubmit1);
//     localStorage.setItem("userInput1", userSubmit1)
// }

// window.onload = getInput1();  



// render1();

var userInput1 = $("#userInput1");
var subButton = $('.subButton'); 

function render1 () {
    var renderInput1 = localStorage.getItem("userInput1");
    console.log(renderInput1);
    userInput1.text(renderInput1);
 }

render1();

subButton.on('click', function () {
        userSubmit1 = userInput1.val();
        console.log(userSubmit1);
        localStorage.setItem("userInput1", userSubmit1);
    });



var userInput2 = $("#userInput2");
var subButton2 = $('.subButton2'); 

function render2 () {
    var renderInput2 = localStorage.getItem("userInput2");
    console.log(renderInput2);
    userInput2.text(renderInput2);
 }

render2();

subButton2.on('click', function () {
        userSubmit2 = userInput2.val();
        console.log(userSubmit2);
        localStorage.setItem("userInput2", userSubmit2);
    });



var userInput3 = $("#userInput3");
var subButton3 = $('.subButton3'); 

function render3 () {
    var renderInput3 = localStorage.getItem("userInput3");
    console.log(renderInput3);
    userInput3.text(renderInput3);
 }

render3();

subButton3.on('click', function () {
        userSubmit3 = userInput3.val();
        console.log(userSubmit3);
        localStorage.setItem("userInput3", userSubmit3);
    });



var userInput4 = $("#userInput4");
var subButton4 = $('.subButton4'); 

function render4 () {
    var renderInput4 = localStorage.getItem("userInput4");
    console.log(renderInput4);
    userInput4.text(renderInput4);
 }

render4();

subButton4.on('click', function () {
        userSubmit4 = userInput4.val();
        console.log(userSubmit4);
        localStorage.setItem("userInput4", userSubmit4);
    });



var userInput5 = $("#userInput5");
var subButton5 = $('.subButton5'); 

function render5 () {
    var renderInput5 = localStorage.getItem("userInput5");
    console.log(renderInput5);
    userInput5.text(renderInput5);
 }

render5();

subButton5.on('click', function () {
        userSubmit5 = userInput5.val();
        console.log(userSubmit5);
        localStorage.setItem("userInput5", userSubmit5);
    });



var userInput6 = $("#userInput6");
var subButton6 = $('.subButton6'); 

function render6 () {
    var renderInput6 = localStorage.getItem("userInput6");
    console.log(renderInput6);
    userInput6.text(renderInput6);
 }

render6();

subButton6.on('click', function () {
        userSubmit6 = userInput6.val();
        console.log(userSubmit6);
        localStorage.setItem("userInput6", userSubmit6);
    });



var userInput7 = $("#userInput7");
var subButton7 = $('.subButton7'); 

function render7 () {
    var renderInput7 = localStorage.getItem("userInput7");
    console.log(renderInput7);
    userInput7.text(renderInput7);
 }

render7();

subButton7.on('click', function () {
        userSubmit7 = userInput7.val();
        console.log(userSubmit7);
        localStorage.setItem("userInput7", userSubmit7);
    });


var userInput8 = $("#userInput8");
var subButton8 = $('.subButton8'); 

function render8 () {
    var renderInput8 = localStorage.getItem("userInput8");
    console.log(renderInput8);
    userInput8.text(renderInput8);
 }

render8();

subButton8.on('click', function () {
        userSubmit8 = userInput8.val();
        console.log(userSubmit8);
        localStorage.setItem("userInput8", userSubmit8);
    });



var userInput9 = $("#userInput9");
var subButton9 = $('.subButton9'); 

function render9 () {
    var renderInput9 = localStorage.getItem("userInput9");
    console.log(renderInput9);
    userInput9.text(renderInput9);
 }

render9();

subButton9.on('click', function () {
        userSubmit9 = userInput9.val();
        console.log(userSubmit9);
        localStorage.setItem("userInput9", userSubmit9);
    });