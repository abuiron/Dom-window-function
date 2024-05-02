let studentswindow;
let classwindow;

//window.open() is used for open the mentioned link in the new window or new tab
function openStudents(){
    studentswindow = window.open('students.html')
}

function openClass(){
    classwindow = window.open('class.html')
}

//window.close() will close the window or mentioned link 
function closeWindow(){
    studentswindow.close()
    classwindow.close()
}

//it'll close the tab where your in
function closeStudent(){
    window.close()
}
function closeClass(){
    window.close()
}
//pad() is add digits or letters to the string
//syntax string.padStart(how many digits,what you want)
let a=5;
let he = document.getElementById("h")
he.innerText= `${String(a).padStart(2,'0')}`;

//using pad alsoachieve the masked numbers
let Atm = "125464758699";
let lst4dig = Atm.slice(-4);
let msknumber = lst4dig.padStart(Atm.length,'*')

let msk = document.getElementById("msk")
msk.innerText=msknumber;



//stop watch

let hh = 0; //hours 
let mm = 0; //minutes  60m = 1h
let ss = 0; //seconds  60s = 1m
let ms = 0; //milli seconds 100ms = 1s

let myintervel;
let countdown = document.getElementById("countdown")

//using pad() in arrow function

const zeroPad = (num)=> String(num).padStart(2,'0')

//this function used for start the timer using intervel
function startTimer(){

     //setintervel is used for repeat again and again with your time
     myintervel = setInterval(()=>{
        ms++

        if(ms==100)
        {
            ss++
            ms=0
        }
        if(ss==60)
        {
            mm++
            ss=0
        }
        if(mm==60)
        {
            hh++
            mm==0;
        }

        

        let html = `${zeroPad(hh)}<sub>HH</sub>:${zeroPad(mm)}<sub>MM</sub>:${zeroPad(ss)}<sub>SS</sub>:${zeroPad(ms)}<sub>MS</sub>`
        countdown.innerHTML=html;
    },10)
 }

//this function used in stop button
function stopTimer(){
    clearInterval(myintervel)//clear intervel is used for clear or stop the intervel
}

//this function used in reset button
function resetTimer()
{
    stopTimer()
    hh=0;
    mm=0;
    ss=0;
    ms=0;
    let html = `${zeroPad(hh)}<sub>HH</sub>:${zeroPad(mm)}<sub>MM</sub>:${zeroPad(ss)}<sub>SS</sub>:${zeroPad(ms)}<sub>MS</sub>`
        countdown.innerHTML=html;
}


//windos history

function setData(){
    localStorage.setItem("name","abu")
    sessionStorage.setItem("name","iron")
}