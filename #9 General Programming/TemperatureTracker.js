// You decide to test if your oddly-mathematical heating company is fulfilling its All-Time Max, Min, Mean and Mode Temperature Guarantee™.

// Write a class TempTracker with these methods:

// insert()—records a new temperature
// getMax()—returns the highest temp we've seen so far
// getMin()—returns the lowest temp we've seen so far
// getMean()—returns the mean ↴ of all temps we've seen so far
// getMode()—returns a mode ↴ of all temps we've seen so far
// Optimize for space and time. Favor speeding up the getter methods getMax(), getMin(), getMean(), and getMode() over speeding up the insert() method.

// Temperatures will all be inserted as integers. We'll record our temperatures in Fahrenheit, so we can assume they'll all be in the range 0..1100..110.

// If there is more than one mode, return any of the modes.

// Time: all O(1) except getMode O(n)
// Space: O(n)

class TempTracker {
  constructor() {
    this.temperatures = {};
    this.max = -Infinity;
    this.min = Infinity;
    this.mean = 0;
  }
  insert(temperature) {
    var sum = this.mean * Object.keys(this.temperatures).length;
    if (this.temperatures[temperature]) {
      this.temperatures += 1;
    } else {
      this.temperatures = 0;
    }
    if (this.mean) {
      this.mean = (sum + temperature) / Object.keys(this.temperatures).length;
    } else {
      this.mean = temperature;
    }

    if (temperature > this.max) {
      this.max = temperature;
    }
    if (temperature < this.min) {
      this.min = temperature;
    }
  }
  getMax() {
    return this.max;
  }
  getMin() {
    return this.min;
  }
  getMean() {
    return this.mean;
  }
  getMode() {
    var temp = null;
    var max = -Infinity
    for (var key in this.temperatures) {
      if (this.temperatures[key] > max) {
        temp = key;
        max = this.temperatures[key];
      }
    }
    return temp;
  }
}

// Time: O(1)
// Space: O(1)

class TempTracker {
  constructor() {
    this.temperatures = new Array(111).fill(0);
    this.mode = 0;
    this.modemax = 0;

    this.sum = 0;
    this.mean = 0;
    this.length = 0;

    this.max = -Infinity;
    this.min = Infinity;
    this.mean = 0;
  }
  insert(temperature) {
    this.length += 1;
    this.sum += temperature;
    this.mean = this.sum / this.length;
    this.temperatures[temperature] += 1;
    if (this.temperatures[temperature] >= this.modemax) {
      this.modemax = this.temperatures[temperature];
      this.mode = temperature;
    }
    if (temperature >= this.max) {
      this.max = temperature;
    }
    if (temperature <= this.min) {
      this.min = temperature;
    }
  }
  getMax() {
    return this.max;
  }
  getMin() {
    return this.min;
  }
  getMean() {
    return this.mean;
  }
  getMode() {
    return this.mode;
  }
}