// Access the DOM elements
const form = document.getElementById('myForm');
const submitBtn = document.getElementById('submitBtn');
const reset = document.getElementById('reset');

// Add event listener to the submit button
submitBtn.addEventListener('click', () => {
    // Get input values
    const textAreaInput = document.getElementById('textArea');
    const numberInput = document.getElementById('numberInput');

    const textAreaValue = textAreaInput.value;
    const numberValue = numberInput.value;

    // Print input data to the console
    console.log('Long Text:', textAreaValue);
    console.log('Number:', numberValue);

    let textArr = textAreaValue.split(/\s+/);
    // console.log(textArr);

    // / Use reduce to create an object with the counts of each word
    const wordCounts = textArr.reduce((acc, word) => {
    // Convert the word to SmallCase
    const smallCaseWord = word.toLowerCase();
    // If the word is not already in the object, set its count to 0
    acc[smallCaseWord] = (acc[smallCaseWord] || 0) + 1;
    return acc;
    }, {});

    // Use Object.entries and map to convert the object into an array of objects
    const result = Object.entries(wordCounts).map(([word, count]) => ({ word, count }));

    // Sort the array in descending order based on the word count
    result.sort((a, b) => b.count - a.count);

    // Take the first 12 elements of the sorted array
    const firstWrds = result.slice(0, numberValue);

    const individualWords = firstWrds.map(obj => obj.word);

    console.log(firstWrds);
    console.log(individualWords);

    // Create an array of colors
    let colors = ['violet', 'orange', 'yellow', 'green', 'blue', 'indigo', 'red', 'pink', 'brown', 'black', 'gray', 'purple'];


    // Append the first 12 words to the "My Clouds words div"

    let myCloud = document.getElementById('myWordCloud');

    individualWords.forEach(word => {
        let wordElement = document.createElement('div');
        wordElement.textContent = `${word}`;
        
        // Determine the fontsize before appending the word 
        let fontSize = 64 - 4 * individualWords.indexOf(word);
        wordElement.style.fontSize = `${fontSize}px`;


        // Determine the color
        let colorIndex = individualWords.indexOf(word) % colors.length;
        wordElement.style.color = colors[colorIndex];

        myCloud.appendChild(wordElement);
    });
});

// Add functionality to the reset button
reset.addEventListener("click", () => {
    document.location.reload();
  });