let addbutton=document.querySelector(".Add")
let ullist=document.querySelector("#ullist")
let string=document.querySelector("#firstinput")
let errorText=document.querySelector(".error")









addbutton.addEventListener("click",()=>{
    if(string.value!=""){
        
        errorText.textContent="";
        let element =document.createElement("li")
        element.setAttribute("class","li-class")
        ullist.appendChild(element)
        
        let spanele=document.createElement("span")
        spanele.setAttribute("class","span-text")
        element.appendChild(spanele)
        
        let list=document.createElement("i") 
        list.setAttribute("class","fa-solid fa-trash")
        element.appendChild(list)
    
      
    
         spanele.textContent =string.value
         list.addEventListener("click",()=>{
         ullist.removeChild(element) 
    
         
    
         }) 
         string.value = "";
  

       
        
    }else{

        errorText.textContent="Please give an input "
        
  
    }
    
    
})
    
