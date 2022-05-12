/*

Your goal in this kata is to implement a difference function, 
  which subtracts one list from another and returns the result.

It should remove all values from list a, 
  which are present in list b keeping their order.

  arrayDiff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:
  arrayDiff([1,2,2,2,3],[2]) == [1,3]

*/

function arrayDiff(array1, array2) {
  if(array1.length === 0){return []}
  if(array2.length === 0){return array1}

  let returnArray = [];
  array1.forEach(function included(element){
    if(!array2.includes(element)){
      returnArray.push(element)
    }
  })

  return returnArray;
}