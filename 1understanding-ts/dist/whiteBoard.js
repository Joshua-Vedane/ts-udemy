// return the most duplicated number in the array 
function highestRank(arr){
  const counts = {};
  let max = 0, res = 0;
  arr.forEach(element => {
    counts[element] = (counts[element] || 0) +1;
    if(counts[element] > max){
      max = counts[element];
      res = element
    }
  });
  return res;
}

const arr1 = [12, 10, 8, 12, 7, 6, 4, 10, 12];
const test1 = highestRank(arr1);
console.log(test1);