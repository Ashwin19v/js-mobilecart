
    const mob=document.getElementById("mob");
const lap=document.getElementById("lap");
const app=document.getElementById("app");
const acc=document.getElementById("acc");
const mobiles=document.getElementById("mobiles");
const laptops=document.getElementById("laptops");
const access=document.getElementById("access");
const apps=document.getElementById("apps");
mobiles.addEventListener("click",function(){
   if( mob.style.display="none"){
        lap.style.display="none"
        app.style.display="none";
        acc.style.display="none";
        mob.style.display="flex";
        

   }
})
laptops.addEventListener("click",function(){
    if( lap.style.display="none"){
        mob.style.display="none";
        app.style.display="none";
        acc.style.display="none";
         lap.style.display="flex";
         

    }
 })
 apps.addEventListener("click",function(){
  
    if( app.style.display="none"){
        mob.style.display="none"
         lap.style.display="none";
         acc.style.display="none";
         app.style.display="flex";

    }
 })

 access.addEventListener("click",function(){
    
    if( acc.style.display="none"){
        mob.style.display="none"
         lap.style.display="none";
         app.style.display="none";
         acc.style.display="flex";

    }
 })
 
 const pop=document.getElementById("pop");
 const popcancel=document.getElementById("popupcancel");
 const popblack=document.getElementById("popupblack");
 const cart=document.getElementById("showcart").addEventListener("click",()=>{
    if(pop.style.display="none")
        popblack.style.display="block";
        pop.style.display="block";
 });


 const add=document.querySelectorAll("#addtocart");

 add.forEach((element) => {
    element.addEventListener("click", () => {
        element.textContent="added";
        element.disabled=true;
        let content = element.parentNode;
        console.log(content);
        const title = content.querySelector('#title').textContent;
        const image = content.querySelector("#img").src;
        const rating = content.querySelector("#rating").textContent;
        const rate = content.querySelector("#rate").textContent;
        console.log(title, rate, rating, image);
        pop.innerHTML+=`    
        <div class="cartitem"> <img src=${image}>
              <p>${title}</p><br>
              <span>${rating}</span> <span>${rate}</span>
              <button id="removeitem">X</button>
        </div>`;
       
        const cartclose=document.getElementById("popupcancel").addEventListener("click",()=>{
            if(pop.style.display="block")
                pop.style.display="none";
            popblack.style.display="none";
            
         });

         const remove=document.querySelectorAll("#removeitem");
         remove.forEach((element)=>{
            element.addEventListener("click",(event)=>{
                event.target.parentElement.remove();
         })


    });
    
});


const cartclose=document.getElementById("popupcancel").addEventListener("click",()=>{
    if(pop.style.display="block")
        pop.style.display="none";
    popblack.style.display="none";
    
 });



 });