const btnRandom=document.querySelector('.btn-random');
const hexInfo=document.getElementById('hex-info');
const body=document.body;
const copy=document.querySelector('.copy');
const colorRange=document.getElementById('color-range')
const clipboard= new ClipboardJS(copy);
let colors=['a','b','c','d','f','0','1','2','3','4','5','6','7','8','9'];
function Random(a){
     
     return parseInt(colors.length * Math.random())
}
function RandomColor(){
     let hex='#';
for(let i=1;i<=6;i++ ){
 hex +=colors[Random(colors)];
}
hexInfo.innerHTML=hex;
body.style.background=hex;
colorRange.value=hex;

     
}
clipboard.on('success',()=>{
     window.alert('Copied');
});
clipboard.on('error',()=>{
     window.alert('error');
})
colorRange.addEventListener('change',()=>{
     hexInfo.innerHTML=`${colorRange.value}`;
     body.style.background=`${colorRange.value}`;
})
btnRandom.addEventListener('click',RandomColor);
