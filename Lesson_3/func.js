

function someFunction(arg) {
  if (typeof arg === "number") {
    alert("I expected a string");
  } else {
    alert(arg);
  }
}

const sum = function (a, b) {
  return a + b;
};

const math = function (a, b, option) {
  return option(a, b);
};


function isEven(num) {
  if (num == 1) {
    console.log("notEven");
    return false;
  } else if (num == 0) {
    console.log("isEven");
    return true;
  } else {
    console.log("test", num);
    return isEven(num - 2);
  }
}

function countChar(str, char) {
  let resultStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      resultStr += str[i];
    }
  }
  return resultStr.length;
}

function range(start, end) {
  result = [];
  for (i = start; i < end + 1; i++) {
    result.push(i);
    // console.log(result);
  }
  return result;
}

function mySum(num) {
  return num.reduce(function (sum, current) {
    return sum + current;
  });
}

function reverseArray(arr) {
  let result = [];
  arr.forEach((elem) => {
    result.unshift(elem);
  });
  return result;
}

function reverseArrayinPlace(arr) {
  return arr.reverse();
}

function arrayToList(arr, i = 0) {
  if (i === arr.length - 1) {
    return {
      value: arr[i],
      rest: null,
    };
  } else {
    return { value: arr[i], rest: arrayToList(arr, ++i) };
  }
}

function listToArray(list, result = []) {
  if (list.rest === null) {
    result.push(list.value);
    return result;
  } else {
    result.push(list.value);
    return listToArray(list.rest, result);
  }
}

function prepend(elem, list) {
  if (elem.value == undefined) {
    return {
      value: elem,
      rest: list,
    };
  } else {
    return {
      value: elem.value,
      rest: list,
    };
  }
}

function nth(num, list, count = 0) {
  // console.log(list.value)
  if (list.value === num) {
    return count;
  } else {
    return nth(num, list.rest, ++count);
  }
}

function deepEqual (a, b) {

  if(typeof a !== 'object' || a === null || typeof b !== 'object' || b === null){
    return (a === b)
  }
  else {
 
    let aKeys = Object.keys(a);
    let bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;
    for (let i = 0; i < aKeys.length; i++) {
      if(aKeys[i] !== bKeys[i]) return false
      return deepEqual(a[aKeys[i]], b[bKeys[i]]);
    }
  }
}








// console.log(nth(78, list))


// console.log(list);
// console.log(list2);
// console.log(objOne2.prototype.toString)


// function deepEqual(dataOne, dataTwo) {
//   if (dataOne === dataTwo) {
//     console.log("one");
//     return true;
//   } else if (
//     (dataOne !== null && dataTwo === null) ||
//     (dataOne === null && dataTwo !== null)
//   ) {
//     console.log("three");
//     return false;
//   } else if (typeof dataOne === typeof dataTwo && typeof dataOne === "object") {
//     console.log("four");
//     let oneKeys = Object.keys(dataOne);
//     let twoKeys = Object.keys(dataTwo);
//     for (let i = 0; i < oneKeys.length; i++) {
//       if (typeof dataOne[oneKeys[i]] === "object") {
//         console.log("five");
//         return deepEqual(dataOne[oneKeys[i]], dataTwo[twoKeys[i]]);
//       }
//       console.log("tut", typeof dataOne[oneKeys[i]] === "object");
//       if (oneKeys[i] !== twoKeys[i]) return false;
//       if (dataOne[oneKeys[i]] !== dataTwo[twoKeys[i]]) return false;
//     }
//   } else {
//     return true;
//   }
// }

// console.log(deepEqual (objOne, objOne))
// console.log(deepEqual (objOne, arrTwo))
// console.log(deepEqual ('objOne', 'arrTwo'))
// console.log(deepEqual ('objOne', 'objOne'))
// console.log(deepEqual(objOne, objOns));
// console.log(deepEqual (objOne2, objOne1))
// console.log(deepEqual(null, objOne1));
// console.log(deepEqual(objOne1, null));
// console.log(deepEqual(null, 1));

// function deepEqual(a, b) {
//   // Проверка на null
//   if (a === null || b === null) {
//     if (a === b) return true;
    
    
    
//     else return false;
//   } else if (a === b) return true;
//   if (!(typeof a === "object" || b === "object") 
//   ) {
//     return a === b;
//   }
//   if (typeof a === "object" || b === "object") {
//     // return deepEqualObj(a, b, deepEqual)
//     // return a.toString === b.toString

//     let aKeys = Object.keys(a);
//   let bKeys = Object.keys(b);
//   console.log(Object.keys(b).length, Object.keys(b).length)
//   if (aKeys.length !== bKeys.length) return false;
//   for (let i = 0; i < aKeys.length; i++) {
//     console.log('test')
//     if (typeof a[aKeys[i]] === 'object' && b[bKeys[i]] === null || a[aKeys[i]] === null && typeof b[bKeys[i]] === 'object') return false;
//     if (
//       typeof a[aKeys[i]] === "object" &&
//       a[aKeys[i]] !== null &&
//       typeof b[bKeys[i]] === "object" &&
//       b[bKeys[i]] !== null
//     ) {
//       console.log('fdgfdg')
//       return deepEqual(a[aKeys[i]], b[bKeys[i]]);
//     } else {
//       if ((
//         typeof a[aKeys[i]] === "object" &&
//         a[aKeys[i]] !== null &&
//         typeof b[bKeys[i]] !== "object" &&
//         b[bKeys[i]] !== null
//       )||
//       (
//         typeof a[aKeys[i]] !== "object" &&
//         a[aKeys[i]] !== null &&
//         typeof b[bKeys[i]] === "object" &&
//         b[bKeys[i]] !== null
//       )) return false
//       if (a[aKeys[i]] !==  b[bKeys[i]]) return false;
//       if (a[aKeys[i]] ===  b[bKeys[i]]) return true; // 
//     }
//   }



//   } else return false;
// }

// function deepEqualObj(a, b, deepEqual) {
//   let aKeys = Object.keys(a);
//   let bKeys = Object.keys(b);
//   // console.log(Object.keys(b).length, Object.keys(b).length)
//   if (aKeys.length !== bKeys.length) return false;
//   for (let i = 0; i < aKeys.length; i++) {
//     if (
//       typeof a[aKeys[i]] === "object" &&
//       a[aKeys[i]] !== null &&
//       typeof b[bKeys[i]] === "object" &&
//       b[bKeys[i]] !== null
//     ) {
//       console.log('fdgfdg')
//       return deepEqual(a[aKeys[i]], b[bKeys[i]]);
//     } else {
//       if ((
//         typeof a[aKeys[i]] === "object" &&
//         a[aKeys[i]] !== null &&
//         typeof b[bKeys[i]] !== "object" &&
//         b[bKeys[i]] !== null
//       )||
//       (
//         typeof a[aKeys[i]] !== "object" &&
//         a[aKeys[i]] !== null &&
//         typeof b[bKeys[i]] === "object" &&
//         b[bKeys[i]] !== null
//       )) return false
//       if (a[aKeys[i]] !==  b[bKeys[i]]) return false;
      
//       if (a[aKeys[i]] ===  b[bKeys[i]]) return true;
//     }
//   }
// }

// let one = { 'null': 'null', 'null': { 'null': 'null' } ,  'null': 'null', 'null': { 'null': 'null' } , 'dfdf':'dsd'}
// let two = { 'null': 'null', 'null': { 'null': 'null' } ,  'null': 'null', 'null': { 'null': 'null' } };


// console.log("1", deepEqual(one, two));
// console.log("2", deepEqualObj(objOne, objOns));
// console.log("3", deepEqual('objOne', 'objOns'));
// console.log("4", deepEqual(2, 2));

// console.log("6", deepEqual(2, 3));
// console.log("7", deepEqual(list, list));
// console.log("8", deepEqual(list, list2));
// console.log("9", deepEqual(objOne, objOns));
// console.log("10", deepEqual(one, two));
// console.log("11", deepEqual(objOne, objOns));
// console.log("12", deepEqual(objOne, objOne2));
// console.log("13", deepEqual(objOne, objOns));




// let list = arrayToList(arr);
// let list2 = arrayToList(arrTwo);

// console.log('should be false', deepEqual('fdfd', 'fsfdf'))

// console.log('should be true', deepEqual('fdfd', 'fdfd')) 

// console.log('should be false', deepEqual(5, 4))

// console.log('should be true',  deepEqual(5, 5))

// console.log('should be false', deepEqual({}, 'fsfdf'))

// console.log('should be false', deepEqual('fsfdf', []))

// console.log('should be false', deepEqual(4, []))

// console.log('should be false',  deepEqual({}, 4))
// console.log('should be false', deepEqual({'dfdf':'fdfsdf', 'fdfdf':'fsdfs'}, [1,2,3]))
// console.log('should be true', deepEqual(one, one)) 

// let objOne = { 'wewe': "dfdf", 'fdsfdsf': { 'wewe': "dfdf", 'fdsfdsf': "dfdfs" } };
// let objOns = { 'wewe': "dfdf", 'fdsfdsf': { 'wewe': "dfdf", 'fdsfdsf': "dfdfs" } }; 
// console.log(`{ 'wewe': "dfdf", 'fdsfdsf': { 'wewe': "dfdf", 'fdsfdsf': "dfdfs" } }` === `{ 'wewe': "dfdf", 'fdsfdsf': { 'wewe': "dfdf", 'fdsfdsf': "dfdfs" } }`)
// let objOne2 = { 'dwewe': "dfdf", 'fdsfdsf': "dfdfsr" };

// console.log('should be true', deepEqual(objOne, objOns)) //problem
// console.log('should be false', deepEqual(objOne, objOne2))// problem (should be false)

// arr = range(1, 201);
// arr2 = range(1, 200);

// console.log('should be false', deepEqual([1, 3, 4, 5, 6], [1, 3, 4, 5, 6, 8]))// (should be false)
// console.log(listToArray(arrayToList(arr)))

// null.
// undefined.
// boolean.
// string.
// number.
// object.
// symbol (добавлен в ES6)
