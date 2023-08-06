import{todayDeal} from "./todaydeal.js"


const sidebarnavigationEl=document.getElementById("sidebar-show")
const sidebaropennavigationEl=document.getElementById("open nav sidebar")
const sidebarclosenavigationEl=document.getElementById("sidebar-navigation-close")
sidebaropennavigationEl.addEventListener("click",()=>{
    sidebarnavigationEl.classList.toggle("sidebar-show")
})

sidebarclosenavigationEl.addEventListener("click",()=>{
    sidebarnavigationEl.classList.toggle("sidebar-show")
})

console.log(todayDeal)
let todayDealProductEl=document.querySelector(".today_deal_list")
console.log(todayDealProductEl)

let todayDealProductHTML =""

let todayDeallength=todayDeal.length
for(let i=0;i<todayDeallength;i++){
   // console.log(todayDeal[i])

    todayDealProductHTML+= `
    <div class="today_deal_item">
        <div class="todayDeals_product_image">
     <img src=${todayDeal[i].img} />
     </div>

     <div class="discount_container">
       <a href="#">Up to ${todayDeal[i].discount} </a>
       <a href="#">${todayDeal[i].Deal}</a>
     </div>
     <p>${todayDeal[i].desc}</p>
     </div>
    `
}
 todayDealProductEl.innerHTML=todayDealProductHTML
 console.log(todayDealProductHTML)

 let today_deal_btn_prevEl= document.getElementById("today_deal_btn_prev")
 let today_deal_btn_nextEl=document.getElementById("today_deal_btn_next")
 let today_deal_itemEl=document.querySelectorAll(".today_deal_item")

 let startProduct=0;


 today_deal_btn_prevEl.addEventListener("click",()=>{
    
    
    if (startProduct <0){
        startProduct+=500
    }
    if (startProduct > -1500){
     today_deal_itemEl.forEach(el=>{
        el.style.transform=`translateX(${startProduct}%)`
    })   
    }
    
 })

 today_deal_btn_nextEl.addEventListener("click",()=>{
    
    if (startProduct > -1500){
        startProduct-=500
    }
    
    today_deal_itemEl.forEach(el=>{
        el.style.transform=`translateX(${startProduct}%)`
    })
   
 })