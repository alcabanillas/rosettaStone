const Transcoder = require('./transcoder.js');

describe('Rosetta', () =>{
  let input = `Hola Mundo
Mundo|World
Lunes|Monday
Hola|Hello`
  test('test1', () => {
    expect(Transcoder(input)).toMatch('Hello World');
  })


  let input2 = `mieux vaut prévenir que guérir
merci|thank you
que|than
malade|sick
mieux|better
guérir|to heal
chien|dog
vaut prévenir|to prevent
beurre|butter
s'il vous plaît|please`
  test('test2', () => {
    expect(Transcoder(input2)).toMatch('better to prevent than to heal');
  })
let input3 =`5748494348 574159 544845 57494E44 424C4F5753
41|A
42|B
43|C
44|D
45|E
46|F
47|G
48|H
49|I
4A|J
4B|K
4C|L
4D|M
4E|N
4F|O
50|P
51|Q
52|R
53|S
54|T
55|U
56|V
57|W
58|X
59|Y
5A|Z`

  test('test3', () => {
    expect(Transcoder(input3)).toMatch('WHICH WAY THE WIND BLOWS');
  })
});


