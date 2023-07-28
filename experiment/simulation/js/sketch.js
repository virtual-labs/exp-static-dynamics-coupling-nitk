//Canvas:
let width = 800;
let height = 600;

//Time factors:
let t = 0.05;
let dt = 0.01;

//System Definition:
let automobile_sys;

//Graphs:
let position_graph1;
let position_graph2;

//Inputs:
let m;
let j;
let w;
let F0;
let T0;
let l1;
let l2;
let k_f;
let k_r;

//Factor: (Helps during resonance scale down)
let factor = 30;

//Images to be loaded:
let img;
let button1;
let button2;
let button3;
let button4;
let button5;
let spr;

//Page(s):
let page1 = true;

//Animation:
let animation = true;
let touch = false;

//...
let clear;

//Function-1: To preload all the image files:
function preload()
{
    play = loadImage("images/blueplaydull.png");
    pause = loadImage("images/bluepausedull.png");
    graph = loadImage("images/graphbutton.png");
    back = loadImage("images/bluebkdulls.png");
    bg = loadImage("images/frame_copper_ver02.png");
    spr = loadImage("images/spring.png")
}

//Function-2: To setup the arrangemnt for simulation:
function setup()
{
    textFont("Comic Sans MS");

    //Create Canvas:
    createCanvas(width,height);

    //System formation:
    automobile_sys = new System(430,350,90,25);

    //Position Graphs:
    position_graph1 = new Graph(50,240,100,220,"X","t");
    position_graph2 = new Graph(50,320,100,220,"Θ","t");

    // Inputs:
    /*
    F0 = new NumberInput(620,140,"F0(N)",0,10,5,1,1,true);
    T0 = new NumberInput(620, 170, "T0(N-m)", 0, 10, 5, 1,1, true);
    w=  new NumberInput(620, 200, "ω(rad/sec)", 0, 30, 5.86, 0.01,0.01, true);
    k_f = new NumberInput(620, 230, "Kf (N/m)", 10000, 50000, 18000, 50,1, true);
    k_r = new NumberInput(620, 260, "Kr (N/m)", 20000, 50000, 22000, 50,1, true);
    m = new NumberInput(620, 290, "M(kg)", 1000, 5000, 1000, 50,1, true);
    j = new NumberInput(620, 320, "J(kg-m2)", 100, 1000, 810, 10,1, true);
    l1 = new NumberInput(620, 350, "l1(m)", 0, 5, 1, 0.5,0.1, true);
    l2 = new NumberInput(620, 380, "l2(m)", 0, 5, 1.5, 0.5,0.1, true);
    */

    F0 = new NumberInput(620,140,"F0(N)",0,10,3,1,1,true);
    T0 = new NumberInput(620, 170, "T0(N-m)", 0, 10, 0, 1,1, true);
    w=  new NumberInput(620, 200, "ω(rad/sec)", 10, 15, 11, 0.1,1, true);
    k_f = new NumberInput(620, 230, "Kf (N/m)", 17000, 19000, 18000, 100,1, true);
    k_r = new NumberInput(620, 260, "Kr (N/m)", 21000, 23000, 22000, 100,1, true);
    m = new NumberInput(620, 290, "M(kg)", 500, 1500, 1000, 10,1, true);
    j = new NumberInput(620, 320, "J(kg-m2)", 100, 1000, 810, 10,1, true);
    l1 = new NumberInput(620, 350, "l1(m)", 1, 5, 1, 0.5,0.1, true);
    l2 = new NumberInput(620, 380, "l2(m)", 1, 5, 1.5, 0.5,0.1, true);

    button1 = new Button(675, 450, pause)
    button2 = new Button(706, 430, graph)
    button3 = new Button(645,460,back)
    button4 = new Button(705, 460, graph)
    button5 = new Button(645,470,back)

}

//Function-3: To run the page(s):
function draw()
{
    if(page1)
    {
        runPage1();
    }
}

function mousePressed()
{
    handleEvents();
}


