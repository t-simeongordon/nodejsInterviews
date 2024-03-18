    const array = [5, 1, 22, 25, 6, -1, 8, 10];
    const sequence = [0, 6, -1, 10];

function isValidSubsequence(array, sequence) {
    // Write your code here.
    // Initialize pointers for the array and sequence
    let arrIdx = 0;
    let seqIdx = 0;
  
    // Iterate through the array
    while (arrIdx < array.length) {
      // If elements match, increment both pointers
  //    console.log(array[arrIdx])
      //console.log(sequence[seqIdx])
      if (array[arrIdx] === sequence[seqIdx]) {
        seqIdx++; // Move to the next element in the sequence
      }
  
      // If we've found all elements in the sequence, return true
      if (seqIdx === sequence.length) {
        return true;
      }
  
      // Move to the next element in the array, regardless of match
      arrIdx++;
    }
  
    // If we reach the end of the array without finding all elements in the sequence, return false
    return false;
  }

  const res = isValidSubsequence(array, sequence)
  console.log("res")
  console.log(res)