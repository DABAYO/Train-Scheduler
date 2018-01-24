var config = {
    apiKey: "AIzaSyCBZ9CFHuQEbzYzOVKmnu4WNIa6sItykqg",
    authDomain: "first-firebase-project-b83f1.firebaseapp.com",
    databaseURL: "https://first-firebase-project-b83f1.firebaseio.com",
    projectId: "first-firebase-project-b83f1",
    storageBucket: "first-firebase-project-b83f1.appspot.com",
    messagingSenderId: "700854584942"
  };
firebase.initializeApp(config);

// Constructor Function for a train
function Train(name, destination, creationTime, frequency) {
  this.name = name;
  this.destination = destination;
  this.creationTime = creationTime;
  this.frequency = frequency;
}

firebase.initializeApp(config);

const database = firebase.database();
const jqname = $("#name");
const jqdestination = $("#destination");
const jqtime = $("#time");
const jqfrequency = $("#frequency");

// function addRow(obj) {
//   let newRow = $("<div>").addClass("row");
//     newRow.append(newCol(name));
//     newRow.append(newCol(destination));
//     newRow.append(newCol(time));
//     newRow.append(newCol(frequency));
//     newRow.append(newCol(minutesAway));
//   return newRow;
// }
// $('#results').append(
//   '<tr><td><input name="name"/></td><td><input name="destination"/></td><td><input name="input1" class="last"/></td></tr>'); 