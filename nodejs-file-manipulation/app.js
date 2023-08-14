import fs from 'fs';
import _ from 'lodash';

// Function to count the number of vowels in a word
function countVowels(word) {
    const vowels = 'aeiouAEIOU'; // List of vowels in English
    let count = 0;
    for (const char of word) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// Function to handle reading and processing the file
function processTextFile(filename, outputFilename) {
    fs.readFile(filename, 'utf-8', (err, data) => {
        if (err) {
            throw err;
        }

        // Store the output in a variable
        let output = '';

        function addToOutput(text) {
            output += text + '\n';
        }

        // Print the content 
        printContent(data);

        // Split the content into words
        const words = splitIntoWords(data);

        // Number of words
        countWords(words);

        // Reverse order
        reverseContent(data);

        // Unique words 
        const uniqueWords = getUniqueWords(words);
        printUniqueWords(uniqueWords);

        // Number of unique words
        countUniqueWords(uniqueWords);

        // Unique words in uppercase
        const uniqueWordsUppercase = convertToUppercase(uniqueWords);
        printUniqueWordsUppercase(uniqueWordsUppercase);

        // Count the number of vowels in each unique word
        countVowelsInWords(uniqueWords);

        // Print unique words (length > 5) in uppercase
        const uniqueWordsLongerThanFive = filterWordsByLength(uniqueWordsUppercase, 5);
        printUniqueWordsLongerThanFive(uniqueWordsLongerThanFive);

        // Write the collected output to a new file
        fs.writeFile(outputFilename, output, (err) => {
            if (err) {
                throw err;
            }
            console.log('The file has been saved!');
        });
    });
}

function printContent(content) {
    console.log('File content:');
    console.log(content);
}

function splitIntoWords(data) {
    return data.split(/\s+/);
}

function countWords(words) {
    console.log('Number of words:', words.length);
}

function reverseContent(data) {
    const reversedContent = _.reverse(data.split('\n')).join('\n');
    console.log('Reversed content:');
    console.log(reversedContent);
}

function getUniqueWords(words) {
    return _.uniq(words);
}

function printUniqueWords(uniqueWords) {
    console.log('Unique words:');
    console.log(uniqueWords);
}

function countUniqueWords(uniqueWords) {
    console.log('Number of unique words:', uniqueWords.length);
}

function convertToUppercase(words) {
    return _.map(words, word => word.toUpperCase());
}

function printUniqueWordsUppercase(uniqueWordsUppercase) {
    console.log('Unique words in uppercase:');
    console.log(uniqueWordsUppercase);
    const aa = 'hlhlhlhlih'
    fs.writeFile('messi.txt', JSON.stringify(aa),'UTF-8', (err) => {
        if (err) {
            throw err;
        }
        console.log('The file has been saved!');
    });
}

function countVowelsInWords(words) {
    const vowelsCount = words.map((word) => {
        const vowelCount = countVowels(word);
        return { word, vowelCount };
    });
    console.log('Vowels Count:', JSON.stringify(vowelsCount, null, 2));
}


printUniqueWordsUppercase()

// Call the main processing function
// processTextFile('data.txt', 'output.txt');

// fs.writeFile(file, data[, options], callback)

// fs.writeFile('message.txt', 'Hello Node.js', (err) => {
// if (err) throw err;
// console.log('The file has been saved!');
// });



// const fs = require('fs');

// function countOccurrences(filename, targetString) {
//     fs.readFile(filename, 'utf-8', (err, data) => {
//         if (err) {
//             console.error('Error reading the file:', err);
//             return;
//         }

//         const occurrences = (data.match(new RegExp(targetString, 'g')) || []).length;
//         console.log(`The string "${targetString}" appears ${occurrences} time(s) in the file.`);
//     });
// }

// // Get command-line arguments
// const [, , filename, targetString] = process.argv;

// // Check if both filename and targetString are provided
// if (filename && targetString) {
//     countOccurrences(filename, targetString);
// } else {
//     console.error('Usage: node countOccurrences.js <filename> <targetString>');
// }



// import fs from 'fs';
// import _ from 'lodash';

// fs.readFile('data.txt', 'utf-8', function (err, data) {
//     if (err) throw err;
//     // Print the content
//     console.log('File content:');
//     console.log(data);

//     // Split the data into words
//     const words = data.split(" ");

//     //number of words
//     console.log('Number of words:', words.length);

//     // reverse order
//     const reversedContent = _.reverse(data.split('\n')).join('\n');
//     console.log('Reversed content:');
//     console.log(reversedContent);

//     //  unique words
//     const uniqueWords = _.uniq(words);
//     console.log('Unique words:');
//     console.log(uniqueWords);

//     // number of unique words
//     console.log('Number of unique words:', uniqueWords.length);

//     //  unique  uppercase
//     const uniqueWordsUppercase = _.map(_.uniq(words), word => word.toUpperCase());
//     console.log('Unique words in uppercase:');
//     console.log(uniqueWordsUppercase);

//     // Print unique words (length > 5) in uppercase
//     const uniqueWordsLongerThanFive = _.filter(uniqueWordsUppercase, word => word.length > 5);
//     console.log('Unique words (length > 5) in uppercase:');
//     console.log(uniqueWordsLongerThanFive);
// });




















// // console.log("aaaaaaaaaaaaaaaaaaaaaaa")
// // import _ from 'lodash';
// // import  fs from 'fs';



// // fs.readFile('data.txt', 'utf-8', function (err, data) {
// // if (err) throw err;
// // console.log(data);
// // });

// import fs from 'fs';
// import _ from 'lodash';

// // Read the content of the file
// fs.readFile('data.txt', 'utf-8', function (err, data) {
//     if (err) throw err;
//     // Print the content of the file
//     console.log('File content:');
//     console.log(data);

//     // Split the content into words
//     const words = data.split(/\s+/);

//     // Print the number of words
//     console.log('Number of words:', words.length);

//     // Print the content of the file in reverse order
//     const reversedContent = _.reverse(data.split('\n')).join('\n');
//     console.log('Reversed content:');
//     console.log(reversedContent);

//     // Print unique words (remove duplicates)
//     const uniqueWords = _.uniq(words);
//     console.log('Unique words:');
//     console.log(uniqueWords);

//     // Print the number of unique words
//     console.log('Number of unique words:', uniqueWords.length);

//     // Print unique words in uppercase
//     const uniqueWordsUppercase = _.map(_.uniq(words), word => word.toUpperCase());
//     console.log('Unique words in uppercase:');
//     console.log(uniqueWordsUppercase);

//     // Print unique words (length > 5) in uppercase
//     const uniqueWordsLongerThanFive = _.filter(uniqueWordsUppercase, word => word.length > 5);
//     console.log('Unique words (length > 5) in uppercase:');
//     console.log(uniqueWordsLongerThanFive);
// });
