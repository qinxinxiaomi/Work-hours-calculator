let count = 0
let total = 0
let countEl=document.getElementById("count-el")
let countText=document.getElementById("count-text")
let countTotal = document.getElementById("count-total")
function increment(){
    count+=1
    countEl.textContent = count
}
function save(){   
    let text = count + " "
    countText.textContent += text
    total += count
    countTotal.textContent = "Total work hours today: " + total
    count=0
    countEl.textContent=count
}
function newday(){
    count=0
    countText.textContent = "Work entry: " 
    countTotal.textContent = "Total work hours today: "  + 0
    total = 0
}
