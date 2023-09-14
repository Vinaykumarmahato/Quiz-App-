const quizData = [
        {
          question: "What is the difference between '==' and '.equals()' in Java?",
          a: "'==' compares the reference of two objects, while '.equals()' compares the content of two objects.",
          b: "'==' compares the content of two objects, while '.equals()' compares the reference of two objects.",
          c: "'==' is used to compare primitive data types, while '.equals()' is used to compare objects.",
          d: "'==' is used to compare objects, while '.equals()' is used to compare primitive data types.",
          correct: "a",
        },
        {
          question: "What is method overloading in Java?",
          a: "It refers to defining multiple methods in the same class with the same name but different parameters.",
          b: "It refers to overriding methods of a parent class in a subclass.",
          c: "It is a way to prevent multiple threads from accessing a method simultaneously.",
          d: "It is a technique to convert objects into primitive data types.",
          correct: "a",
        },
        {
          question: "What is the purpose of the 'this' keyword in Java?",
          a: "It is used to call a method of the current class.",
          b: "It is used to create a new instance of a class.",
          c: "It refers to the current object in a method or constructor.",
          d: "It is used to reference the parent class in a subclass.",
          correct: "c",
        },
        {
          question: "What is a static method in Java?",
          a: "A method that is marked as 'static' can only be accessed by instances of the class.",
          b: "A method that is marked as 'static' is not associated with any instance of the class and can be called using the class name.",
          c: "A method that is marked as 'static' can only be accessed within the same package.",
          d: "A method that is marked as 'static' is used to create new instances of a class.",
          correct: "b",
        },
        {
          question: "What is the difference between 'String' and 'StringBuilder' in Java?",
          a: "'String' is mutable, while 'StringBuilder' is immutable.",
          b: "'String' is a built-in data type, while 'StringBuilder' is a class in the 'java.lang' package.",
          c: "'String' is more memory-efficient than 'StringBuilder'.",
          d: "'String' is immutable, while 'StringBuilder' is mutable and can be used for efficient string manipulations.",
          correct: "d",
        },
        {
          question: "What are access modifiers in Java?",
          a: "They are keywords that determine the accessibility of classes, methods, and variables in Java.",
          b: "They are keywords that determine the type of data that can be stored in variables in Java.",
          c: "They are keywords that determine the type of operations that can be performed on variables in Java.",
          d: "They are keywords that determine the type of data that can be passed as arguments to methods in Java.",
          correct: "a",
        },
        {
          question:
            "What are some differences between an abstract class and an interface?",
          a:
            "An abstract class can have constructors, while an interface cannot have constructors.",
          b:
            "An abstract class can have instance variables, while an interface cannot have instance variables.",
          c:
            "An abstract class can have concrete methods, while an interface cannot have concrete methods.",
          d:
            "An abstract class can implement another abstract class or interface, while an interface cannot implement another interface or abstract class.",
          correct: "c",
        },
        {
          question:
            "What are some differences between checked and unchecked exceptions?",
          a:
            "Checked exceptions must be caught or declared by calling methods, while unchecked exceptions do not need to be caught or declared by calling methods.",
          b:
            "Checked exceptions are thrown at runtime, while unchecked exceptions are thrown at compile-time.",
          c:
            "Checked exceptions are subclasses of RuntimeException, while unchecked exceptions are subclasses of Exception.",
          d:
            "Checked exceptions are subclasses of Exception, while unchecked exceptions are subclasses of RuntimeException or Error.",
          correct: "a",

          
        },
      
      {
        question: "What is method overloading in Java?",
        a: "It refers to defining multiple methods in the same class with the same name but different parameters.",
        b: "It refers to overriding methods of a parent class in a subclass.",
        c: "It is a way to prevent multiple threads from accessing a method simultaneously.",
        d: "It is a technique to convert objects into primitive data types.",
        correct: "a",
      },
      {
        question: "What is the purpose of the 'this' keyword in Java?",
        a: "It is used to call a method of the current class.",
        b: "It is used to create a new instance of a class.",
        c: "It refers to the current object in a method or constructor.",
        d: "It is used to reference the parent class in a subclass.",
        correct: "c",
      },
      {
        question: "What is a static method in Java?",
        a: "A method that is marked as 'static' can only be accessed by instances of the class.",
        b: "A method that is marked as 'static' is not associated with any instance of the class and can be called using the class name.",
        c: "A method that is marked as 'static' can only be accessed within the same package.",
        d: "A method that is marked as 'static' is used to create new instances of a class.",
        correct: "b",
      },
      {
        question: "What is the difference between 'String' and 'StringBuilder' in Java?",
        a: "'String' is mutable, while 'StringBuilder' is immutable.",
        b: "'String' is a built-in data type, while 'StringBuilder' is a class in the 'java.lang' package.",
        c: "'String' is more memory-efficient than 'StringBuilder'.",
        d: "'String' is immutable, while 'StringBuilder' is mutable and can be used for efficient string manipulations.",
        correct: "d",
      },
      {
        question:
          "What are access modifiers in Java?",
        a:
          "They are keywords that determine the accessibility of classes, methods, and variables in Java.",
        b:
          "They are keywords that determine the type of data that can be stored in variables in Java.",
        c:
          "They are keywords that determine the type of operations that can be performed on variables in Java.",
        d:
          "They are keywords that determine the type of data that can be passed as arguments to methods in Java.",
        correct: "a",
      },
      {
        question:
          "What are some differences between an abstract class and an interface?",
        a:
          "An abstract class can have constructors, while an interface cannot have constructors.",
        b:
          "An abstract class can have instance variables, while an interface cannot have instance variables.",
        c:
          "An abstract class can have concrete methods, while an interface cannot have concrete methods.",
        d:
          "An abstract class can implement another abstract class or interface, while an interface cannot implement another interface or abstract class.",
        correct: "c",
      },
      {
        question:
          "What are some differences between checked and unchecked exceptions?",
        a:
          "Checked exceptions must be caught or declared by calling methods, while unchecked exceptions do not need to be caught or declared by calling methods.",
        b:
          "Checked exceptions are thrown at runtime, while unchecked exceptions are thrown at compile-time.",
        c:
          "Checked exceptions are subclasses of RuntimeException, while unchecked exceptions are subclasses of Exception.",
        d:
          "Checked exceptions are subclasses of Exception, while unchecked exceptions are subclasses of RuntimeException or Error.",
        correct: "a",
      },
    
         
  ];
  
  const quiz = document.getElementById("quiz");
  const answerElements = document.querySelectorAll(".answer");
  const questionElement = document.getElementById("question");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const submitButton = document.getElementById("submit");
  
  let currentQuiz = 0;
  let score = 0;
  
  const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
  };
  
  const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
      if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
  };
  
  const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  };
  
  loadQuiz();
  
  submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
      if (answer === quizData[currentQuiz].correct) score++;
      currentQuiz++;
      if (currentQuiz < quizData.length) loadQuiz();
      else {
        quiz.innerHTML = `
              <h2>You answered ${score}/${quizData.length} questions correctly</h2>
              <button onclick="history.go(0)">Play Again</button>
          `;
      }
    }
  });