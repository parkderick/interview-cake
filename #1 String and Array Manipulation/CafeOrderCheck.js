// My cake shop is so popular, I'm adding some tables and hiring wait staff so folks can have a cute sit-down cake-eating experience.
// I have two registers: one for take-out orders, and the other for the other folks eating inside the cafe. All the customer orders get combined into one list for the kitchen, where they should be handled first-come, first-served.
// Recently, some customers have been complaining that people who placed orders after them are getting their food first. Yikes—that's not good for business!
// To investigate their claims, one afternoon I sat behind the registers with my laptop and recorded:
// The take-out orders as they were entered into the system and given to the kitchen. (takeOutOrders)
// The dine-in orders as they were entered into the system and given to the kitchen. (dineInOrders)
// Each customer order (from either register) as it was finished by the kitchen. (servedOrders)
// Given all three arrays, write a function to check that my service is first-come, first-served. All food should come out in the same order customers requested it.
// We'll represent each customer order as a unique integer.

// Time: O(n);
// Space: O(1);

function cafeOrderCheck(takeOut, dineIn, served) {
  var takeOutIndex = 0;
  var dineInIndex = 0; 
  for (var i = 0; i < served.length; i++) {
    if (served[i] === takeOut[takeOutIndex]) {
      takeOutIndex++
    } else if (served[i] === dineIn[dineInIndex]) {
      dineInIndex++
    } else {
      return false;
    }
  }
  return true;
}

// var takeOutTest = [1, 3, 5];
// var dineInTest = [2, 4, 6];
// var servedTest = [1, 2, 4, 6, 5, 3];

var takeOutTest = [1, 3, 5];
var dineInTest = [2, 4, 6];
var servedTest = [1, 2, 3, 5, 4, 6]; 

console.log(cafeOrderCheck(takeOutTest, dineInTest, servedTest))