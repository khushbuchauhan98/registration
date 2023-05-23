let users=[];
let randoms=['vadodara','surat','navsari','ahmedabad','anand','nadiad','bharuch']
renderuser=()=>{
    let right=document.getElementById('rightcontent')
    right.innerHTML=""
    users.map((user)=>{
        let divs= document.createElement('div')
        let divs1= document.createElement('div')
        let p1=document.createElement('p')
        let p2=document.createElement('p')
        let p3=document.createElement('p')
        let checl=document.createElement('input')
        checl.classList.add('checkboxs')
        divs.classList.add('students');
        p1.classList.add('block')
        p2.classList.add('block')
        p3.classList.add('block')
        divs1.id='bg'
        divs1.classList.add('flex')
        p1.innerText=user.name
        p2.innerText=user.email;
         p3.innerText=user.center
        checl.type='checkbox'
        
    //     checl.addEventListener('click',(e)=>{
    //         let bg=document.getElementById('bg')
    // bg.classList.add('bg')
    //     })
        // checl.onclick(fail())
         divs.appendChild(checl)
        right.appendChild(divs);
        divs.append(divs1)
       
        divs1.appendChild(p1);
        divs1.appendChild(p2);
        divs1.appendChild(p3);
        checl.onclick=function(){
           if(checl.checked == true){
            checl.checked=true;
            divs1.classList.add('bg')
           }
           else{
            divs1.classList.remove('bg')
           }
  
        }
    })
    
}
check=()=>{
    let bg=document.getElementById('bg')
    bg.classList.add('bg')
}
success=()=>{
    let alert=document.getElementById('alert')
    alert.classList.add('alert')
    alert.innerText='user added successfully'
    setTimeout(() => {
        alert.classList.remove('alert')
        alert.innerText=''
    }, 2000);
}
fail=()=>{
    let fail=document.getElementById('alert')
    fail.classList.add('danger')
    fail.innerText='same email exists'
    setTimeout(() => {
        fail.classList.remove('danger')
        fail.innerText=''
    }, 2000);
}
blankinput=()=>{
    let blankinput=document.getElementById('alert')
    blankinput.classList.add('blank')
    blankinput.innerText='input field blank'
    setTimeout(() => {
        blankinput.classList.remove('blank')
        blankinput.innerText=''
    }, 2000);
}
submit=()=>{
    let name=document.getElementById('name');
    let email=document.getElementById('email');
    let tempuser={
        name:name.value,
        email:email.value,
        center: randoms[(Math.floor(Math.random()*randoms.length))],
    }
 
    let emailcount=users.filter((user)=>{
        return user.email==email.value
    })
 if(email.value=='' && name.value){
    // alert('blank')
    blankinput()
 }
 else if(name.value==''){
    // alert('blank')
    blankinput()
 }
   else if(emailcount.length==0 ){
        users.push(tempuser);
        console.log(users)
        success()
        email.value=''
        name.value=''
    }
   
    else{
        fail()
     
          email.value=''
        name.value=''
    }
    renderuser()
    
   
    console.log(users)
}