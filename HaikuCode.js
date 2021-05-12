$(document).ready(function() {
    $("button#addWord").on("click", addWord);
    $("button#generateHaiku").on("click", generateHaiku);
});

//hiding error statement until needed
$("div#error").hide;
//pre-filled array with words in rows by # of syllables
let wordsBySyllable = [

    [], //row 0 - 0 syllable words (not possible)   // index 0 - this is a place holder
    ["sun", "moon", "Spring", "Fall", "breeze", "rest"],  //row 1 - 1 syllable words
    ["bluster", "shimmer", "Summer", "Winter"],  //row 2 - 2 syllable words
    ["reflecting", "tiptoeing", "origin", "deliver"],  //row 3 - 3 syllable words
    ["activity", "sacrificial", "watercolor", "habitation"],  //row 4 - 4 syllable words
    ["locomotory", "pantomimicry", "perennially"],  //row 5 - 5 syllable words
    ["amiability", "indefatigable", "anticipatory", "unoratorial"],  //row 6 - 6 syllable words
    ["autobiographical", "inevitability", "monochromaticity"],  //row 7 - 7 syllable words
];

function addWord(event) {
    //prevent form default of erasing output
    event.preventDefault();

    //set input equal to newWord
    let newWord = $("input#newWord").val();
    //split the word into array items
    let wordSplit = newWord.split("-");
    //alert(wordSplit.join());
    //count the length of array (number of items in array)... # syllables in word
    var index = wordSplit.length;
    //if index (# word syllables) is between 1 and 7, then push the word into correct index row & (remove dashes)
    if (index >= 1 && index <= 7) {
        let word = newWord.replace("-", "");
        while ((word).includes("-")) {
            word = word.replace("-", "");
        }
        //array[index].push(word);
        wordsBySyllable[index].push(word);
        //clear input box for next new word
        $('input#newWord').focus(function clear() {
            $(this).val('');
        });
    }
    else {
        //if word entered is not within 1-7 syllables, user will get this error on screen
        $("div#error").text("Word entered is NOT in correct format.")
    }
}

function generateHaiku(event) {
    //prevent default submit and erase of form output
    event.preventDefault();
//Picks words randomly from the dictionary to build three lines of text:
//When picking random words, first generate a random number between 1 and 7.
// If that number of syllables won't cause the current line to exceed its maximum,
// only then do you get a word from the corresponding array.

//totalSyllables <= 5, if not add a word;  use a loop while , 5 but not over 5...
//Create Haiku array to allow easy loop printing of the Haiku lines... (I couldn't get the jquery <br> or \ln to work)
    let Haiku = [];
    let lineOne = "";
    let wordIndex = 0;

    while (wordIndex < 5 )
    {
        let nextWord = Math.floor(Math.random() * 5) + 1;
        if ((wordIndex + nextWord ) <=5) {
            //alert(wordsBySyllable[nextWord].length);
            lineOne += wordsBySyllable[nextWord] [Math.floor(Math.random() * (wordsBySyllable[nextWord].length))] + " ";
            wordIndex += nextWord;
        }
    }
    Haiku.push(lineOne);


    let lineTwo = "";
    let wordIndex2 = 0;
    while (wordIndex2 < 7 )
    {
        let nextWord2 = Math.floor(Math.random() * 7) + 1;
        if ((wordIndex2 + nextWord2 ) <=7) {
            //alert(wordsBySyllable[nextWord].length);
            lineTwo += wordsBySyllable[nextWord2] [Math.floor(Math.random() * (wordsBySyllable[nextWord2].length))] + " ";
            wordIndex2 += nextWord2;
        }
    }
    Haiku.push(lineTwo);


    let lineThree = "";
    let wordIndex3 = 0;
    while (wordIndex3 < 5 )
    {
        let nextWord3 = Math.floor(Math.random() * 5) + 1;
        if ((wordIndex3 + nextWord3 ) <=5) {
            //alert(wordsBySyllable[nextWord].length);
            lineThree += wordsBySyllable[nextWord3] [Math.floor(Math.random() * (wordsBySyllable[nextWord3].length))] + " ";
            wordIndex3 += nextWord3;
        }
    }
    Haiku.push(lineThree);

    $("form").hide;
    
    //print out lineOne + lineTwo + lineThree...  looping through lines of Haiku array
    for(let line of Haiku)
    $("p#haiku").append(line + "<br>");

}


//font-family: 'Roboto', sans-serif;
//background-color: hsla(hue, saturation, lightness, alpha);
//background-color: hsla(240, 100%, 50%, 0);
//(240, 100%, 50%, 0) transparent
//background-color: rgba(50%, 50%, 50%, .5);






