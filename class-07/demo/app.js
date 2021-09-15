'use strict'



function getGreeting() {
    let today = new Date(); // give us the date of today
    let hourNow = today.getHours(); // this bit of code that i just gave you, will give you the current hour 0-23
    let greeting = '';

    // If statements are read from TOP to BOTTOM!
    // if the current hour is past 6pm, than we will say good evening.
    if (hourNow >= 18) {
        // code block will be run if the first condition is true
        greeting = 'Good evening, Class!';
        // Good evening
    } else if (hourNow > 12) {
        greeting = 'Good afternoon, Class!';
    } else if (hourNow >= 0) {
        greeting = 'Good morning, Class!';
    } else {
        greeting = 'Welcome!'
    }

    alert(greeting);
}

function marketName() {
    let answer = prompt('What is your name?');

    // using the plus sign to build a sentence is called concatenation
    // document.write sends a string to the html. Means it can add HTML to an existing html file.
    document.write(answer + '\'s');
}

function favoriteColor() {
    let favColor = prompt('What is your favorite color?');
    if (favColor.toLowerCase() === 'red') {
        alert('Amanda loves red too!!!!!!');
    }
    document.body.style.backgroundColor = favColor;
}

function paragraphText() {

    let description = prompt('Tell us about your market?');

    document.write('<p>' + description + '</p>');
}

function buildAString(text1, text2){
    return text1 + ' ' + text2;
}

load();

function load(){
    alert('Hello!');
    alert(buildAString('Amanda', 'Iverson'));
}


console.log('i am first!');
