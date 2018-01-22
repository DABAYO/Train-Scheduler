var config = {
    apiKey: "AIzaSyCBZ9CFHuQEbzYzOVKmnu4WNIa6sItykqg",
    authDomain: "first-firebase-project-b83f1.firebaseapp.com",
    databaseURL: "https://first-firebase-project-b83f1.firebaseio.com",
    projectId: "first-firebase-project-b83f1",
    storageBucket: "first-firebase-project-b83f1.appspot.com",
    messagingSenderId: "700854584942"
  };
  firebase.initializeApp(config);

  // variables
var database = firebase.database().ref();

function addRow(obj) {
  let newRow = $("<div>").addClass("row");
    newRow.append(newCol(name));
    newRow.append(newCol(destination));
    newRow.append(newCol(time));
    newRow.append(newCol(frequency));
    newRow.append(newCol(minutesAway));
  return newRow;
}

  