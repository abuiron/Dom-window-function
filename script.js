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
// storing in local and session storage

// session storage will delete after you close the tab
// local storage will not delet untill you delete
function setData(){
    localStorage.setItem("name","abu")
    sessionStorage.setItem("name","abu")
}

//get the data of local& session
function getData(){
    let lgd=localStorage.getItem("name");
    let sgd=sessionStorage.getItem("name")

    let ld = document.getElementById("lgd");
    ld.innerText=`lgd data ${lgd}`;
    
    let sd = document.getElementById("sgd");
    sd.innerText=`sgd data ${sgd}`;

}

//remove the local & session
function removeData(){
    localStorage.removeItem("name");
    sessionStorage.removeItem("name");
}

//clear the local & session  remove and clear both are same 
function clearData(){
    localStorage.removeItem("name");
    sessionStorage.removeItem("name");
    let ld = document.getElementById("lgd");
    ld.innerText='';
    
    let sd = document.getElementById("sgd");
    sd.innerText='';

}


//window console

//this give a error to the console
function werror(){
    window.console.error("you have an error");
}

//this give the warning to the console
function wwarning(){
    window.console.warn("this is the warning")
}

//this is give the alert
function walert(){
    window.alert("thi is the alert");
}

//this is show he prompt you need
function wprompt(){
    window.prompt("Enter your name");
}

//this is for confirm message
function wconfirm(){
    window.confirm("are you sure about that");
}

//this is for clear the console
function wclear(){
    window.console.clear()
}

//setTimeout()
//seTimeout function is used for calling one time with 
//exact time 
function wopen(){
    let win = window.open("class.html")

    setTimeout(()=>{
        win.close()
    },2000)//the window will close in  2 seconds
}