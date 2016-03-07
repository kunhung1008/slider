var ul;
var LiItems;
var ImageNumber;
var ImageWidth;
var animate;
var actuallyMove;
var runtimes;
var flag;
var movePerTime;
var waitPeople = 0;
var currentImage = 0;
var currentPostion = 0;
var actuallyMove = 0;
var count = 0;


function begin(){

	ul = document.getElementById('images');
	LiItems = ul.children;
	ImageNumber = LiItems.length;
	ImageWidth = LiItems[0].children[0].clientWidth;
	ul.style.width = parseInt(ImageNumber  * ImageWidth) + "px";

  pre = document.getElementById('pre');
	nex = document.getElementById('nex');

	pre.onclick = function(){onClickPre();};
	nex.onclick = function(){onClickNex();};

}

function submit(){
	if(flag == false){
			return false;
	}


	flag = false;

	return true;
}

function moveForward(){



	ul.style.left = actuallyMove + 'px';
	actuallyMove = actuallyMove - movePerTime;
	if (count < 100){
		count++;
	}
	else{

		clearInterval(animate);
		count = 0;
		flag = true;
	  }
}

function moveBack(){

	ul.style.left = actuallyMove + 'px';
	actuallyMove = actuallyMove + movePerTime;
	if (count < 100){
		count++;
	}
	else{
		clearInterval(animate);
		count = 0;
		flag = true;
	}
}


function onClickPre(){


	if(submit()){
		if(currentImage == 0){
			flag = true;
			return;
		}
		else{
			movePerTime = ImageWidth / 100;
			animate = setInterval(moveBack,20)


		}
		currentImage--;
 }
}

function onClickNex(){

	waitPeople++;
	if(submit()){
	if(currentImage ==  3){
		flag = true;
		return;
	}
	else{


 		movePerTime = ImageWidth / 100;
		animate = setInterval(moveForward,20);

	}
	currentImage++;
 }
}


window.onload = begin;
