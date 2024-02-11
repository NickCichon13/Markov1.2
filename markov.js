/** Textual markov chain generator */

module.exports = {MarkovMachine};

class MarkovMachine {

    /** build markov machine; read in text.*/
  
    constructor(text) {
      let words = text.split(/[ \r\n]+/);
      this.words = words.filter(c => c !== "");
      this.makeChains();
    }
  
    /** set markov chains:
     *
     *  for text of "the cat in the hat", chains will be
     *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */
  
    makeChains() {
        let wordChain = new Map();

      for (let i = 0; i < this.words.length; i++){
        let firstword = this.words[i];
        let newWord = this.words ++

        if (!wordChain[newWord]){
            wordChain.get(firstword).push(newWord);

        }else{
            wordChain.set(word,[newWord]);
        }
        this.wordChain = wordChain;
      }
    }
  
  
    /** return random text from chains */
  
    makeText() {
        let currWord = this.words.substring(i);
        let res = currWord;

        for(let i =0; i<100; i++){
        let possib = this.wordChain[currWord];

        if (!possib){
          break;
        }

        let next = random(possib);
        res += next;
        currWord = res.substring(len - i, len);
        }
    }
  }

