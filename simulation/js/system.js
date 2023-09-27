class System
{
    constructor(x,y,_w,_h)
    {
        // Dimensions set:
        this.width = _w;
        this.height = _h;
        this.x_equilibruim = x;
        this.y_equilibruim = y;

        //Mathematical Constraints:
        this.m = 0;
        this.j = 0;
        this.w = 0;
        this.F0 = 0;
        this.T0 = 0;
        this.l1 = 0;
        this.l2 = 0;
        this.k_f = 0;
        this.k_r = 0;
        this.natomega1  = 0;
        this.natomega2 = 0;
        this.X = 0;
        this.thetha = 0;
    }

    initialise(_F0,_T0,_w,_l1,_l2,_k_f,_k_r,_m,_j)
    {
        this.F0 = _F0;
        this.T0 = _T0;
        this.w = _w;
        this.l1 = _l1;
        this.l2 = _l2;
        this.k_f = _k_f;
        this.k_r = _k_r;
        this.m = _m;
        this.j = _j;

        //Computation time:
        //Determinant terms:
        this.k_eff = this.k_f + this.k_r;
        this.term1 = this.k_r*this.l2 - this.k_f*this.l1;
        this.term2 = this.k_r*Math.pow(this.l2,2) + this.k_f*Math.pow(this.l1,2);

        //Contructing equation: (ax^2+bx+c)
        this.a = this.m*this.j;
        this.b = -(this.m*this.term2 + this.j*this.k_eff);
        this.c = this.term2*this.k_eff - Math.pow(this.term1,2);

        this.det = Math.sqrt(Math.pow(this.b,2) - (4*this.a*this.c));

        //Natural Frequencies Found!!:
        this.natomega1 = Math.sqrt((-this.b/(2*this.a)) - (this.det/(2*this.a)));
        this.natomega2 = Math.sqrt((-this.b/(2*this.a)) + (this.det/(2*this.a)));

        this.ratio_1 = -this.term1 / (-this.m*Math.pow(this.natomega1,2)+this.k_eff);
        this.ratio_2 = -this.term1 / (-this.m*Math.pow(this.natomega2,2)+this.k_eff);

        this.denom = this.a*Math.pow(this.w,4) + this.b*Math.pow(this.w,2) + this.c;
        this.X_amp = (this.F0*(this.j*Math.pow(this.w,2)+this.term2) - this.T0*this.term1)/this.denom;
        console.log(this.denom);
        this.thetha_amp = (this.T0*(this.m*Math.pow(this.w,2)+this.k_eff) - this.F0*this.term1)/this.denom;

    }

    update(t,_mulfact)
    {

        if(this.w > 9 && this.w < 10){
              this.X = -(this.X_amp*_mulfact*Math.sin(this.w*5*t))*60
            //  console.log("the value of X is " , this.X_amp);
              this.thetha = -(this.thetha_amp*_mulfact*Math.sin(this.w*5*t))*60
              this.x1 = this.X - (this.l1*this.thetha)
              this.x2 = this.X + (this.l2*this.thetha)

        }
        else  if(this.w==5.86){
            if(this.k_f==18000 && this.k_r==22000){
        this.X = -(this.X_amp*_mulfact*Math.sin(this.w*5*t))
      //  console.log("the value of X is " , this.X_amp);
        this.thetha = -(this.thetha_amp*_mulfact*Math.sin(this.w*5*t))
        this.x1 = this.X - (this.l1*this.thetha)
        this.x2 = this.X + (this.l2*this.thetha)
            }
            else{
                this.X = -(this.X_amp*_mulfact*Math.sin(this.w*5*t))*100
                //  console.log("the value of X is " , this.X_amp);
                  this.thetha = -(this.thetha_amp*_mulfact*Math.sin(this.w*5*t))*100
                  this.x1 = this.X - (this.l1*this.thetha)
                  this.x2 = this.X + (this.l2*this.thetha)

            }
        }
        else{

            this.X = -(this.X_amp*_mulfact*Math.sin(this.w*5*t))*1000
            //  console.log("the value of X is " , this.X_amp);
              this.thetha = -(this.thetha_amp*_mulfact*Math.sin(this.w*5*t))*1000
              this.x1 = this.X - (this.l1*this.thetha)
              this.x2 = this.X + (this.l2*this.thetha)

        }
    }

    show(_stroke,_strockweight,_fill)
    {
        push();

        let wid = spr.width-50;
        let hei = spr.height-140;
        
        //Spring-1:
        image(spr,this.x_equilibruim-(wid/2)-70,this.y_equilibruim-50-hei+this.x1+10,wid,hei-this.x1);
        fill(0,0,0);
        textSize(10);
        text("Kf",this.x_equilibruim - (wid)-70, this.y_equilibruim -50 -(hei/2)+this.x1+10);

        image(spr,this.x_equilibruim-(wid/2)-70+20*(this.l1+this.l2),this.y_equilibruim-50-hei+this.x2+10,wid,hei-this.x2);
        fill(0,0,0);
        textSize(10);
        text("Kr",this.x_equilibruim + (wid/2)-70+20*(this.l1+this.l2), this.y_equilibruim -50 -(hei/2)+ this.x2+10);
        
        rectMode(CORNERS)
        fill(0,0,0)
        rect(this.x_equilibruim-80, this.y_equilibruim-40, this.x_equilibruim-60+20*(this.l1+this.l2),this.y_equilibruim-40+this.height-20)
        
        rect()
        stroke(_stroke);
        strokeWeight(_strockweight);
        fill(_fill);

        // rectMode(CENTER)
        // rectMode(CORNERS)
        fill(139,69,19);
        // //CENTER MODE: rect(this.x_equilibruim-70+10*(this.l1+this.l2),this.y_equilibruim-50-hei+this.X+5,20*(this.l1+this.l2)+(wid/2),this.height-10)
        // //CORNERS MODE: rect(this.x_equilibruim-(wid/2)-70,this.y_equilibruim-50-hei+this.x1-10,this.x_equilibruim+(wid/2)-70+20*(this.l1+this.l2),this.y_equilibruim-50-hei+this.x2+10)
        strokeWeight(12.5);
        line(this.x_equilibruim-(wid/2)-70,this.y_equilibruim-50-hei+this.x1+10,this.x_equilibruim+(wid/2)-70+20*(this.l1+this.l2),this.y_equilibruim-50-hei+this.x2+10)
        fill(255,255,255)
        textSize(10)

        stroke('red')
        point(this.x_equilibruim-70+20*this.l1,this.y_equilibruim-50-hei+this.X+10)

        stroke(_stroke);
        strokeWeight(_strockweight);
        fill(_fill);
        text("C.G.",this.x_equilibruim-80+20*this.l1,this.y_equilibruim-50-hei+this.X-10)
        // text("m1",this.x_equilibruim-75+10*(this.l1+this.l2) ,this.y_equilibruim-50-hei+this.X+(wid/2)-(this.height/2)+10)
        
        pop();
    }

}