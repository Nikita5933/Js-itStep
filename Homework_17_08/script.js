'use strict';

// 1  Without. Напишите функцию, возвращает новый массив без
//   предоставленных значений. Используйте примитивные типы.

const without = (array, ...args) => {
   return array.filter(item => !args.includes(item))
}

const data = [1, 2, 3, 1, 2];
// console.log(without(data, 1)); 

// 2 Unique. Напишите функцию, которая убирает повторяющиеся
//   значения.


const unique = (array) => {
   return array.filter((item, index) => {
      if (index === array.lastIndexOf(array[index])) {
         return item;
      }
   })
}

const data1 = [1,1,1,1,1,11,1,1,11,1, 22,2,2,2,2,22,2,2,2, 1, 2, 3,3,3,3,3];
// console.log(unique(data1)); 

// 3 IsEqual. Напишите функцию, которая сравнивает два массива и
//   возвращает true, если они идентичны.

const isEqual = (firstArray, secondArray) => {
   let flag = true;
   
   if (firstArray.length !== secondArray.length) {
      return false;
   }

   for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
         flag = false;
      }
   }
   return flag;
}
const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 2, 3, 5];
const arr4 = [1, 2, 3, 4, 5];
// console.log(isEqual(arr1, arr2)); 
// console.log(isEqual(arr2, arr3)); 
// console.log(isEqual(arr1, arr4)); 


// 4 Chunk. Напишите функцию, которая разделяет массив на части
//   заданного размера.

const chunk = (array, size) => {
   let arr = [];
   if (size <= 0 || !size) {
      return array;
   }
   while (array.length) {
      arr.push(array.splice(0, size));
   }
   return arr;
}
const data2 = [1, 2, 3, 4, 5, 6, 7];
// console.log(chunk(data2,2));


// 5 Intersection. Напишите функцию, которая создаст массив из
//   уникальных значений, которые есть в каждом из предоставленных
//   массивов. Используйте примитивные типы данных.

const intersection = (...arrays) => {
   const newArr = arrays.reduce((acc, item) => acc.filter(elem => item.includes(elem)));
   return newArr.filter((item, index) => { // Unique fn
      if (index === newArr.lastIndexOf(newArr[index])) {
         return item;
      }
   });
}
const arr5 = [1, 2];
const arr6 = [2, 3];
const arr7 = ['a', 'b'];
const arr8 = ['b', 'c'];
const arr9 = ['b', 'e', 'c'];
const arr10 = ['b', 'b', 'e'];
const ar11 = ['b', 'c', 'e'];
const arr12 = ['b', 'e', 'c'];
// console.log(intersection(arr5, arr6)) // [2]
// console.log(intersection(arr7, arr8, arr9)) // ['b']
console.log(intersection(arr10, ar11, arr12,arr10, ar11, arr12,arr10, ar11, arr12,arr10, ar11)) // ['b', 'e']