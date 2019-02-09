function difference(array,number){
  let sum=0,i,side1=0,side2=0;
  let numside1=[]

  for(i=0;i<array.length;i++){
    sum+=array[i];
  }

  side2=(sum-number)/2;
  console.log('Side 2 - '+side2)

  for(i=0;i<array.length;i++){
    side1+=array[i];
    numside1.push(array[i]);
    if(side1==side2){
      console.log('Side 1 - '+side1);
      console.log(numside1);
      return 'Yes'
    }
  }
  return 'No'
}

let array=[1,3,4];
let number=0;
difference(array,number);
