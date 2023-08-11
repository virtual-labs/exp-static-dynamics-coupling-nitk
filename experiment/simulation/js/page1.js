function runPage1()
{
    background(255);
    image(bg,0,0);
    stroke(0);
    fill(0);

    //Loading Texts:
    push();
    textSize(25);
    textFont("Comic Sans MS");
    text("Automotive Vehicle as a Two Degree of Freedom System",105,45);

    textSize(18);
    text("Controls ",660,418);
    text("Variables ",660,107);

    pop();

    //System is brought:

    automobile_sys.initialise(F0.inp,T0.inp,w.inp,l1.inp,l2.inp,k_f.inp,k_r.inp,m.inp,j.inp);
    automobile_sys.update(t,factor);
    automobile_sys.show(0,1,0);

    position_graph1.update(automobile_sys.X);
    position_graph1.draw(255, 0,0)

    position_graph2.update(automobile_sys.thetha);
    position_graph2.draw(255, 0, 0)

    strokeWeight(0)
    textFont("Comic Sans MS");
    textSize(15);
    fill(230,154,42);
    text('ω1 = ' + automobile_sys.natomega1.toFixed(4) + " rad/s", 310, 550);
    text('ω2 = ' + automobile_sys.natomega2.toFixed(4) + " rad/s", 450, 550);
    text('X(1)/Θ(1) = ' + (automobile_sys.ratio_1).toFixed(4) + " ", 310, 480);
    text('X(2)/Θ(2) =  ' + (automobile_sys.ratio_2).toFixed(4) + " ", 310, 510);
    text('Node-1 is at ' + (automobile_sys.ratio_1).toFixed(4) + " m from the C.G.", 40, 480);
    text('Node-2 is at ' + (automobile_sys.ratio_2).toFixed(4) + " m from the C.G.", 40, 520);
    strokeWeight(0.5);    
    line(0, 440, 600, 440)
    line(300,440,300,580)

    // fill(0,0,0);
    // textSize(20);
    // text("Lumped Automobile Model Visualized in 2-D", 115, 110);

    F0.draw();
    T0.draw();
    w.draw();
    k_f.draw();
    k_r.draw();
    m.draw();
    j.draw();
    l1.draw();
    l2.draw();

    button1.draw();
    // button2.draw();

    t = t + dt;
}