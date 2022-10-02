const arr=['Binh','Hung','Phuoc','Cao','Khanh'];
function allLongestStrings(inputArray){
    let arrs=[inputArray[0]];
    inputArray.forEach((item,index)=>{
        
      if(item.length > arrs[0].length ){
        arrs=[item];
      }
      else if(item.length === arrs[0].length){
        arrs.push(item);
      }
    });
    console.log(arrs)
}
allLongestStrings(arr);