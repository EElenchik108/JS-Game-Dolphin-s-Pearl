"use strict";

let btn = document.getElementById('but');
let butL = document.getElementById('left');
let butR = document.getElementById('right');
let conteiner = document.getElementById('conteiner');
let login = document.getElementById('login');
let counter = document.getElementById('counter');
let MyDate = document.getElementById('date');
let MyData = new Date();	
let money = document.getElementById('money');
let stavka = document.getElementById('stavka');
let praze = document.getElementById('praze');
let stav = 200;
let Mymoney = 400;
money.innerHTML = Mymoney;
stavka.innerHTML = stav;
let money1;
let Mypraze=0;
let f1 = document.getElementById('f1');
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let img = ['fish.gif', 'octopus.gif', 'pearl.gif', 'shark.gif', 'shell.gif', 'star-magenta.gif', 'star-red.gif'];
let form = document.forms['frm1'];    	
let btn1 = form.lastElementChild;    	
let text = form.elements['text'];    	
let newButn = document.createElement('button');
newButn.id = 'newButn';


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

butL.addEventListener('click', ()=>{
    if (stav>=100){
        stav -= 100;
        Mymoney+=100;
        money.innerHTML = Mymoney;
        stavka.innerHTML = stav;
    }
})

butR.addEventListener('click', ()=>{
    if (Mymoney>=100){
        stav += 100;
        Mymoney-=100;
        money.innerHTML = Mymoney;
        stavka.innerHTML = stav;
      }   			
})


btn.addEventListener('click', (e)=>{
    e=e||event;	
    let rand = 	getRandomInt(0,7);
    let rand1 = getRandomInt(0,7);	
    let rand2 = getRandomInt(0,7);
    img1.src = "images/"+img[rand];
    img2.src = "images/"+img[rand1];	
    img3.src = "images/"+img[rand2];	
    if (rand==rand1&&rand==rand2&&rand2==rand1) {					
            if (rand==2) {
                money1 = stav*800;						
            } else if (rand==3) {
                money1 = stav*200;
            } else if (rand==1) {
                money1 = stav*80;
            } else if (rand==0) {
                money1 = stav*40;
            } else if (rand==4) {
                money1 = stav*20;
            } else if (rand==5||rand==6) {
                money1 = stav*10;
            } 	
                Mymoney = Mymoney+money1;
                money.innerHTML = Mymoney;						
                praze.innerHTML = money1;
                stavka.innerHTML = stav;						
                
    } else if (rand==6&&rand1==6||rand==5&&rand1==5||rand==6&&rand1==5||rand==5&&rand1==6||rand2==6&&rand1==6||rand2==5&&rand1==5||rand2==6&&rand1==5||rand2==5&&rand1==6||rand==6&&rand2==6||rand==5&&rand2==5||rand==6&&rand2==5||rand==5&&rand2==6) {
                money1 = stav*5;
                Mymoney = Mymoney+money1;
                money.innerHTML = Mymoney;						
                praze.innerHTML = money1;
                stavka.innerHTML = stav;			

    } else if (rand==6||rand1==6||rand2==6||rand==5||rand1==5||rand2==5) {
                money1 = stav*2;
                Mymoney = Mymoney+money1;
                money.innerHTML = Mymoney;						
                praze.innerHTML = money1;
                stavka.innerHTML = stav;
    }
    else {
            praze.innerHTML = "0";
            Mymoney = Mymoney-stav;
            money.innerHTML = Mymoney;
            stavka.innerHTML = stav;
            if (Mymoney<0){
                  let newDiv = document.createElement('div');
                conteiner.className='hide';	
                newDiv.id = 'newDiv';
                document.body.prepend(newDiv);
                let pp = document.createElement('p');		
                pp.id = 'pp';
                newDiv.prepend(pp);
                pp.innerHTML="Продать почку?"
                let newBut = document.createElement('button');
                newBut.id = 'newBut';
                newBut.innerHTML="OK"
                newDiv.append(newBut);
                newBut.addEventListener('click', ()=>{				
                newDiv.remove();
                conteiner.classList.remove('hide');
            })
          }
    }
})

function setCookie (name, val, expDay) {
    let cook = name+'='+escape(val)+';';
    if(expDay){
        let now = new Date();
        now.setDate(now.getDate()+expDay);
        cook+='expires='+now.toUTCString()+';';
    }
    document.cookie = cook;
}

function getCookie(name){
    let cook = document.cookie;
    let ptn = new RegExp("\\b"+name+"=", 'g');
    if(ptn.test(cook)) {
        let pos = cook.search(ptn);
        pos = cook.indexOf('=', pos);
        let pos2 = cook.indexOf(';', pos);
        if (pos2==-1) {
            console.log(unescape(cook.slice(pos+1)));
            return unescape(cook.slice(pos+1)); 
        }
        else {
            return unescape(cook.slice(pos+1, pos2));
        }
    }
    else return '';
}

function deleteCookie(name) {
  setCookie(name, "", {
    'max-age': -1
  })
}

if (getCookie('user','',365)=='') {
        text.addEventListener('change', ()=> {
        let val = text.value;
        setCookie('user', val, 1);
    })    		
}
else {    		
    login.innerHTML= "Привет, <u>"+getCookie('user')+"</u>";   		
    login.append(newButn);			
    newButn.innerHTML="Сменить пользователя";
    let num = Number(getCookie('count'))+1;
    counter.innerHTML="Вы зашли к нам в "+num+" раз";
    setCookie('count', num, 1);
    MyDate.innerHTML = "Последнее Ваше посщение: "+MyData.getDate()+"."+(MyData.getMonth()+1)+"."+MyData.getFullYear()+" в "+MyData.getHours()+":"+MyData.getMinutes()+".";
    newButn.addEventListener('click', ()=> {
    window.location.reload();
    deleteCookie('user');  
    deleteCookie('count');   			
    })
}

