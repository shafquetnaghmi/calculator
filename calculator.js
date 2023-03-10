let output=document.getElementById('output')
let buttons=document.querySelectorAll('button');
let buttontext=''
for (item of buttons){
    item.addEventListener('click',(e)=>{
        text=e.target.innerText
        if (text=='X'){
           text='*'
           buttontext +=text;
           output.innerHTML=buttontext
        }
        else if (text=='÷'){
            text='/'
            buttontext +=text;
            output.innerHTML=buttontext
         }
         else if (text=='^'){
            text='**'
            buttontext +=text;
            output.innerHTML=buttontext
         }
        else if (text=='='){
            output.innerHTML=eval(buttontext)

        }
        else if (text=='Ac'){
            buttontext=''
            output.innerHTML=buttontext

        }
        else if (text=='Delete'){
            buttontext=buttontext.slice(0,-1)
            output.innerHTML=buttontext
        }
        else{
            buttontext +=text
            output.innerHTML=buttontext
        }
        
    })
 
}