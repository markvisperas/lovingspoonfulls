//ARRAY FOR SLEEP RESULTS
const sleepResults = [
        {
            name: "Midnight Snacker",
            description: "Forget cuddling. You'd rather munch the night away",
            image: "images/01_chips.png",
            value: 1
        },

        {
            name: "Western Showdown",
            description: "Theres ain't enough room for the both of us",
            image: "images/02_cowboy.png",
            value: 2
        },

        {
            name: "The E.T.",
            description: "So close, yet so far",
            image: "images/03_et.png",
            value: 3
        },

        {
            name: "Fish Hook",
            description: "hook, line, and sinker",
            image: "images/04_fishhook.png",
            value: 4
        },

        {
            name: "'The Homies'",
            description: "back to back partners in crime",
            image: "images/05_hommies.png",
            value: 5
        },

        {
            name: "The Classic Spoon",
            description: "Good ole classic fit",
            image: "images/06_classic.png",
            value: 6
        },  

        {
            name: "'The Cradle'",
            description: "proximity equals heart",
            image: "images/07_cradle.png",
            value: 7
        },

        {
            name: "Swiss Army Eagles",
            description: "Limbs everywhere but you don't care",
            image: "images/08_swissarmy.png",
            value: 8
        },

        {
            name: "Gemini Angels",
            description: "cuddle match made in the heavens",
            image: "images/09_gemini.png",
            value: 9
        },

        {
            name: "Croissant",
            description: "you and your partner obviously love to cuddle",
            image: "images/10_croissant.png",
            value: 10
        }
    ];

//GENERAL LAYOUT OF QUIZ 
//user starts quiz by inputing one of 2 answers on the 10 questions provided.
//user submits answers with form submit
//Answer 1 and 2 for the 10 questions provided are given the values hot and cold respectively.
//cold = 0
//hot = +1
//each answer is logged and saved witn input.val()
//the submit will accumulate how much hot points a user gets out of 10 (same as the number of questions).
//Depending on how much hot points a user gets, that number will correspond to a particular sleep position. 
//0 hot point = position1, 1 hot point = position2, 2 hot points = position 3, and so forth.
//Then there will be an image and description of the sleep position displayed in the results section.
//with a button to restart the quiz

//main object where the quiz functionality with live inside
const spoon = {};

//global variable to count 'HOT' points collected from .form submit
spoon.counter = 0;

//user selects and answers for quiz and submits
spoon.events = function() {
    
    //.click event scrolls user from start button to following questions, and from questions to submit
    $(".start").click(function () {
        $('html, body').animate({
            scrollTop: $("#quest1").offset().top
        }, 500);
    });
    $(".qOne__btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#quest2").offset().top
        }, 500);
    });
    $(".qTwo__btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#quest3").offset().top
        }, 500);
    });
    $(".qThree__btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#quest4").offset().top
        }, 500);
    });
    $(".qFour__btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#quest5").offset().top
        }, 500);
    });
    $(".qFive__btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#quest6").offset().top
        }, 500);
    });
    $(".qSix__btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#quest7").offset().top
        }, 500);
    });
    $(".qSeven__btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#quest8").offset().top
        }, 500);
    });
    $(".qEight__btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#quest9").offset().top
        }, 500);
    });
    $(".qNine__btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#quest10").offset().top
        }, 500);
    });
    $(".submit").click(function () {
        $('html, body').animate({
            scrollTop: $("#resultsPosition").offset().top
        }, 500);
    });
   
    //listening for form submission
    //will get user's selected answers
    $('form').on('submit', function(e){
        //prevents website from refreshing after form submission
        e.preventDefault();
        const answer1 = $('input[name=q1]:checked').val();
        const answer2 = $('input[name=q2]:checked').val();
        const answer3 = $('input[name=q3]:checked').val();
        const answer4 = $('input[name=q4]:checked').val();
        const answer5 = $('input[name=q5]:checked').val();
        const answer6 = $('input[name=q6]:checked').val();
        const answer7 = $('input[name=q7]:checked').val();
        const answer8 = $('input[name=q8]:checked').val();
        const answer9 = $('input[name=q9]:checked').val();
        const answer10 = $('input[name=q10]:checked').val();
        
        //attributes value of 1 point for every time user chooses an answer with a value of hot.
        if (answer1 === 'hot') {
            spoon.counter = spoon.counter + 1;   
        }
        if (answer2 === 'hot') {
            spoon.counter = spoon.counter + 1;
        }
        if (answer3 === 'hot') {
            spoon.counter = spoon.counter + 1;
        }
        if (answer4 === 'hot') {
            spoon.counter = spoon.counter + 1;
        }
        if (answer5 === 'hot') {
            spoon.counter = spoon.counter + 1;
        }
        if (answer6 === 'hot') {
            spoon.counter = spoon.counter + 1;
        }
        if (answer7 === 'hot') {
            spoon.counter = spoon.counter + 1;
        }
        if (answer8 === 'hot') {
            spoon.counter = spoon.counter + 1;
        }
        if (answer9 === 'hot') {
            spoon.counter = spoon.counter + 1;
        }
        if (answer10 === 'hot') {
            spoon.counter = spoon.counter + 1;
        }
        //function to display results collected
        spoon.displayResults(); 
        //function prevents submit event from repeating results   
        $('input[type=submit]').attr('disabled', 'disabled');
    });
}

//function matches spoon.counter value to values found in sleepResults array and appends corresponding content and image to DOM.
spoon.displayResults = function() {

        if (spoon.counter <= 1 && sleepResults[0].value === 1) {
            $('.results').append(`<h4>you got ${sleepResults[0].name}</h4>`);
            $('.results').append(`<h2>${sleepResults[0].description}</h2>`);
            $('.resultsImage').append(`<img src="${sleepResults[0].image}" alt="">`)
        }

        else if (spoon.counter === 2 && sleepResults[1].value === 2) {
            $('.results').append(`<h4>you got ${sleepResults[1].name}</h4>`);
            $('.results').append(`<h2>${sleepResults[1].description}</h2>`);
            $('.resultsImage').append(`<img src="${sleepResults[1].image}" alt="">`)
        }

        else if (spoon.counter === 3 && sleepResults[2].value === 3) {
            $('.results').append(`<h4>you got ${sleepResults[2].name}</h4>`);
            $('.results').append(`<h2>${sleepResults[2].description}</h2>`);
            $('.resultsImage').append(`<img src="${sleepResults[2].image}" alt="">`)
        }

        else if (spoon.counter === 4 && sleepResults[3].value === 4) {
            $('.results').append(`<h4>you got ${sleepResults[3].name}</h4>`);
            $('.results').append(`<h2>${sleepResults[3].description}</h2>`);
            $('.resultsImage').append(`<img src="${sleepResults[3].image}" alt="">`)

        }
        else if (spoon.counter === 5 && sleepResults[4].value === 5) {
            $('.results').append(`<h4>you got ${sleepResults[4].name}</h4>`);
            $('.results').append(`<h2>${sleepResults[4].description}</h2>`);
            $('.resultsImage').append(`<img src="${sleepResults[4].image}" alt="">`)
        }

        else if (spoon.counter === 6 && sleepResults[5].value === 6) {
            $('.results').append(`<h4>you got ${sleepResults[5].name}</h4>`);
            $('.results').append(`<h2>${sleepResults[5].description}</h2>`);
            $('.resultsImage').append(`<img src="${sleepResults[5].image}" alt="">`)
        }

        else if (spoon.counter === 7 && sleepResults[6].value === 7) {
            $('.results').append(`<h4>you got ${sleepResults[6].name}</h4>`);
            $('.results').append(`<h2>${sleepResults[6].description}</h2>`);
            $('.resultsImage').append(`<img src="${sleepResults[6].image}" alt="">`)
        }

        else if (spoon.counter === 8 && sleepResults[7].value === 8) {
            $('.results').append(`<h4>you got ${sleepResults[7].name}</h4>`);
            $('.results').append(`<h2>${sleepResults[7].description}</h2>`);
            $('.resultsImage').append(`<img src="${sleepResults[7].image}" alt="">`)
        }

        else if (spoon.counter === 9 && sleepResults[8].value === 9) {
            $('.results').append(`<h4>you got ${sleepResults[8].name}</h4>`);
            $('.results').append(`<h2>${sleepResults[8].description}</h2>`);
            $('.resultsImage').append(`<img src="${sleepResults[8].image}" alt="">`)
        }

        else if(spoon.counter === 10 && sleepResults[9].value === 10) {
            $('.results').append(`<h4>you got ${sleepResults[9].name}</h4>`);
            $('.results').append(`<h2>${sleepResults[9].description}</h2>`);
            $('.resultsImage').append(`<img src="${sleepResults[9].image}" alt="">`)
        }
}

//will initialize both spoon.events and spoon.displayResults off on page load
spoon.init = function() {
    spoon.events();
}

//document ready
$(function() {
    spoon.init();
    //allows user to restart quiz with .on event with .reset button.
    $(`.reset`).on(`click`,function(e){
        $("input:radio").each(function (i) {
            this.checked = false;
        });
        //scrolls to the top when quiz is reset
        location.reload(false);
        $(document).ready(function(){
            $(this).scrollTop(0);
        });
    });
});