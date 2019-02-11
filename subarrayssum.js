function difference(array,number){
  let sum=0,i,side1=0,side2=0;

  for(i=0;i<array.length;i++){
    sum+=array[i];
  }

  side2=(sum-number)/2;

  for(i=0;i<array.length;i++){
    side1+=array[i];
    if(Math.abs(side1-side2)==number || side1==side2){
      return 'Yes'
    }
  }
  return 'No'
}

let array=[3,1,2,10];
let number=4;
difference(array,number);
