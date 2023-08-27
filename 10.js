const sentence = "please please submit your assignment on time, your assignments are important";
const result = wordCounter(sentence);

console.log(result);

function wordCounter(sentence){
    const result = {};
    const a = sentence.replace(',','')
    const arr = a.split(' ');
    for (const word of arr) {
        if(result[word]){
            result[word]++;
        }
        else {
            result[word]=1;
        }
    }
    return result;
}