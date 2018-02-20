import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyCCqKAq_d4B0XQRmJoUqUwD8UjtJwOFOpk",
      authDomain: "jialin-todo-app.firebaseapp.com",
      databaseURL: "https://jialin-todo-app.firebaseio.com",
      projectId: "jialin-todo-app",
      storageBucket: "jialin-todo-app.appspot.com",
      messagingSenderId: "382459944014"
    };
    firebase.initializeApp(config);
} catch (e) {

}

  export var firebaseRef = firebase.database().ref();
  export default firebase;
