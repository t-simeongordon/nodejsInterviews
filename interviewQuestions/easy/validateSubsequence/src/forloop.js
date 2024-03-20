const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10];

function isValidSubsequence(array, sequence) {
    let seqIdx = 0 
    for(let i=0; i<array.length; i++){  
      if(array[i]===sequence[seqIdx]){
        seqIdx++
      }
  
      if(seqIdx===sequence.length){
        return true
      }
    }
  
    return false
  }

  // const res = isValidSubsequence(array, sequence)
  // console.log("isValidSubsequence")
  // console.log(res)

  export default isValidSubsequence