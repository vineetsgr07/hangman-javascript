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

class Hangman {

    constructor() {

        let randomWord = wordList[Math.floor(Math.random() * wordList.length)]

        this.data = {
            selectedCharacterIndex: '0_word',
            selectedWord: randomWord,
            failCount: 0
        }
        this.render()
    }

    render() {

        let rootElement = document.getElementById("root")

        let rootElementChildDiv = this.rootChildDiv(rootElement)
        let blankBoxes = this.generateBlanks(this.data.selectedWord.word.trim().length)
        let sentenceElement = this.generateSentenceBlock()
        let alphabetsKeyboard = this.generateAlphabetsKeyboard()
        let generateHangman = this.generateHangman()

        rootElement.appendChild(rootElementChildDiv)
        rootElementChildDiv.appendChild(generateHangman)
        rootElementChildDiv.appendChild(blankBoxes)
        rootElementChildDiv.appendChild(sentenceElement)
        rootElementChildDiv.appendChild(alphabetsKeyboard)
    }

    generateHangman() {

        let canvas = document.getElementById("myCanvas")
        let ctx = canvas.getContext("2d")
        ctx.fillStyle = "grey";
        ctx.fillRect(0, 0, 600, 500);

        let frame1 = this.drawLine(ctx, 50, 450, 450, 450);
        let frame2 = this.drawLine(ctx, 100, 450, 100, 100);
        let frame3 = this.drawLine(ctx, 100, 100, 250, 100);
        let frame4 = this.drawLine(ctx, 250, 100, 250, 150);
        let head = this.drawArc(ctx, 250,170,20, 0, Math.PI*2);
        let torso = this.drawLine(ctx, 250, 190, 250, 270);
        let leftArm = this.drawLine(ctx, 250, 190, 280, 220);
        let rightArm = this.drawLine(ctx, 250, 190, 220, 220);
        let rightLeg = this.drawLine(ctx, 250, 270, 220, 300);
        let leftLeg = this.drawLine(ctx, 250, 270, 280, 300);

        return canvas
    }

    drawLine(ctx, startX, startY, endX, endY) {
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
    }

     drawArc(ctx, centerX, centerY, radius, startAngle, endAngle){
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.stroke();
    }

    generateSentenceBlock() {

        let sentence = document.createElement('p')
        sentence.innerText = this.data.selectedWord.sentence;

        this.style(sentence, {
            border: '1px solid grey',
            display: 'inline-block',
            width: 'max-content',
            color: 'white',
            backgroundColor: 'purple',
            fontWeight: 'bold',
            padding: '8px',
            margin: '16px'
        })

        return sentence
    }

    rootChildDiv(rootElement) {

        let rootElementChildDiv = document.createElement('div');

        this.style(rootElementChildDiv, {
            margin: '32px',
            display: 'flex',
            flexDirection: "column",
            position: 'fixed',
            bottom: '0'
        })

        return rootElementChildDiv

    }

    singleBlankBoxes = (i) => {
        let self = this;
        let input = document.createElement('div')
        input.setAttribute("id", `${i}_word`)

        this.style(input, {
            backgroundColor: 'white',
            border: '1px solid green',
            padding: '16px',
            margin: '2px'
        })

        input.addEventListener('click', function (element) {
            let selectedElementId = element.srcElement.id
            self.data.selectedCharacterIndex = element.srcElement.id;
            alert(selectedElementId)
        })

        return input
    }

    generateBlanks(wordLength) {

        let self = this
        let inputParentTree = document.createElement('div');
        this.style(inputParentTree, {
            height: '40px',
            padding: '16px',
            margin: '2px',
            flexDirection: 'row',
            display: 'flex',
            alignItems: 'center'
        })

        let arrayOfInput = Array.apply(null, new Array(wordLength)).map(
            function (el, i) {
                return self.singleBlankBoxes(i)
            }
        )

        arrayOfInput.forEach(element => {
            inputParentTree.append(element)
        });

        return inputParentTree
    }

    generateKeyboard = (i) => {

        let self = this;
        let input = document.createElement('span')
        input.innerText = String.fromCharCode(65 + i)

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
        input.addEventListener('click', function (element) {
            console.log(element)
            let selectedBlankBoxId = document.getElementById(`${self.data.selectedCharacterIndex}`);
            let selectedCharacter = element.srcElement.innerText
            self.validate(selectedBlankBoxId, selectedCharacter)
        })

        return input
    }

    validate(selectedBlankBoxId, selectedCharacter) {

        let actualWord = this.data.selectedWord.word
        let blankBoxId = selectedBlankBoxId.id

        let isBoxContainCharacter = selectedBlankBoxId.innerText ? true : false
        let isAlphabetMatchBlankBox = (actualWord[blankBoxId.split('_')[0]].toUpperCase() == selectedCharacter) ? true : false

        if (!isBoxContainCharacter && isAlphabetMatchBlankBox) {
            selectedBlankBoxId.innerText = selectedCharacter;
            return true
        } else {
            this.data.failCount += 1;
            return false
        }
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
                return self.generateKeyboard(i)
            }
        )

        keyboard.forEach(element => {
            inputParentTree.append(element)
        });

        return inputParentTree

    }

    setAlphabet(character, positionInArray) {

    }

    style(element, property) {
        for (let key in property) {
            element.style[key] = property[key]
        }
    }

    buildDomFromArrayOfElement(ArrayElement) {

    }

    addDivAsParent(element, style) {

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
