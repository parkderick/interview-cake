// You are a renowned thief who has recently switched from stealing precious metals to stealing cakes because of the insane profit margins. You end up hitting the jackpot, breaking into the world's largest privately owned stock of cakes—the vault of the Queen of England.

// While Queen Elizabeth has a limited number of types of cake, she has an unlimited supply of each type.

// Each type of cake has a weight and a value, stored in an object with two properties:

// weight: the weight of the cake in kilograms
// value: the monetary value of the cake in British shillings
// For example:

//   // Weighs 7 kilograms and has a value of 160 shillings
// { weight: 7, value: 160 }

// // Weighs 3 kilograms and has a value of 90 shillings
// { weight: 3, value: 90 }

// You brought a duffel bag that can hold limited weight, and you want to make off with the most valuable haul possible.

// Write a function maxDuffelBagValue() that takes an array of cake type objects and a weight capacity, and returns the maximum monetary value the duffel bag can hold.

// For example:

  const cakeTypes = [
  { weight: 7, value: 160 },
  { weight: 3, value: 90 },
  { weight: 2, value: 15 },
];

const capacity = 20;

// Time: O(cakeTypes * capacity);
// Space: O(capacity);

function maxDuffelBagValue(cakeTypes, capacity) {
  var capacities = [];
  for (var i = 0; i <= capacity; i++) {
    var currentMaxValue = 0;
    for (var j = 0; j < cakeTypes.length; j++) {
      var cakeType = cakeTypes[j];
      if (cakeType.weight <= i) {
        if (capacities[i - cakeType.weight] === undefined) { 
          capacities[i - cakeType.weight] = 0;
        }
        var maxCapacity = cakeType.value + capacities[i - cakeType.weight];
        currentMaxValue = Math.max(maxCapacity, currentMaxValue);
      }
    }
    capacities[i] = currentMaxValue;
  }
  return capacities[capacity]
}

console.log(maxDuffelBagValue(cakeTypes, capacity))