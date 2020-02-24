

const howMany = prompt('how many cases?');
for (i = 0; i < howMany; i++) {
    const word = prompt();
    let word2 = "";
    let counter = 1;
    let j = 0;

    while (j < word.length) {
        let ac = word[j];
        j++;
        counter = 1;
        for (; j < word.length && word[j] == ac; j++) {
            counter++;
            
        }
        if (counter == 1) {
            word2 += ac;
        }
        else if (counter == 2) {
            word2 += ac;
            word2 += ac;
        }
        else {
            word2 += ac;
            word2 += counter;
        }
    }console.log(word2)

}

