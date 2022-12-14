const allQuestionsAndAnswers = [
    {
        question: "1. What is JavaScript?",
        answer: "JavaScript is a dynamic type programming langauge which we can use to build front-end and back-end web application"
    },
    {
        question: "2. What is the use of isNaN function?",
        answer: "isNan is a function which return true/false base on the argument that we passed to it. if the argument is not a number then it returns true otherwise return false"
    },
    {
        question: "3. Explain imutability and mutability with details",
        answer: "Immutable object is an object which we cannot modify the state of it after it is created. <br/> mutable object is otherway around we can change the state evern after we create the object. In javascript mutability is bad, because it can leads to errors in code and give hrad time to track it down. So, in order to get this done we can use higher order functions like map,reduce,filter,etc to create new copy of those data/objects. But this can cost us time and space. But we can use persistent data structures for efficient immutability. (there are some libraries already implemented using persistent data structures. ex: immutable.js)"
    },
    {
        question: "4. How and where we can add css and js in html file",
        answer: "We can add/link css to a html file using <link href='style.css'> (if it is a external css file) in head section and also we can write inline css as well. Javascript we can write/link in head section as well as in end of the body section. Best place is in end of the body section because html also load/parse line by line from top to bottom. So, if the javascript is in head section it will take some time to load the JS, user may has to wait little bit to see the UI, other thing is html is not fully loaded when the JS code is executing. So can give errors"
    },
    {
        question: "5. What is the difference between double equal and triple equal in JS",
        answer: "Double equal: compares the values, Tripple equal: compares the values and the value type as well(data type)"
    },
    {
        question: "6. What is pure function in javascript",
        answer: "Pure function is function which take inputs and out puts some data but out put is only depend on the inputs, no side effects"
    },
    {
        question: "7. What is Higher order function in javascript",
        answer: "Function that takes a function as an argument or/and output a function"
    },
    {
        question: "8. What is the usage of a higher order function",
        answer: "We can have number of functions which take care of only one logic, then combine all those function to have a complex logic. as a example we can use JS map function (which is a higher order function) to write complex logic with clean and readable code"
    },
    {
        question: "9. What is npm and npx",
        answer: "NPM is a package manager which we use to install/uninstall/update javascript packages in our machine, <br/> NPX is a package executer which can use to execute packages direct without installing in them"
    },
    {
        question: "10. What is the difference between forEach and map in JavaScript and Which one is faster?",
        answer: "ForEach and Map both iterate through the list but map will create a copy of the iterating element(will work with it) and last it will return a new array but forEach is not, it will loop through the array and mostly work with side effect. So, ForEach is faster than the Map"
    },
    {
        question: "11. What is the usage of having 'default' in export module?",
        answer: "When we import modules we have the freedom to use any name for the module."
    },
    {
        question: "12. What is module design pattern in JavaScript and what it resolv?",
        answer: "Module pattern is a way to split very large files/codes into small re usable pieces, then can import it any where and use. Introduce in ES2015"
    },
    {
        question: "13. What is cookies, local, session storage",
        answer: "Cookies: Cookies can store in the machine and send it in every server request and can only hold around 4kb of data. we need to setup the expired date for it. it is availble in any window of the browser<br/>" +
                "Locat Storage: Never expired until we delete it manually or by code, can store around 10mb and available in any window of the browser, not send in server request</br>" +
                "Session storage: Availble on only selected browser tab, can store around 5mb and vanishing the data soon after the tab close <br/><br/>" +
                "<img src='./images/browser_storages.png'>"
    },
    {
        question: "14. Does JavaScript support automatic type conversion?",
        answer: "Yes, JavaScript is dynamic type language. value types are checking when the code is runing(runtime)"
    }
]
  
