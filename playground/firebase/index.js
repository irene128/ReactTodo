import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCCqKAq_d4B0XQRmJoUqUwD8UjtJwOFOpk",
    authDomain: "jialin-todo-app.firebaseapp.com",
    databaseURL: "https://jialin-todo-app.firebaseio.com",
    projectId: "jialin-todo-app",
    storageBucket: "jialin-todo-app.appspot.com",
    messagingSenderId: "382459944014"
  };
  firebase.initializeApp(config);

  var firebaseRef =   firebase.database().ref();
  firebaseRef.set({
    app:{
      name: 'Todo APP',
      version: '2.0.0'
    },
    appName: 'Todo App',
    isRunning: true,
    user:{
      name:'jialin',
      age: 25
    }
  }).then(()=>{
    console.log('set worked!');
  }, (e)=>{
    console.log('set failed');
  })

    firebaseRef.child('app').set({
      name: 'TODO APP'
    });
