const passbox=document.getElementById("pass")
const button=document.querySelector("button")

const length=12;
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase="abcdefghijklmnopqrstuvwxyz"
const number="0123456789"
const symbols="@#$%^&*()!?+/*-?"

const allchar=uppercase+lowercase+number+symbols;
function random(){
        let password=""
        password+= uppercase[Math.floor(Math.random()*uppercase.length)]
        password+= lowercase[Math.floor(Math.random()*lowercase.length)]
        password+= number[Math.floor(Math.random()*number.length)]
        password+= symbols[Math.floor(Math.random()*symbols.length)]

        while(length>password.length){
                password+= allchar[Math.floor(Math.random()*allchar.length)]
        }
        passbox.value=password;
}
button.addEventListener("click",random)
function copy(){
        passbox.select()
        document.execCommand("copy")
}
