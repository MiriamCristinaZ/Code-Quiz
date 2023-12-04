const questions = [
  //HTML related questions
  {
    question: "What does HTML stand for?",
    choices: [
      "HyperText Markup Language",
      "High-Level Text Language",
      "Home Tool Markup Language",
      "Hyper Transfer Markup Language",
    ],
    correctIndex: 0,
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    choices: ["<link>", "<href>", "<a>", "<hyperlink>"],
    correctIndex: 2,
  },
  {
    question: "What is the purpose of the HTML <head> element?",
    choices: [
      "To define the main content of the document",
      "To contain metadata about the document",
      "To create a header for the document",
      "To define a navigation bar",
    ],
    correctIndex: 1,
  },
  {
    question: "Which HTML tag is used to define an unordered list?",
    choices: ["<ul>", "<ol>", "<li>", "<list>"],
    correctIndex: 0,
  },
  {
    question:
      "In HTML, which attribute is used to provide additional information about an element?",
    choices: ["class", "style", "id", "src"],
    correctIndex: 2,
  },
  {
    question: "What is the correct HTML element for the largest heading?",
    choices: ["<h1>", "<h2>", "<h3>", "<header>"],
    correctIndex: 0,
  },
  {
    question: "Which HTML tag is used to define a table row?",
    choices: ["<td>", "<th>", "<tr>", "<table-row>"],
    correctIndex: 2,
  },
  {
    question: "In HTML, which tag is used to define a form?",
    choices: ["<form>", "<input>", "<button>", "<submit>"],
    correctIndex: 0,
  },
  //CSS related questions
  {
    question: "What does CSS stand for?",
    choices: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which CSS property is used to control the spacing between elements?",
    choices: ["margin", "padding", "border", "spacing"],
    correctIndex: 0,
  },
  {
    question: "In CSS, how can you select an element with id 'example'?",
    choices: ["#example", ".example", "element(example)", "id('example')"],
    correctIndex: 0,
  },

  // JavaScript-related questions
  {
    question:
      "What is the correct way to declare a variable whose value should not be reassigned in Javascript?",
    choices: [
      "let variableName;",
      "variable variableName;",
      "var variableName;",
      "const variableName;",
    ],
    correctIndex: 3,
  },
  {
    question: "How do you write a comment in JavaScript?",
    choices: [
      "<!-- This is a comment -->",
      "// This is a comment",
      "/* This is a comment */",
      "# This is a comment",
    ],
    correctIndex: 1,
  },
  {
    question:
      "What is the purpose of the 'addEventListener' method in JavaScript?",
    choices: [
      "To remove an event listener",
      "To add a new HTML element",
      "To handle user input events",
      "To create a loop",
    ],
    correctIndex: 2,
  },
  {
    question: "What is the result of the expression: 5 + '5' in JavaScript?",
    choices: ["10", "55", "Error", "NaN"],
  },
  {
    question: "How do you write an IF statement in JavaScript?",
    choices: ["if x = 5 then", "if (x === 5)", "if x = 5", "if x == 5"],
    correctIndex: 1,
  },
  {
    question:
      "Which method is used to remove the last element from an array in JavaScript?",
    choices: ["pop()", "removeLast()", "deleteLast()", "slice(-1)"],
    correctIndex: 0,
  },
  {
    question:
      "What is the purpose of the 'querySelector' method in JavaScript?",
    choices: [
      "To select HTML elements by class name",
      "To select HTML elements by tag name",
      "To select HTML elements by ID",
      "To select HTML elements by attribute",
    ],
    correctIndex: 2,
  },
  {
    question: "Which of the following is a JavaScript data type?",
    choices: ["Boolean", "String", "Number", "All of the above"],
    correctIndex: 3,
  },
  {
    question: "How do you declare a function in JavaScript?",
    choices: [
      "function: myFunction()",
      "myFunction(): function",
      "function myFunction()",
      "declare function myFunction()",
    ],
    correctIndex: 2,
  },
  {
    question: "What does the 'this' keyword refer to in JavaScript?",
    choices: [
      "The current function",
      "The window object",
      "The object that owns the current function",
      "A reserved keyword",
    ],
    correctIndex: 2,
  },
];
