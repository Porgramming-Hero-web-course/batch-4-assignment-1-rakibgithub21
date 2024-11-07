
function countWordOccurrences(sentence: string, word: string): number {
    
    const lower_case_sentence = sentence.toLowerCase();
    const lower_case_word = word.toLowerCase();

    // Split the sentence into words by spaces
    const words = lower_case_sentence.split(" ");

    // Initialize a counter
    let count = 0;

    // Loop through the words array and count occurrences of the word
    for (let i = 0; i < words.length; i++) {
        if (words[i] === lower_case_word) {
            count++;
        }
    }

    return count;
}

// Sample Input
console.log(countWordOccurrences("I love typescript and", "typescript")); // Output: 1