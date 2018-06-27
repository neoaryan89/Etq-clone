const textChange=document.getElementById("changing-text");
const texts=textChange.dataset.messages.split(",");
texts.map((txt,i)=>{
    setInterval(()=>{
        textChange.innerHTML=txt
    },2000*(i+1));
})
var slider = tns({
    container: '.my-slider',
    items:1,
    slideBy: 'page',
    autoplay:false
  });
  var slider = tns({
    container: '#logo-images',
    items:1,
    slideBy: 'page',
    autoplay:true,
    controls:false,
    autoplayButtonOutput:false
  });
  