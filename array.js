// 3. looping over an array
// print all fruits  , "🍌", "🍒"
//a. for
const fruits = ["🍎", "🥝"];
for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
	console.log(fruit);
}

//c. forEach
fruits.forEach((fruit, index) => console.log(fruit, index));

//4. Addition, deletion, copy
/* 배열 끝에 push와 pop으로 인자를 추가하거나 뺄 수 있다
  unshift와 shift로 아이템을 맨 첫번째에 추가하거나 뺄 수 있다.
  splice로 중간에 인자를 지우거나 추가할 수 있다.
  concat으로 새로운 item배열을 기존 배열에 추가할 수 있다.
*/
fruits.push("🍌", "🍒");

//pop : remove an item from the end
fruits.pop();

//unshift : add an item to the begining
fruits.unshift("🍓", "🍋");

//shift : remove an item from the begining
fruits.shift();
fruits.shift(); //2개 빼기

/* note! 
shift, unshift are slower than pop, push
배열의 길이가 길면 길수록, 전체적으로 움직여야 되는 것들이 많이 있기 때문에 더 느리다.
왜냐하면 unshift, shift를 쓰면 뒤에나 앞에 있는 데이터들을 다 앞으로 옮기든 뒤로 옮기든 해야하기 때문이다.
*/

// splice : remove an item by index position
fruits.push("🍓", "🍑", "🍋");
fruits.splice(1, 1);
fruits.splice(1, 1, "🍏", "🍉");

//combine tow arrays
const fruit2 = ["🍐", "🥥"];
const newFruits = fruits.concat(fruit2);

//5. searching
/* indexOf를 사용해서 인자가 몇 번째에 위치해 있는지 검색이 가능하다. 배열 안에 없다면 -1이 출력된다. includes를 사용해서 boolean기능을 사용할 수 있다. lastIndexOf를 사용해서 배열안에 같은 값이 있을 경우, 맨 마지막에 나온 값을 출력할 수 있다. */

// indexOf : finc the index
console.clear();
console.log(fruits.indexOf("🍎"));

// includes
console.log(fruits.includes("🍉"));

//lastIndexOf
console.log(fruits.lastIndexOf("🍎"));
