//TO DO
//2. fade in the image, rather than have it just appear
//3. figure out how to record people’s input into a spreadsheet to record what they said


var radioBttn;
var userMemory;

//create empty arrays to hold all of the image URLs, load from a folder
var prompt1 = [];
var prompt2 = [];
var prompt3 = [];
var prompt4 = [];
var prompt5 = [];


$(document).ready(function(){

  var inputField = $('#memory');
  
  //when the user clicks inside the input field to start typing, clear it
  inputField.click(function() {
    if( inputField.attr("value") == "Enter your memory here" ) {
        // Set it to an empty string
        inputField.attr("value", "");
    }
   });

  //prompts 1 and 2 - create arrays of image sources
  for (var i = 1; i<10; i++) {
    prompt1.push("prompt1_0" + i + ".jpg");
    prompt2.push("prompt2_0" + i + ".jpg");
  }

  //prompts 3 and 4 - create arrays of image sources
  for (var i = 1; i<8; i++) {
    prompt3.push("prompt3_0" + i + ".jpg");
    prompt4.push("prompt4_0" + i + ".jpg");
  }

  //prompts 5 - create arrays of image sources
  for (var i = 1; i<9; i++) {
    prompt5.push("prompt5_0" + i + ".jpg");
  }


  //grab the button by its id
  var bttn = $('#button');
  // console.log(bttn);

  //when the button is clicked, call getVals
  bttn.on('click', getInputVals); 

  //function to grab the values from the radio button and the input field
  function getInputVals () {

    //grab the value of the radio button, aka which prompt the user chose
    radioBttn = $('input[name=prompt]:checked').val()

    //grab the user's memory from the form field
    userMemory = $('#memory').val();
    // console.log(radioBttn, userMemory);


    //create an image element that will have the memory match
    var memoryMatchImg = $('<img />', { 
      id: 'match',
      src: '',
    });

    $('#container').empty(); //empty the container div, and change the styling
    $('#container').css('border', '0');
    $('#container').css('padding', '0');

    memoryMatchImg.appendTo($('#container')); //add the image to the page

    //change the source of the image depending on which prompt was selected
    switch (radioBttn) {
      case "prompt1" :
        //pick a random image as the source
        var choice = [Math.floor(Math.random()*prompt1.length)]
        memoryMatchImg.attr("src", "images/" + prompt1[choice]);
        console.log('prompt1');
        break;
      case "prompt2" :
        var choice = [Math.floor(Math.random()*prompt2.length)]
        memoryMatchImg.attr("src", "images/" + prompt2[choice]);
        console.log('prompt2');
        break;
      case "prompt3" :
        var choice = [Math.floor(Math.random()*prompt3.length)]
        memoryMatchImg.attr("src", "images/" + prompt3[choice]);
        console.log('prompt3');
        break;
      case "prompt4" :
        var choice = [Math.floor(Math.random()*prompt4.length)]
        memoryMatchImg.attr("src", "images/" + prompt4[choice]);
        console.log('prompt4');
        break;
      case "prompt5" :
        var choice = [Math.floor(Math.random()*prompt5.length)]
        memoryMatchImg.attr("src", "images/" + prompt5[choice]);
        console.log('prompt5');
        break;
    }

  }

});