var name="Narenn";
console.log(name);

var a=10;
var b=30;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

if(a>b){
    console.log("a is greater");
}
else{
    console.log("b is greater");
}


var weekday= Math.round(random(1,10))
switch(weekday){
    case 1: console.log("sunday");
    break;
    case 2: console.log("monday");
    break;
    case 3: console.log("tuesday");
    break;
    case 4: console.log("wednesday");
    break;
    case 5: console.log("thurday");
    break;
    case 6: console.log("friday");
    break;
    case 7: console.log("saturday");
    break;
    default:console.log("Ivalid number");
}

switch (rand)
{
    case 1: obstacle.addImage("obs1",obstacle1);
    break;







    default: break;






    
}
//loops
//to print multiplicative table of num

var n=4;
for(var i=1;i<=10;i=i+1){
    console.log(n+"x"+i+"="+(n*i));
}

//functions
var names;
function message(names){
    console.log("HI"+names+" How are you ???");

}

message("Chaitra");


class Ground{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
    }
    display()
    {
        rect(this.x,this.y,this.width,this.height);
    }
}

function setup()
{
    var canvas =createCanvas(1200,400);
}

function draw()
{
    background("black");
    fill("red");
    var ground=new Ground(0,360,1200,20);
    ground.velocityX=-5;
    ground.display();

}




















