const Transcoder = (lines) => {
  lines = lines.split("\n");
  let phrase = lines.shift();
  console.log(`${phrase} - ${typeof phrase}`);

  var hasNumber = /\d/;

  if (hasNumber.test(phrase)) {
    let words = phrase.split(' ');
    
    phrase = words.map((elem) => {
      let letters = [];
      let i = 0;
      while(i + 2 <= elem.length){
        let letter = elem.slice(i,i+2)
        i = i + 2;

        let found = lines.find( (elem) => elem.startsWith(letter));
        let key = found.split('|');
        letters.push(key[1]);
      }
      return letters.join('');
    }).join(' ');
    
  } else {
    for (line of lines) {
      let key = line.split("|");

      let regexp = new RegExp(key[0], "g");
      phrase = phrase.replace(regexp, key[1]);
    }
  }

  return phrase;
};

module.exports = Transcoder;
