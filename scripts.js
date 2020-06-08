// Exercise 1
// Add an event listener to the button
// Log 'Yeah, you clicked me' to the console when the user clicks on the button
$('.button1').click(() => {
    console.log('Yeah, you clicked me');
});

// Exercise 2
// When the user clicks on the second button change the first button's text
$('.button2').click(() => {
    $('.button1').text("Text changed upon click of second button");
});

// Exercise 3
// When the user clicks on the last button, change the background-color of each button
$('.button3').click(() => {
    $('.button1, .button2, .button3').css('background-color', 'salmon');
});