// Game ki working ko samjho 
// 1st step key press hote hi  start ho jaye 
// 2nd level 1 ho jaye and butto flash ho jaye 
// btn press ko track karne ke liye ham event listeners ko lagayenge 
let gameseq=[];
let userseq=[];

let btns = ["red","blue","orange","purple"];

let started=false;
let level = 0;

let h2 = document.querySelector("h2");


document.addEventListener("keypress", function(){//tracks whether the  game has been starte or not 
    if (started==false) { //Preents ki ek baar hi key dabane pe game start ho 
        console.log("Game started");
        started = true;
        levelup();
    };
});// 1st  step completed 

// 2nd step for flash up and text to level 1 

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    } , 300);
};

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    } , 200);
};


function levelup(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;
   
    let rndindex = Math.floor(Math.random()*4);
    let rndcolor = btns[rndindex];
    let rndbtn= document.querySelector(`.${rndcolor}`);
    btnflash(rndbtn);
    gameseq.push(rndcolor);
    console.log(gameseq);
    // console.log(rndbtn);
    // console.log(rndindex);
    // console.log(rndcolor);
}
// Random button choosing

// Mistakes some spelling like Math ko math likha tha and main cause tha ki
// levelup function  ko call hi nhi kiya tha and div ki do class banayi thi jabki usme hi space deke dono classes ko likh denge 

//Step 1&2 completed now its time for the 3rd step adding event listeners 

function btnpress() {
    let btn = this;
    userflash(btn);

    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    chkans(userseq.length-1);

};

function reset(){
    started=false;
    gameseq = [];
    userseq = [];
    level = 0;
};

function chkans(idx){
    // console.log("current level : ",level);
    // let idx = level - 1 ;

    if(userseq[idx] === gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,100);
        }
    }else{
        document.querySelector("body").style.backgroundColor ="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor ="white";
        },300);
        h2.innerHTML = `Game Over !! Your score was <b>${level-1}</b> <br>Press any key to start again. ` ;
        reset();
    }

};


// Current level ke barabar ke index honge userseq and gameseq


let allbtns= document.querySelectorAll(".Box");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
};

// Step 3 done user added event listener 

// step 4 tackling the arrays game seq and user seq

// Chkans ko call karna tha but chkbtn call kar rha tha 
// Step 4 is also done 

// Ab step 5 karenge game ko reset ka option ready karna hai: yeh bhi done ho gya ek nya reset function banake 

// Ab final step 6 : highlighting the score 


