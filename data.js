const allQuestionsAndAnswers = [
    {
        question: "What is JavaScript?",
        answer: "JavaScript is a dynamic type programming langauge which we can use to build front-end and back-end web application"
    },
    {
        question: "What is the use of isNaN function?",
        answer: "isNan is a function which return true/false base on the argument that we passed to it. if the argument is not a number then it returns true otherwise return false"
    },
    {
        question: "Explain imutability and mutability with details",
        answer: "Immutable object is an object which we cannot modify the state of it after it is created. mutable object is otherway around we can change the state evern after we create the object. In javascript mutability is bad, because it can leads to errors in code and give hrad time to track it down. So, in order to get this done we can use higher order functions like map,reduce,filter,etc to create new copy of those data/objects. But this can cost us time and space. But we can use persistent data structures for efficient immutability. (there are some libraries already implemented using persistent data structures. ex: immutable.js)"
    },
    {
        question: "How and where we can add css and js in html file",
        answer: "We can add/link css to a html file using <link href='style.css'> (if it is a external css file) in head section and also we can write inline css as well. Javascript we can write/link in head section as well as in end of the body section. Best place is in end of the body section because html also load/parse line by line from top to bottom. So, if the javascript is in head section it will take some time to load the JS, user may has to wait little bit to see the UI, other thing is html is not fully loaded when the JS code is executing. So can give errors"
    }   
]
  
