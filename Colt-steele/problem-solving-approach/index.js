// Problem solving approach
// Algorithm -> A process or set of steps to accomplish a certain task


// How do you improve / approach to problem solving
// 1) Devise a plan for solving problems
// 2) Master common problem solving patters

// Problem solving strategies
// 1) Understand the problem
// 2) Explore concrete examples
// 3) break it down
// 4) Solve/ simplify
// 5) Look back and refactor

// Understand the problem -> 1
// 1) Can i restate the problem in my own words?
// 2) What are the inputs that go into the problem?
// 3) what are the outputs 

// Concrete examples / explore examples-> 2
// start with simple examples
// Progress to more complex examples
// Explore examples with empty inputs
// Explore examples with invalid inputs

// Break it down -> 3
// explicitly write out the steps you need to take

// count character
// function charCount(str) {
//   // make object to return at end
//   var result = {};
//   // loop over string, for each  character...
//   for (var i = 0; i < str.length; i++) {
//     var char = str[i].toLowerCase();
//     // if character is something else (space, period, etc .) don't do anything
//     if (/[a-z0-9]/.test(char)) {
//       // if the char is a number/letter AND is a key in object, add one to count
//       if (result[char] > 0) result[char]++;
//       // if the char is a number/letter AND is not in object, add it to object and set value to 1
//       else result[char] = 1;
//     }

//   }

//   // return object at end  
//   return result;
// }

function charCount(str) {
  // make object to return at end
  let obj = {};
  // loop over string, for each  character...
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }

  }

  // return object at end  
  return obj;
}

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (!(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)) return false;

  return true;
}

console.log(charCount("Hello Hi!!"));
// simplify
// 1) find the core difficulty in what you're trying to do
// 2) Temporarily ignore that difficulty
// 3) Write a simplified solution
// 4) Then incorporate that difficulty back in

// Loop back and refactor