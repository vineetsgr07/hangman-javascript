
// person.test.js
const Hangman = require('./hangman');
// test('Person constructs with a first and last name', () => {
//     let testPerson = new Hangman('John', 'Doe')
//     expect(testPerson).toEqual({ firstName: 'John', lastName: 'Doe' });
// });

// test('Word get created and return word instance', () => {
//     let testHangman = new Hangman()
//     expect(testHangman.pickRandomWord()).toEqual(String);
// });


test('Generate Keyboard', () => {
    let testHangman = new Hangman()
    console.log(testHangman.generateAlphabetsKeyboard())

})