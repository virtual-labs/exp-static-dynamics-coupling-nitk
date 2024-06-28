let F0,T0,w,l1,l2,k_f,k_r,m,j;
// let width, height;
function startsim() {
  console.log(1);

  // simTimeId = setInterval("time=time+0.1; varupdate(); ", "100");
}
let simTimeId;
// switches state of simulation between 0:Playing & 1:Paused
function simstate() {
  let imgfilename = document.getElementById("playpausebutton").src;
  imgfilename = imgfilename.substring(
    imgfilename.lastIndexOf("/") + 1,
    imgfilename.lastIndexOf(".")
  );

  if (imgfilename === "bluepausedull") {
    document.getElementById("playpausebutton").src = "./images/blueplaydull.svg";
    clearInterval(simTimeId);
    simstatus = 0;
    pauseTime = setInterval("varupdate();", "100");
    document.querySelector(".playPause").textContent = "Play";
  }

  if (imgfilename === "blueplaydull") {
    document.getElementById("playpausebutton").src = "./images/bluepausedull.svg";
    simstatus = 1;
    clearInterval(pauseTime);
    time = 0;
    simTimeId = setInterval("varupdate();time+=.01;", 10);
    document.querySelector(".playPause").textContent = "Pause";
  }
}



function varinit() {
  varchange();

  // Add event listeners to the spinner inputs for validation
  $("#fSpinner").on("input", function() {
    validatePositiveInput("#fSpinner");
  });
  $("#toSpinner").on("input", function() {
    validatePositiveInput("#toSpinner");
  });

  $("#omegaSpinner").on("input", function() {
    validatePositiveInput("#omegaSpinner");
  });

  $("#kfSpinner").on("input", function() {
    validatePositiveInput("#kfSpinner");
  });

  $("#krSpinner").on("input", function() {
    validatePositiveInput("#krSpinner");
  });

  $("#mSpinner").on("input", function() {
    validatePositiveInput("#mSpinner");
  });

  $("#jSpinner").on("input", function() {
    validatePositiveInput("#jSpinner");
  });
  $("#l1Spinner").on("input", function() {
    validatePositiveInput("#l1Spinner");
  });
  $("#l2Spinner").on("input", function() {
    validatePositiveInput("#l2Spinner");
  });

    // Set initial values for sliders and spinners
    $("#fSlider").slider("value", 3);
    $("#fSpinner").spinner("value", 3);
  
    $("#toSlider").slider("value", 0);
    $("#toSpinner").spinner("value", 0);

    $("#omegaSlider").slider("value", 11);
    $("#omegaSpinner").spinner("value", 11);
  
    $("#kfSlider").slider("value", 18000);
    $("#kfSpinner").spinner("value", 18000);
  
    $("#krSlider").slider("value", 22000);
    $("#krSpinner").spinner("value", 22000);
  
    $("#mSlider").slider("value", 1000);
    $("#mSpinner").spinner("value", 1000);
  
    $("#jSlider").slider("value", 810);
    $("#jSpinner").spinner("value", 810);

    $("#l1Slider").slider("value", 1);
    $("#l1Spinner").spinner("value", 1);

    $("#l2Slider").slider("value", 1.5);
    $("#l2Spinner").spinner("value", 1.5);
  
    varupdate();
  }

// Initialise and Monitor variable containing user inputs of system parameters.
//change #id and repeat block for new variable. Make sure new <div> with appropriate #id is included in the markup
function varchange() {
  //Link AB
  // slider initialisation : jQuery widget
  $("#fSlider").slider({ max: 10, min: 0, step: 1 });

  // number initialisation : jQuery widget
  $("#fSpinner").spinner({ max: 10, min: 0, step: 1 });
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of link length
  $("#fSlider").on("slide", function (c, ui) {
    $("#fSpinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#fSpinner").on("spin", function (c, ui) {
    $("#fSlider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#fSpinner").on("change", function () {
    varchange();
  });


  $("#toSlider").slider({ max: 10, min: 0, step: 1 });

  // number initialisation : jQuery widget
  $("#toSpinner").spinner({ max: 10, min: 0, step: 1 });
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of link length
  $("#toSlider").on("slide", function (c, ui) {
    $("#toSpinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#toSpinner").on("spin", function (c, ui) {
    $("#toSlider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#toSpinner").on("change", function () {
    varchange();
  });



  $("#omegaSlider").slider({ max: 15, min: 10, step: 0.01 });

  // number initialisation : jQuery widget
  $("#omegaSpinner").spinner({ max: 15, min: 10, step: 0.01 });
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of link length
  $("#omegaSlider").on("slide", function (c, ui) {
    $("#omegaSpinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#omegaSpinner").on("spin", function (c, ui) {
    $("#omegaSlider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#omegaSpinner").on("change", function () {
    varchange();
  });

  $("#kfSlider").slider({ max: 19000, min: 17000, step: 100 });
  // number initialisation : jQuery widget
  $("#kfSpinner").spinner({ max: 19000, min: 17000, step: 100 });
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of link length
  $("#kfSlider").on("slide", function (c, ui) {
    $("#kfSpinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#kfSpinner").on("spin", function (c, ui) {
    $("#kfSlider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#kfSpinner").on("change", function () {
    varchange();
  });


  $("#krSlider").slider({ max: 23000, min: 21000, step: 100 });
  // number initialisation : jQuery widget
  $("#krSpinner").spinner({ max: 23000, min: 21000, step: 100 });
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of linm length
  $("#krSlider").on("slide", function (c, ui) {
    $("#krSpinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#krSpinner").on("spin", function (c, ui) {
    $("#krSlider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#krSpinner").on("change", function () {
    varchange();
  });


  $("#mSlider").slider({ max: 1500, min: 500, step: 10 });
  // number initialisation : jQuery widget
  $("#mSpinner").spinner({ max: 1500, min: 500, step: 10 });
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of link length
  $("#mSlider").on("slide", function (c, ui) {
    $("#mSpinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#mSpinner").on("spin", function (c, ui) {
    $("#mSlider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#mSpinner").on("change", function () {
    varchange();
  });


  $("#jSlider").slider({ max: 1000, min: 100, step: 10 });
  // number initialisation : jQuery widget
  $("#jSpinner").spinner({ max: 1000, min: 100, step: 10 });
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of linm length
  $("#jSlider").on("slide", function (c, ui) {
    $("#jSpinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#jSpinner").on("spin", function (c, ui) {
    $("#jSlider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#jSpinner").on("change", function () {
    varchange();
  });

  $("#l1Slider").slider({ max: 5, min: 1, step: 0.5 });
  // number initialisation : jQuery widget
  $("#l1Spinner").spinner({ max: 5, min: 1, step: 0.5 });
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of linm length
  $("#l1Slider").on("slide", function (c, ui) {
    $("#l1Spinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#l1Spinner").on("spin", function (c, ui) {
    $("#l1Slider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#l1Spinner").on("change", function () {
    varchange();
  });

  $("#l2Slider").slider({ max: 5, min: 1, step: 0.5 });
  // number initialisation : jQuery widget
  $("#l2Spinner").spinner({ max: 5, min: 1, step: 0.5 });
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of linm length
  $("#l2Slider").on("slide", function (c, ui) {
    $("#l2Spinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#l2Spinner").on("spin", function (c, ui) {
    $("#l2Slider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#l2Spinner").on("change", function () {
    varchange();
  });

  varupdate();
}

function validatePositiveInput(inputId) {
  const value = $(inputId).spinner("value");
  if (value <= 0 || isNaN(value)) {
    // If value is zero, negative, or NaN, set the value to a default value
    $(inputId).spinner("value", 1); // You can change 1 to any default value you prefer
  }
}

function varupdate() {
  $("#fSlider").slider("value", $("#fSpinner").spinner("value"));
  $("#toSlider").slider("value", $("#toSpinner").spinner("value"));
  $("#omegaSlider").slider("value", $("#omegaSpinner").spinner("value"));
  $("#kfSlider").slider("value", $("#kfSpinner").spinner("value"));
  $("#krSlider").slider("value", $("#krSpinner").spinner("value"));
  $("#mSlider").slider("value", $("#mSpinner").spinner("value"));
  $("#jSlider").slider("value", $("#jSpinner").spinner("value"));
  $("#l1Slider").slider("value", $("#l1Spinner").spinner("value"));
  $("#l2Slider").slider("value", $("#l2Spinner").spinner("value"));
  F0 = $("#fSpinner").spinner("value");
  T0 = $("#toSpinner").spinner("value");
  w = $("#omegaSpinner").spinner("value");
  k_f = $("#kfSpinner").spinner("value");
  k_r = $("#krSpinner").spinner("value");
  m = $("#mSpinner").spinner("value");
  j = $("#jSpinner").spinner("value");
  l1 = $("#l1Spinner").spinner("value");
  l2 = $("#l2Spinner").spinner("value");

}
function movetoTop() {

  const firstDiv = document.querySelector("#simulation");
  if (firstDiv) {
      firstDiv.scrollIntoView({ behavior: "smooth" });
  }
}