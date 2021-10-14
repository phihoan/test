var canvas = document.getElementById('gamezone'); 
var context = canvas.getContext('2d');
var scoreshow= document.getElementById('score');

var birdimg = new Image();
var hinhnechinh=new Image();
var ongtren = new Image();
var ongduoi = new Image();
birdimg.src="imges/swing-copters-2-spinki-falling (1).gif";
hinhnechinh.src = "imges/d087d0c0e1da7a1e9dac3eda98cc0fa6.png";
ongduoi.src = "imges/ongduoi.png";
ongtren.src = "imges/ongtren.png";

var score=0;
var khoangcachhaiong = 150;
var khoangcachdenongduoi;
var bird = {
    x: hinhnechinh.width/5,
    y: hinhnechinh.height/2 
}
var ong=[];
ong[0]={
    x:canvas.width, 
    y:0 
}

function run(){
    context.drawImage(hinhnechinh,0,0);
    context.drawImage(birdimg,bird.x,bird.y);

    for( var i=0; i<ong.length;i++)
    {
        khoangcachdenongduoi=ongtren.height+khoangcachhaiong;
        context.drawImage(ongtren,ong[i].x,ong[i].y);
        context.drawImage(ongduoi,ong[i].x,ong[i].y+khoangcachdenongduoi);
        ong[i].x-=5;
        if(ong[i].x== canvas.width/2){
            ong.push({
                x:canvas.width, 
                y:Math.floor(Math.random()*ongtren.height)-ongtren.height
            })
        }
        if(ong[i].x==0)ong.splice(0,1);
        if(ong[i].x==bird.x)score++;
        if(bird.y+birdimg.height==canvas.height || bird.x+birdimg.width>= ong[i].x&& bird.x<=ong[i].x +ongtren.width && (bird.y<=ong[i].y+ongtren.height || bird.y +birdimg.height>= ong[i].y+khoangcachdenongduoi))
        {
            return;
        }
    }
    scoreshow.innerHTML="score: "+score;
    // cho bird rơi xuống
    bird.y+=3;
    requestAnimationFrame(run);
}
document.addEventListener("keydown",function(){
    bird.y-=60;   
})
// ok khá ổn 
// các bạn nhớ là tọa độ trên máy tính là ở gốc trên trái đi xuống dưới 
// là chiều dương nha
run(); 