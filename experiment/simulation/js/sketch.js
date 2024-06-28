// canvas
// let width = document.querySelector("#canvas-container").width;
// let height = document.querySelector("#canvas-container").height;
let width = 600;
let height = 600;

// counter
let t = 0.05;
let dt = 0.01;

// system
let automobile_sys;

// graphs
let position_graph1;
let position_graph2;

// factor
let factor = 30;

// images
let img;
// let button1;
// let button2;
// let button3;
// let button4;
// let button5;
let spr;

// pages
let page1 = true;
let page2 = false;
let page3 = false;
let graphStep = 0;

// animation
let animation = true;
let touch = false;

// Buttons
let clear;

function preload() {
 
  spr = loadImage("images/spring.png");
}

function setup() {
 
  var sketchCanvas = createCanvas(600, 350);
  sketchCanvas.parent("canvas-container");

  automobile_sys = new System(480,250,90,25);

  position_graph1 = new Graph(80,140,100,220,"X","t");
  position_graph2 = new Graph(80,220,100,220,"Θ","t");

  varinit();
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

function draw() {
  if (page1) {
    runPage1();
  }


}


function simstate() {
  var imgfilename = document.getElementById("playpausebutton").src;
  imgfilename = imgfilename.substring(
    imgfilename.lastIndexOf("/") + 1,
    imgfilename.lastIndexOf(".")
  );

  if (animation) {
    noLoop();
    animation = false;
    document.getElementById("playpausebutton").src = "images/blueplaydull.svg";
    document.querySelector(".playPause").textContent = "Play";
  } else {
    loop();
    animation = true;
    document.getElementById("playpausebutton").src = "images/bluepausedull.svg";
    document.querySelector(".playPause").textContent = "Pause";
  }
}

