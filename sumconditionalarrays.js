function difference(array, number) {
  let sum1 = 0, sum2 = 0, i, side1 = 0, side2 = 0,sum=0;

  for(i=0;i<array.length;i++){
    sum+=array[i];
  }

  side2 = (sum ) / 2;

  for (i = 0; i < array.length; i++) {
    if (array[i] % 3 == 0) {
      sum1 += array[i];
    } else if (array[i] % 5 == 0){
      sum2 += array[i];
    } else {
      if (sum1 + array[i] > side2) {
        if (sum2 + array[i] > side2) {
          return 'No'
        } else {
          sum2 += array[i];
        }
      } else {
        sum1 += array[i];
      }
    }
  }
  if(sum1==sum2){
    return 'Yes'
  }else{
    return 'No'
  }
}

let array = [3,10,3,3,1];
difference(array);
