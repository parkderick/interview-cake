// A crack team of love scientists from OkEros (a hot new dating site) have devised a way to represent dating profiles as rectangles on a two-dimensional plane.

// They need help writing an algorithm to find the intersection of two users' love rectangles. They suspect finding that intersection is the key to a matching algorithm so powerful it will cause an immediate acquisition by Google or Facebook or Obama or something.

// Two rectangles overlapping a little. It must be love.
// Write a function to find the rectangular intersection of two given love rectangles.

// As with the example above, love rectangles are always "straight" and never "diagonal." More rigorously: each side is parallel with either the x-axis or the y-axis.

// They are defined as objects ↴ like this:

// Your output rectangle should use this format as well.

// Time: O(1)
// Space: O(1)

function rectangularLove(rect1, rect2) {
  var result = {
    leftX: null,
    bottomY: null,
    width: null,
    height: null
  }

  if (rect1.leftX + rect1.width >= rect2.leftX && rect1.bottomY + rect1.height >= rect2.bottomY) {
    result.leftX = rect2.leftX;
    result.bottomY = rect2.bottomY;
    result.width = rect1.width + rect1.leftX - rect2.leftX
    result.height = rect1.height + rect1.bottomY - rect2.bottomY;
  } 
  return result;
}

const myRectangle1 = {
  leftX: 1,
  bottomY: 1,
  width: 6,
  height: 3
};

const myRectangle2 = {
  leftX: 5,
  bottomY: 2,
  width: 3,
  height: 6
};

console.log(rectangularLove(myRectangle1, myRectangle2));