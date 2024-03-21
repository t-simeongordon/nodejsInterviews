import { isValidSubsequence  } from "../src/forloop"

describe('check validation for forloop', ()=>{
    beforeEach(()=>{

    })
    test('validate sub sequence', ()=>{
        //given
        const array = [1, 2, 3, 4 ,5 ,6]
        const subSequence = [2,5]
        //when
        const res = isValidSubsequence(array, subSequence)

        //then
        expext(res).toBe(true)
    })
})