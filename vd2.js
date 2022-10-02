let tong=[60,40,55,75,64];
function alternatingSums(a){
let sum=[];
let chan=0;
let le =0
 a.forEach((item,index)=>{
    
    if(index % 2==0){
        chan+=item;
    }
    else{
        le+=item;
    }
    sum=[chan,le];
 });
 console.log(sum)
}
alternatingSums(tong);