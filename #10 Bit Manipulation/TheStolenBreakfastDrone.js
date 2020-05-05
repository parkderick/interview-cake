// Your company delivers breakfast via autonomous quadcopter drones. And something mysterious has happened.

// Each breakfast delivery is assigned a unique ID, a positive integer. When one of the company's 100 drones takes off with a delivery, the delivery's ID is added to an array, deliveryIdConfirmations. When the drone comes back and lands, the ID is again added to the same array.

// After breakfast this morning there were only 99 drones on the tarmac. One of the drones never made it back from a delivery. We suspect a secret agent from Amazon placed an order and stole one of our patented drones. To track them down, we need to find their delivery ID.

// Given the array of IDs, which contains many duplicate integers and one unique integer, find the unique integer.

Time: O(n)
Space: O(n)

function stolenBreakfastDrone(ids) {
  var storage = {};
  for (var i = 0; i < ids.length; i++) {
    if (storage[ids]) {
      delete storage[ids];
    } else {
      storage[ids] = ids;
    }
  }
  return Object.keys(storage[ids])[0]
}