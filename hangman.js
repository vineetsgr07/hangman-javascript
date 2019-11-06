// // person.js
// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName
//         this.lastName = lastName
//     }
//     fullName() {
//         return this.firstName + ' ' + this.lastName
//     }
// }
// module.exports = Person;

// Reference: https://github.com/scottfrazer/gre/blob/master/words.txt
var wordList = [
    {
        "word": "abberant",
        "sentence": "deviating from the norm"
    },
    {
        "word": "abjure ",
        "sentence": " to renounce or reject solemnly"
    },
    {
        "word": "abrogate ",
        "sentence": " to repeal; to revoke"
    },
    {
        "word": "abstemonious ",
        "sentence": " eating and drinking in moderation"
    },
    {
        "word": "accolade ",
        "sentence": " an expression of praise"
    },
    {
        "word": "acerbic ",
        "sentence": " having a sour or bitter taste. sharp and forthright"
    },
    {
        "word": "acumen ",
        "sentence": " quick, keen, or accurate knowledge or insight"
    },
    {
        "word": "admonish ",
        "sentence": " to reprove; to express warning or disapproval"
    },
    {
        "word": "adroit ",
        "sentence": " adept; dexterous"
    },
    {
        "word": "adulation ",
        "sentence": " excessive praise; intense adoration"
    },
    {
        "word": "adulterate ",
        "sentence": " to reduce purity by combining with inferior ingredients"
    },
    {
        "word": "aesthetic ",
        "sentence": " dealing with, appreciative of, or responsive to art or beauty"
    },
    {
        "word": "aggrandize ",
        "sentence": " to increase in intensity, power, or prestige"
    },
    {
        "word": "alacrity ",
        "sentence": " eager and enthusiastic willingness"
    },
    {
        "word": "alchemy ",
        "sentence": " a medieval science aimed to transmute metals into gold"
    },
    {
        "word": "amalgamate",
        "sentence": " to combine several elements into a whole"
    },
    {
        "word": "amenable",
        "sentence": " aggreable; responsive to suggestion"
    },
    {
        "word": "anachronistic",
        "sentence": " out of place in terms of historical or chronological context"
    },
    {
        "word": "anathema",
        "sentence": " a solemn or ecclesiastical (religious) curse; a cursed or thoroughly loathed person or thing"
    },
    {
        "word": "anomaly",
        "sentence": " deviation from the normal order, form, or rule; abnormality"
    },
    {
        "word": "antipathy",
        "sentence": " aversion; dislike"
    },
    {
        "word": "antithetical",
        "sentence": " diametrically opposed; as in antithesis"
    },
    {
        "word": "apocryphal",
        "sentence": " of dupious authenticity or origin; spurious"
    },
    {
        "word": "apogee",
        "sentence": " farthest or highest point; culmination; zenith"
    },
    {
        "word": "apostate",
        "sentence": " one who abandons log - held religious or political convictions"
    },
    {
        "word": "apotheosis",
        "sentence": " deification; supreme example"
    },
    {
        "word": "apposite",
        "sentence": " appropriate; pertinent; relevent; suitab"
    }
]

// import Store from "./store/store";

class Hangman {

    constructor() {
    //     let self = this;

    //     this.render = this.render || function () { };

    //     if (props.store instanceof Store) {
    //         props.store.events.subscribe('stateChange', () => self.render());
    //     }

    //     if (props.hasOwnProperty('element')) {
    //         this.element = props.element;
    //     }
    }

    // Return random word and sentence
    pickRandomWord() {
        let randomNumber = Math.floor(Math.random() * wordList.length)
        return wordList[randomNumber]
    }

    set selectedIndex(id) {
        this._selectedWord = id
    }

    get selectedIndex() {
        return this._selectedWord
    }

    getInputElement = (i) => {
        let self = this;
        let input = document.createElement('input')
        input.setAttribute("id", `${i}_word`)
        this.style(input, {
            height: '40px', width: '40px'
        })

        input.addEventListener('click', function (element) {
            debugger
            let selectedElementId = element.srcElement.id
            self.selectedIndex(element.srcElement.id)

            alert(selectedElementId)
        })

        return input
    }



    generateFillInSpace(wordLength) {

        let inputParentTree = document.createElement('div');
        let self = this
        let arrayOfInput = Array.apply(null, new Array(wordLength)).map(
            function (el, i) {
                return self.getInputElement(i)
            }
        )

        arrayOfInput.forEach(element => {
            inputParentTree.append(element)
        });

        return inputParentTree
    }


    getKeyboardStrokeElement = (i) => {

        let input = document.createElement('span')

        this.style(input, {
            border: '0.5px solid white',
            backgroundColor: 'green',
            fontWeight: 'bold',
            color: 'white',
            padding: '8px',
            cursor: 'pointer'
        })

        /*Todo: Code Clean, find a way to add them in a json object
        { 
            height: '40px',
            width: '40px'
        }
        */
        input.innerText = String.fromCharCode(65 + i)

        return input
    }


    generateAlphabetsKeyboard() {

        let self = this;
        let inputParentTree = document.createElement('div');
        this.style(inputParentTree, {
            margin: '16px',
            borderRadius: '20px'
        })

        let keyboard = Array.apply(null, new Array(26)).map(
            function (el, i) {
                return self.getKeyboardStrokeElement(i)
            }
        )

        keyboard.forEach(element => {
            inputParentTree.append(element)
        });

        return inputParentTree

    }

    style(element, property) {
        for (let key in property) {
            element.style[key] = property[key]
        }
    }

    buildDomFromArrayOfElement(ArrayElement) {

    }


}

// let difficultyLevel = ['Easy', 'Medium', 'Hard']

// /**
//     Below function contain total of 9 state from zero render till hangman finishes

// */
// function renderHangman(state) {

//     let stateList = ['0 blank window']
//     return 'return javascript object with return hangman window which contain 9 state'
// }

// function checkHangManStatus(character, position) {

//     return 'return total of 9 state ranging from 1 to 9'
// }

// elem.onclick = function () {
//     animate({
//         duration: 1000,
//         timing: function (timeFraction) {
//             return timeFraction;
//         },
//         draw: function (progress) {
//             elem.style.width = progress * 100 + '%';
//         }
//     });
// };

// function animate({ duration, draw, timing }) {

//     let start = performance.now();
//     debugger
//     requestAnimationFrame(function animate(time) {
//         let timeFraction = (time - start) / duration;
//         if (timeFraction > 1) timeFraction = 1;

//         let progress = timing(timeFraction)

//         draw(progress);

//         if (timeFraction < 1) {
//             requestAnimationFrame(animate);
//         }

//     });
// }
