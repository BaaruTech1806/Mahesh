import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }

  theoryQuestions = [
    {
        "question": "What is the difference between == and === in JavaScript?",
        "answer": `
            - '==' is the equality operator that compares two values for equality, performing type coercion if necessary (e.g., '5' == 5 is true).
            - '===' is the strict equality operator that compares both value and type without type coercion (e.g., '5' === 5 is false).
        `,
        "exampleCode": `
    // Using '=='
    console.log('5' == 5); // true, because type coercion converts '5' to 5

    // Using '==='
    console.log('5' === 5); // false, because '5' (string) is not the same type as 5 (number)
`
    },
    {
        "question": "What are arrow functions, and how do they differ from regular functions?",
        "answer": `
            - Arrow functions are a shorter syntax for writing functions using the '=>' syntax.
            - They do not have their own 'this' context; they inherit 'this' from the enclosing scope, making them useful for callbacks and methods.
            - They cannot be used as constructors and do not have the 'arguments' object.
        `,
        "exampleCode": `
            // Regular function
            function add(a, b) {
                return a + b;
            }
            
            // Arrow function
            const add = (a, b) => a + b;

            // Difference in 'this' context
            function RegularFunction() {
                this.value = 1;
                setTimeout(function() {
                    console.log(this.value); // undefined, 'this' refers to global object
                }, 1000);
            }

            function ArrowFunction() {
                this.value = 1;
                setTimeout(() => {
                    console.log(this.value); // 1, 'this' refers to ArrowFunction context
                }, 1000);
            }
        `
    },
    {
        "question": "What is hoisting in JavaScript?",
        "answer": `
            - Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their containing scope during compilation.
            - Only declarations are hoisted, not initializations. Variables declared with 'var' are hoisted to the top of their scope, while 'let' and 'const' are hoisted but not initialized.
        `,
        "exampleCode": `
            // Example of hoisting with 'var'
            console.log(x); // undefined
            var x = 5;

            // Example with 'let' (hoisted but not initialized)
            console.log(y); // ReferenceError: Cannot access 'y' before initialization
            let y = 10;

            // Function hoisting
            sayHello(); // "Hello, World!"
            function sayHello() {
                console.log("Hello, World!");
            }
        `
    },
    {
        "question": "What is the difference between null and undefined in JavaScript?",
        "answer": `
            - 'undefined' means a variable has been declared but has not yet been assigned a value.
            - 'null' is an assignment value that represents no value or no object; it's explicitly set to represent an empty or non-existent value.
        `,
        "exampleCode": `
            // Example of 'undefined'
            let a;
            console.log(a); // undefined

            // Example of 'null'
            let b = null;
            console.log(b); // null
        `
    },
    {
        "question": "What are promises, and how do they work in JavaScript?",
        "answer": `
            - Promises are objects that represent the eventual completion or failure of an asynchronous operation.
            - A promise can be in one of three states: pending, fulfilled, or rejected.
            - Promises use '.then()' for handling success, '.catch()' for handling errors, and '.finally()' for cleanup actions.
            - They allow chaining of asynchronous operations, making code more readable compared to traditional callbacks.
        `,
        "exampleCode": `
            // Creating a promise
            const myPromise = new Promise((resolve, reject) => {
                let success = true;
                if (success) {
                    resolve("Promise fulfilled!");
                } else {
                    reject("Promise rejected!");
                }
            });

            // Using the promise
            myPromise
                .then(result => console.log(result)) // "Promise fulfilled!"
                .catch(error => console.log(error))
                .finally(() => console.log("Promise completed."));
        `
    },
    {
        "question": "What are the differences between var, let, and const?",
        "answer": `
            - 'var' is function-scoped and can be redeclared. It is hoisted to the top of its scope but is not initialized.
            - 'let' is block-scoped and cannot be redeclared within the same scope. It is also hoisted but not initialized.
            - 'const' is block-scoped like 'let', but it must be initialized at the time of declaration and cannot be reassigned.
        `,
        "exampleCode": `
            // 'var' example
            var x = 1;
            if (true) {
                var x = 2; // same variable
                console.log(x); // 2
            }
            console.log(x); // 2

            // 'let' example
            let y = 1;
            if (true) {
                let y = 2; // different variable
                console.log(y); // 2
            }
            console.log(y); // 1

            // 'const' example
            const z = 1;
            // z = 2; // Error: Assignment to constant variable.
        `
    },
    {
        "question": "Explain the concept of closures in JavaScript.",
        "answer": `
            A closure is a function that retains access to its outer (enclosing) function's variables even after the outer function has finished executing.
            Closures are created every time a function is created in JavaScript, allowing the function to access variables from an outer scope.
        `,
        "exampleCode": `
            function outerFunction() {
                let outerVariable = 'I am outside!';
                
                function innerFunction() {
                    console.log(outerVariable); // innerFunction has access to outerVariable
                }
                
                return innerFunction;
            }
            
            const closure = outerFunction();
            closure(); // "I am outside!"
        `
    },
    {
        "question": "What is the 'this' keyword in JavaScript, and how is it used?",
        "answer": `
            The 'this' keyword refers to the context in which a function is called. In the global context, 'this' refers to the global object.
            In a method, 'this' refers to the object that owns the method. In a constructor, 'this' refers to the new object being created.
            The value of 'this' can be explicitly set using 'call', 'apply', or 'bind'.
        `,
        "exampleCode": `
            const person = {
                name: 'Alice',
                greet: function() {
                    console.log('Hello, ' + this.name);
                }
            };

            person.greet(); // 'Hello, Alice'

            const greet = person.greet;
            greet(); // 'Hello, undefined' (or 'Hello, [global object]')

            // Explicitly setting 'this'
            const anotherPerson = { name: 'Bob' };
            greet.call(anotherPerson); // 'Hello, Bob'
        `
    },
    {
        "question": "How does JavaScript handle asynchronous code?",
        "answer": `
            JavaScript handles asynchronous code using callbacks, promises, and async/await.
            - Callbacks: Functions passed as arguments to other functions that get executed after a certain event.
            - Promises: Objects representing eventual completion or failure of an asynchronous operation, with 'then' and 'catch' methods for handling results.
            - Async/Await: Syntactic sugar over promises, allowing asynchronous code to be written in a synchronous style.
        `,
        "exampleCode": ""
    },
    {
        "question": "What is the event loop, and how does it work in JavaScript?",
        "answer": `
            The event loop is a mechanism in JavaScript that allows it to perform non-blocking asynchronous operations by managing a queue of callback functions.
            It continuously checks the call stack and the message queue. When the call stack is empty, the event loop pushes the next callback from the queue to the call stack.
            This enables JavaScript to handle asynchronous code despite being single-threaded.
        `,
        "exampleCode": ""
    }
];

}
