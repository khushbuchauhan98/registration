let users=[];
renderuser=()=>{
    let right=document.getElementById('rightcontent')
    right.innerHTML=""
    users.map((user)=>{
        let divs= document.createElement('div')
        let divs1= document.createElement('div')
        let p1=document.createElement('p1')
        let p2=document.createElement('p2')
        let checl=document.createElement('input')
        divs.classList.add('students');
        p1.classList.add('block')
        p2.classList.add('block')
        divs1.id='bg'
        p1.innerText=user.name
        p2.innerText=user.email;
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
        divs1.appendChild(p2)
        checl.onclick=function(){
           
    divs1.classList.add('bg')
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
        email:email.value
    }
 
    let emailcount=users.filter((user)=>{
        return user.email==email.value
    })
 if(email.value=='' && name.value){
    alert('blank')
    blankinput()
 }
 else if(name.value==''){
    alert('blank')
    blankinput()
 }
   else if(emailcount.length==0 ){
        users.push(tempuser);
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