const { initializeApp } = require("firebase/app");
const { getFirestore, collection, addDoc } = require("firebase/firestore");
const firebaseConfig = {
  apiKey: "AIzaSyAPTJNlY-hCX0uGfUZzAXfn4m05DOGOm1w",
  authDomain: "wissenaire-401008.firebaseapp.com",
  projectId: "wissenaire-401008",
  storageBucket: "wissenaire-401008.appspot.com",
  messagingSenderId: "160027367801",
  appId: "1:160027367801:web:77635d4f23adcb091937a8",
  measurementId: "G-TEB52183BC",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const colref = collection(db, "mfm");
const form = document.getElementById("myForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const elements = form.elements;
  console.log(elements);
  const formData = {};
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    if (element.name) {
      formData[element.name] = element.value;
    }
  }
  addDoc(colref, formData)
    .then(() => {
      alert("added");
    })
    .catch((e) => {
      alert("failed");
      console.log(e);
    });
});
