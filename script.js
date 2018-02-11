const sleepResults = [
        {
            name: "Midnight Snacker",
            description: "You would rather munch the night away",
            image: "images/placeholder.png",
            value: 1
        },

        {
            name: "Western Showdown",
            description: "Theres ain't enough room for the both of us",
            image: "images/placeholder.png",
            value: 2
        },

        {
            name: "The E.T.",
            description: "So close, yet so far",
            image: "images/placeholder.png",
            value: 3
        },

        {
            name: "Fish Hook",
            description: "hook, line, and sinker",
            image: "images/placeholder.png",
            value: 4
        },

        {
            name: "The Hommies",
            description: "back to back partners in crime",
            image: "images/placeholder.png",
            value: 5
        },

        {
            name: "The Classic Spoon",
            description: "Good ole classic fit",
            image: "images/classic_spoon.png",
            value: 6
        },  

        {
            name: "A Spork",
            description: "Poking through goes a long way",
            image: "images/spork.png",
            value: 7
        },

        {
            name: "Swiss Army Eagles",
            description: "Limbs everywhere but you don't care",
            image: "images/swissarmyeagles.png",
            value: 8
        },

        {
            name: "Gemini Hedgehogs",
            description: "cuddle match made in the heavens",
            image: "images/gemini.png",
            value: 9
        },

        {
            name: "Braided Croissant",
            description: "you and your partner obviously love to cuddle",
            image: "images/braidedcroissant.png",
            value: 10
        }
    ];

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

spoon.counter = 0;

//user selects and answers for quiz and submits
spoon.events = function() {
    //listening for form submission
    //will get user's selected answers
    $('form').click('submit', function(e){
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

        spoon.displayResults();    
        $('input[type=submit]').attr('disabled', 'disabled');
    });
}


spoon.displayResults = function() {

        if (spoon.counter <= 1 && sleepResults[0].value === 1) {
            $('.results').append(`<h1>you got ${sleepResults[0].name}</h1>`);
            $('.results').append(`<h2>${sleepResults[0].description}</h2>`);
            $('.resultsImage').append(`<img src="${sleepResults[0].image}" alt="">`)
        }

        else if (spoon.counter === 2 && sleepResults[1].value === 2) {
            $('.results').append(`<h1>you got ${sleepResults[1].name}</h1>`);
            $('.results').append(`<h2>${sleepResults[1].description}</h2>`);
            $('.resultsImage').append(`<img src="${sleepResults[0].image}" alt="">`)
        }

        else if (spoon.counter === 3 && sleepResults[2].value === 3) {
            $('.results').append(`<h1>you got ${sleepResults[2].name}</h1>`);
            $('.results').append(`<h2>${sleepResults[2].description}</h2>`);
            $('.resultsImage').append(`<img src="${sleepResults[0].image}" alt="">`)
        }

        else if (spoon.counter === 4 && sleepResults[3].value === 4) {
            $('.results').append(`<h1>you got ${sleepResults[3].name}</h1>`);
            $('.results').append(`<h2>${sleepResults[3].description}</h2>`);
            $('.resultsImage').append(`<img src="${sleepResults[0].image}" alt="">`)

        }
        else if (spoon.counter === 5 && sleepResults[4].value === 5) {
            $('.results').append(`<h1>you got ${sleepResults[4].name}</h1>`);
            $('.results').append(`<h2>${sleepResults[4].description}</h2>`);
            $('.resultsImage').append(`<img src="${sleepResults[4].image}" alt="">`)
        }

        else if (spoon.counter === 6 && sleepResults[5].value === 6) {
            $('.results').append(`<h1>you got ${sleepResults[5].name}</h1>`);
            $('.results').append(`<h2>${sleepResults[5].description}</h2>`);
            $('.resultsImage').append(`<img src="${sleepResults[5].image}" alt="">`)
        }

        else if (spoon.counter === 7 && sleepResults[6].value === 7) {
            $('.results').append(`<h1>you got ${sleepResults[6].name}</h1>`);
            $('.results').append(`<h2>${sleepResults[6].description}</h2>`);
            $('.resultsImage').append(`<img src="${sleepResults[6].image}" alt="">`)
        }

        else if (spoon.counter === 8 && sleepResults[7].value === 8) {
            $('.results').append(`<h1>you got ${sleepResults[7].name}</h1>`);
            $('.results').append(`<h2>${sleepResults[7].description}</h2>`);
            $('.resultsImage').append(`<img src="${sleepResults[7].image}" alt="">`)
        }

        else if (spoon.counter === 9 && sleepResults[8].value === 9) {
            $('.results').append(`<h1>you got ${sleepResults[8].name}</h1>`);
            $('.results').append(`<h2>${sleepResults[8].description}</h2>`);
            $('.resultsImage').append(`<img src="${sleepResults[8].image}" alt="">`)
        }

        else if(spoon.counter === 10 && sleepResults[9].value === 10) {
            $('.results').append(`<h1>you got ${sleepResults[9].name}</h1>`);
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
    $(`quiz.container`).on(`click`, function(){
        $(this).hide();
    });
    $(`.reset`).on(`click`,function(e){
        $("input:radio").each(function (i) {
            this.checked = false;
            console.log('false!');
        });
        location.reload(false);
        $(document).ready(function(){
            $(this).scrollTop(0);
        });
    });
});