let showCodeBlock = true;
function runPage1() {
  background(255);
  // image(bg, 0, 0);
  stroke(0);
  fill(0);

  push();

  pop();

  push();
  stroke(0, 100);

  pop();
 

  automobile_sys.initialise(F0,T0,w,l1,l2,k_f,k_r,m,j);
  automobile_sys.update(t,factor);
  automobile_sys.show(0,1,0);

  position_graph1.update(automobile_sys.X);
  position_graph1.draw(255, 0,0)

  position_graph2.update(automobile_sys.thetha);
  position_graph2.draw(255, 0, 0)
  strokeWeight(0);

 
document.getElementById("w1").textContent= automobile_sys.natomega1.toFixed(4) + " rad/s";
document.getElementById("w2").textContent= automobile_sys.natomega2.toFixed(4) + " rad/s";
document.getElementById("x1").textContent= (automobile_sys.ratio_1).toFixed(4) ;
document.getElementById("x2").textContent= (automobile_sys.ratio_2).toFixed(4);
document.getElementById("node1").textContent= (automobile_sys.ratio_1).toFixed(4) + " m from the C.G.";
document.getElementById("node2").textContent= (automobile_sys.ratio_2).toFixed(4) + " m from the C.G.";

strokeWeight(0.5);

F0 = $("#fSpinner").spinner("value");
T0 = $("#toSpinner").spinner("value");
w = $("#omegaSpinner").spinner("value");
k_f = $("#kfSpinner").spinner("value");
k_r = $("#krSpinner").spinner("value");
m = $("#mSpinner").spinner("value");
j = $("#jSpinner").spinner("value");
l1 = $("#l1Spinner").spinner("value");
l2 = $("#l2Spinner").spinner("value");

 
  t = t + dt;
}

