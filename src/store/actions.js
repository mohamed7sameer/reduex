// ACTION -- 1

const increment = (num=1) =>{
    return {
      type: 'INC',
      payload: num
    }
  }
  
  const decrement = (num=1) =>{
    return {
      type: 'DEC',
      payload: num
    }
  }
  
export {increment,decrement} ; 