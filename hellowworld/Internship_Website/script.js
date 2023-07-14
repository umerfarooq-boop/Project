



const number = document.querySelectorAll('.sta');
const speed = 60;
number.forEach(element => {
    incNumber(element);
});

function incNumber(elem){
    let text = +elem.innerText;
    const value = +elem.getAttribute("data-target");
    const inc = Math.floor(value/speed)
    if(text<value){
        elem.innerText=inc+text;
        setTimeout(()=>{
            incNumber(elem)
        },200);
    }else{
        elem.innerText=value;
    }
}


const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

function validation(){
let name = document.getElementById('name').value;
let email = document.getElementById('email').value;
let msg = document.getElementById('msg').value;

let v_name = /^[a-zA-Z .']{3,20}$/;
let v_email = /^[a-zA-Z0-9]{3,20}[@]{1}[a-zA-Z}{3,}[.]{1}[a-zA-Z.]{3,9}$/;
let vv_msg = /[a-zA-Z0-9 ,]/;

if(v_name.test(name)){
  document.getElementById('error1').innerHTML = "";
  document.getElementById('name').style.borderColor = "green";
}
else{
  document.getElementById('error1').innerHTML="    *****please Enter Correct Name****";
  document.getElementById('name').style.borderColor = "yellow";
  return false;
}

if(v_email.test(email)){
  document.getElementById('error2').innerHTML = "";
  document.getElementById('email').style.borderColor = "green";
}

else{
  document.getElementById('error2').innerHTML=" *** Please Enter Correct Email ***";
  document.getElementById('email').style.borderColor="yellow";
  return false;

}


if(vv_msg.test(msg)){
  document.getElementById('error3').innerHTML = "";
  document.getElementById('msg').style.borderColor = "green";
}

else{
  document.getElementById('error3').innerHTML=" *** Write Correct Messege ***";
  document.getElementById('msg').style.borderColor="yellow";
  return false;

}

}


