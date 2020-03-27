// Your company built an in-house calendar tool called HiCal. You want to add a feature to see the times in a day when everyone is available.

// To do this, you’ll need to know when any team is having a meeting. In HiCal, a meeting is stored as objects with integer properties startTime and endTime. These integers represent the number of 30-minute blocks past 9:00am.

// Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges.

// For example, given:
// [
//   { startTime: 0,  endTime: 1 },
//   { startTime: 3,  endTime: 5 },
//   { startTime: 4,  endTime: 8 },
//   { startTime: 10, endTime: 12 },
//   { startTime: 9,  endTime: 10 },
// ]

// your function would return:

// [
//   { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 8 },
//   { startTime: 9, endTime: 12 },
// ]

// Time: O(n^2);
// Space: O(1);

function mergeRanges(schedule) {
  schedule.sort((a, b) => (a.startTime > b.startTime) ? 1 : -1);
  var endTime = schedule[0].endTime;
  for (var i  = 1; i < schedule.length; i++) {
    if (schedule[i].startTime <= endTime) {
      schedule[i-1].endTime = Math.max(endTime, schedule[i].endTime)
      schedule.splice(i, 1);
      i--;
    }
    endTime = schedule[i].endTime;
  }
  return schedule;
}

// Time: O(n lg n);
// Space: O(n);

function mergeRanges(schedule) {
  var mergedSchedule = [];
  schedule.sort((a, b) => (a.startTime > b.startTime) ? 1 : -1);
  var currentMeeting = schedule[0];
  for (var i  = 1; i < schedule.length; i++) {
    if (schedule[i].startTime <= currentMeeting.endTime) {
      currentMeeting.endTime = Math.max(currentMeeting.endTime, schedule[i].endTime);
      if (i === schedule.length - 1) {
        mergedSchedule.push(currentMeeting);
      }
    } else {
      mergedSchedule.push(currentMeeting);
      currentMeeting = schedule[i];
    }
  }
  return mergedSchedule;
}

var test = 
[
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
];

// var test = [{ startTime: 1, endTime: 2 }, { startTime: 2, endTime: 3 }]

// var test = [{ startTime: 1, endTime: 5 }, { startTime: 2, endTime: 3 }]

// var test = 
// [
//   { startTime: 1, endTime: 10 },
//   { startTime: 2, endTime: 6 },
//   { startTime: 3, endTime: 5 },
//   { startTime: 7, endTime: 9 },
// ]

console.log(mergeRanges(test))