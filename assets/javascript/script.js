const config = {
  apiKey: "AIzaSyCBZ9CFHuQEbzYzOVKmnu4WNIa6sItykqg",
  authDomain: "first-firebase-project-b83f1.firebaseapp.com",
  databaseURL: "https://first-firebase-project-b83f1.firebaseio.com",
  projectId: "first-firebase-project-b83f1",
  storageBucket: "first-firebase-project-b83f1.appspot.com",
  messagingSenderId: "700854584942"
};

function Train(name, destination, startTime, frequency){
  this.name = name;
  this.destination = destination;
  this.startTime = startTime;
  this.frequency = frequency;
}

firebase.initializeApp(config);

const database = firebase.database();
const jqname = $("#name");
const jqdestination = $("#destination");
const jqtime = $("#time");
const jqfrequency =  $("#frequency");

function addTrainToFirebase(n, d, t, f) {
  let mytrain = new Train(n, d, t, f);
  database.ref().push(mytrain);
  return mytrain;
}

$("#submit").on("click", function () {
  event.preventDefault();
  let name = jqname.val().trim();
  let destination = jqdestination.val().trim();
  let time = jqtime.val().trim();
  let frequency = jqfrequency.val().trim();
  addTrainToFirebase(name, destination, time, parseInt(frequency));
  jqname.val("");
  jqdestination.val("");
  jqtime.val("");
  jqfrequency.val("");

  $("#results > tbody").append(addRow());
});

const userInput = {
  name: $("#name").val().trim(),
  destination: $("#destination").val().trim(),
  time: $("#time").val().trim(),
  frequency: $("#frequency").val().trim()  
};

database.ref().on("child_added", function(snapshot) {
  console.log(snapshot.val());
  $("#results").append(addRow(snapshot.val()));
}, function(err) {
  // Handle errors
  console.log("Error: ", err.code);
});

var currentTime = "";
var firstTime = "";
var firstTimeConverted = "";
var diffTime = "";
var nextTrain = "";
var minutesAway = "";
var nextArrival = "";
var nextArrivalFormat = "";

firstTimeConverted = moment(firstTime, "kk:mm").subtract(1, "years");
currentTime = moment();
diffTime = moment().diff(moment(firstTimeConverted), "minutes");
timeRemaining = diffTime % frequency;
minutesAway = frequency - timeRemaining;
nextArrival = moment().add(minutesAway, "minutes");
nextArrivalFormat = moment(nextTrain).format("kk:mm:");

function addRow(obj) {
  let newRow = $("<tr>");
    newRow.append(`<td>${obj.name}</td>`);
    newRow.append(`<td>${obj.destination}</td>`);
    newRow.append(`<td>${obj.frequency}</td>`);
    newRow.append(`<td>${nextArrival}</td>`);
    newRow.append(`<td>${timeRemaining}</td>`);
  return newRow;
}

  