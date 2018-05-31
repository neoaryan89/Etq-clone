const textChange=document.getElementById("changing-text");
const texts=textChange.dataset.messages.split(",");
texts.map((txt,i)=>{
    setInterval(()=>{
        textChange.innerHTML=txt
    },2000*(i+1));
})