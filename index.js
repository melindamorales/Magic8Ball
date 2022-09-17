
// declare your variable (answer) and turn the answers for the 8 ball into a string array

const answers = [
    "totallyyy",
    "yassssss",
    "i guess so",
    "suuuuuure",
    "omg definitely",
    "you can bet on it",
    "i say YESSS",
    "positiveeeee",
    "nahhhh",
    "nope.",
    "yikes",
    "totally not happening",
    "NO STOP ASKING",
    "lol no",
    "tired, ask later",
    "hush not now",
    "use your bwain and ask again",
    "yikes better not tell you now"
];

// we have the button element in the html set to (on-click="ask()")function so we declare ask as a const in our js file to refer to it and turn it into a arrow function


// const randomNumber is using the Math.floor and .random methods to times the length of the answers array. it gives us a random answer in our answers array.


// const answer will display the random answers by targeting the answers class in the document


// answer using the .innerText method and setting it equal to randomAnswer const will make the answer div (which is targeting the "8" and "answer" id elements) to display a random message from the answers array


// then we( get/refer) from our element in our html by first writing document then adding (.getElementById) which will be the id "8" element and after we use the (.innerText) method to display something in this case we set it equal to a empty string "" so that the 8 is hidden and a randomAnswer is displayed in the 8 ball.



const ask= () => {
    const randomNumber = Math.floor(Math.random() * answers.length);
    const randomAnswer = answers[randomNumber];
    const answer = document.getElementById('answer');

    console.log(answer);
    console.log(randomNumber);


    answer.innerText = randomAnswer;

    document.getElementById('eight').innerText ='';
   
};


