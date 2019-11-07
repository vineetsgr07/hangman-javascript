// Reference: https://github.com/scottfrazer/gre/blob/master/words.txt
var wordList = [
    { "word": "abberant", "sentence": "deviating from the norm" },
    { "word": "abjure ", "sentence": " to renounce or reject solemnly" },
    { "word": "abrogate ", "sentence": " to repeal; to revoke" },
    { "word": "abstemonious ", "sentence": " eating and drinking in moderation" },
    { "word": "accolade ", "sentence": " an expression of praise" },
    { "word": "acerbic ", "sentence": " having a sour or bitter taste. sharp and forthright" },
    { "word": "acumen ", "sentence": " quick, keen, or accurate knowledge or insight" },
    { "word": "admonish ", "sentence": " to reprove; to express warning or disapproval" },
    { "word": "adroit ", "sentence": " adept; dexterous" },
    { "word": "adulation ", "sentence": " excessive praise; intense adoration" },
    { "word": "adulterate ", "sentence": " to reduce purity by combining with inferior ingredients" },
    { "word": "aesthetic ", "sentence": " dealing with, appreciative of, or responsive to art or beauty" },
    { "word": "aggrandize ", "sentence": " to increase in intensity, power, or prestige" },
    { "word": "alacrity ", "sentence": " eager and enthusiastic willingness" },
    { "word": "alchemy ", "sentence": " a medieval science aimed to transmute metals into gold" },
    { "word": "amalgamate", "sentence": " to combine several elements into a whole" },
    { "word": "amenable", "sentence": " aggreable; responsive to suggestion" },
    { "word": "anachronistic", "sentence": " out of place in terms of historical or chronological context" },
    { "word": "anathema", "sentence": " a solemn or ecclesiastical (religious) curse; a cursed or thoroughly loathed person or thing" },
    { "word": "anomaly", "sentence": " deviation from the normal order, form, or rule; abnormality" },
    { "word": "antipathy", "sentence": " aversion; dislike" },
    { "word": "antithetical", "sentence": " diametrically opposed; as in antithesis" },
    { "word": "apocryphal", "sentence": " of dupious authenticity or origin; spurious" },
    { "word": "apogee", "sentence": " farthest or highest point; culmination; zenith" },
    { "word": "apostate", "sentence": " one who abandons log - held religious or political convictions" },
    { "word": "apotheosis", "sentence": "deification; supreme example" },
    { "word": "apposite", "sentence": " appropriate; pertinent; relevent; suitab" },
    { "word": "apprise", "sentence": "to give notice to; to inform; notify" },
    { "word": "approbation", "sentence": "an expression of approval or praise" },
    { "word": "arcane", "sentence": "mysterious; esoteric" },
    { "word": "arabesque", "sentence": "a complex, ornate design; also a dance position" },
    { "word": "archaic", "sentence": "outdated; associated with an earlier perhaps more primitive time" },
    { "word": "artless", "sentence": "completely without guile; unsophisticated" },
    { "word": "ascetic", "sentence": "someone practicing self-denial" },
    { "word": "aspersion", "sentence": "an act of defamation or maligning; slander" },
    { "word": "assay", "sentence": "to put to a test" },
    { "word": "assiduous", "sentence": "diligent; hard-working" },
    { "word": "assuage", "sentence": "to ease or lessen; to appease or pacify" },
    { "word": "astringent", "sentence": "biting; severe" },
    { "word": "atrophy", "sentence": "to waste away or deteriorate" },
    { "word": "attenuate", "sentence": "to weaken or make thinner" },
    { "word": "audacious", "sentence": "daring and fearless; recklessly bold" },
    { "word": "augury", "sentence": "omen; potent; indication" },
    { "word": "auspices", "sentence": "protection or support" },
    { "word": "auspicious", "sentence": "favorable" },
    { "word": "avarice", "sentence": "greed, especially for wealth" },
    { "word": "aver", "sentence": "to state as fact; to confirm or support" },
    { "word": "baleful", "sentence": "sinister; ominous" },
    { "word": "beatify", "sentence": "to bless, make happy, or ascribe a virtue to" },
    { "word": "behemoth", "sentence": "something enormous; a gigantic creature" },
    { "word": "beleaguer", "sentence": "to beset; to beseige" },
    { "word": "belie", "sentence": "to give a false impression of" },
    { "word": "bellicose", "sentence": "belligerant; warlike" },
    { "word": "boisterous", "sentence": "loud; noisy; lacking restraint" },
    { "word": "bolster", "sentence": "to provide support" },
    { "word": "bombast", "sentence": "self-important or pompous writing or speech" },
    { "word": "boor", "sentence": "a rude or insensitive person" },
    { "word": "burgeon", "sentence": "to grow rapidly or flourish" },
    { "word": "burnish", "sentence": "to make smooth; to rub to a shine" },
    { "word": "byzantine", "sentence": "labyrinthine; complex" },
    { "word": "cabal", "sentence": "a scheme or plot; a group of plotters" },
    { "word": "cachinnate", "sentence": "to laugh loudly" },
    { "word": "cacophony", "sentence": "harsh, jarring, discordant sound; dissonance" },
    { "word": "cajole", "sentence": "to inveigle; to coax through flattery" },
    { "word": "calumny", "sentence": "slander" },
    { "word": "calumniate", "sentence": "to slander" },
    { "word": "canon", "sentence": "an established set of principles or code of laws, often religious in nature" },
    { "word": "capricious", "sentence": "inclined to change one's mind impulsively or unpredictably" },
    { "word": "captious", "sentence": "calculated to confuse or entrap in argument" },
    { "word": "castigate", "sentence": "to severely criticize or punish" },
    { "word": "catalyst", "sentence": "a substance that accelerates the rate of a chemical reaction without changing; a person who causes change" },
    { "word": "caustic", "sentence": "burning or stinging, causing corrosion" },
    { "word": "celerity", "sentence": "speed" },
    { "word": "censure", "sentence": "to criticize severly; to officially rebuke" },
    { "word": "chary", "sentence": "wary; cautious, sparing" },
    { "word": "chasten", "sentence": "to restrain or correct" },
    { "word": "chauvinist", "sentence": "a blindly devoted patriot" },
    { "word": "chicanery", "sentence": "trickery or subterfuge" },
    { "word": "chimera", "sentence": "an illusion; originally, an imaginary fire-breathing monster" },
    { "word": "churlish", "sentence": "vulgar; difficult and intractable" },
    { "word": "coalesce", "sentence": "to come together or unite" },
    { "word": "coda", "sentence": "a concluding section of a musical or literary piece" },
    { "word": "cogent", "sentence": "appealing forcibly to the mind or reason; convincing" },
    { "word": "commensurate", "sentence": "matching; corresponding in degree, size, or amount" },
    { "word": "complaisance", "sentence": "complaisance", "sentence": "the willingness to comply with the wishes of others" },
    { "word": "connoisseur", "sentence": "an informed and astute judge in matters of taste; expert" },
    { "word": "contiguous", "sentence": "sharing a border; touching; adjacent" },
    { "word": "contrite", "sentence": "regretful, penitent; seeking forgiveness" },
    { "word": "convention", "sentence": "a generally agreed-upon practice or attitude" },
    { "word": "corrigible", "sentence": "capable of being set right; correctable" },
    { "word": "cosset", "sentence": "to coddle" },
    { "word": "countenance", "sentence": "to approve of or tolerate" },
    { "word": "cozen", "sentence": "to deceive, beguile, or hoodwink" },
    { "word": "craven", "sentence": "contemptibly fainthearted; lacking any courage" },
    { "word": "credulous", "sentence": "tending to believe too readily" },
    { "word": "crestfallen", "sentence": "dejected; disappointed" },
    { "word": "curmudgeon", "sentence": "an irritable, ill-tempered person" },
    { "word": "cursory", "sentence": "hasty; done with little attention" },
    { "word": "cynicism", "sentence": "an attitude or quality of belief that all people are motivated by selfishness" }









]

class Hangman {

    constructor() {

        let randomWord = wordList[Math.floor(Math.random() * wordList.length)]

        this.data = {
            selectedCharacterIndex: '0_word',
            randomWord: randomWord,
            score: 0
        }
        console.log(randomWord)
        this.render()
    }


    render() {

        let rootElement = document.getElementById("root")

        let rootElementChildDiv = this.rootChildDiv(rootElement)
        let blankBoxes = this.generateBlanks(this.data.randomWord.word.trim().length)
        let sentenceElement = this.generateSentenceBlock()
        let alphabetsKeyboard = this.generateAlphabetsKeyboard()
        let generateHangman = this.generateHangman()

        let scoreAndRestart = document.createElement('div')
        this.style(scoreAndRestart, { display: 'flex', flexDirection: 'row' })
        scoreAndRestart.setAttribute('id', 'scoreBoardId')

        rootElement.appendChild(rootElementChildDiv)

        rootElementChildDiv.appendChild(generateHangman.canvas)
        rootElementChildDiv.appendChild(scoreAndRestart)
        rootElementChildDiv.appendChild(blankBoxes)
        rootElementChildDiv.appendChild(sentenceElement)
        rootElementChildDiv.appendChild(alphabetsKeyboard)

        document.getElementById('scoreBoardId').appendChild(this.scoreBoard(0))
    }


    doCurrentSelection(previousId, currentId, self) {

        if (previousId != null) {
            let previousSelection = document.getElementById(previousId)
            previousSelection && previousSelection.classList && previousSelection.classList.remove("blankBoxBg")
        }

        let currentSelection = document.getElementById(currentId)
        currentSelection && currentSelection.classList.add("blankBoxBg")

    }

    singleBlankBoxes = (i) => {

        let blankBoxElement = document.createElement('div'), boxId = `${i}_word`, self = this;
        blankBoxElement.setAttribute("id", boxId)

        this.style(blankBoxElement, {
            backgroundColor: 'white',
            border: '1px solid white',
            padding: '8px',
            margin: '2px',
            width: '24px',
            height: '24px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '24px',
            color: 'green'
        })

        blankBoxElement.addEventListener('click', function (element) {
            let currentSelectedBox = boxId

            let previousSelection = self.data.selectedCharacterIndex
            if (previousSelection == null) previousSelection = '0_word'

            self.doCurrentSelection(previousSelection, currentSelectedBox, self)

            self.data.selectedCharacterIndex = boxId
        })

        return blankBoxElement
    }

    generateBlanks(wordLength) {

        let self = this
        let inputParentTree = document.createElement('div')
        this.style(inputParentTree, {
            padding: '8px',
            flexDirection: 'row',
            display: 'flex',
            alignItems: 'center'
        })

        let arrayOfInput = Array.apply(null, new Array(wordLength)).map(
            function (el, i) {
                return self.singleBlankBoxes(i)
            }
        )

        setTimeout(function () {
            self.data.selectedCharacterIndex = '0_word'
            let selectFirstBlankBoxDefault = document.getElementById('0_word')
            selectFirstBlankBoxDefault.classList.add('blankBoxBg')
        }, 1);


        arrayOfInput.forEach(element => {
            inputParentTree.append(element)
        });

        return inputParentTree
    }



    validate(selectedBlankBoxId, selectedCharacter) {

        let word = this.data.randomWord.word, self = this
        let blankBoxElement = document.getElementById(selectedBlankBoxId)


        if (blankBoxElement == null) {
            alert("select blank")
            return
        }
        let isBoxContainCharacter = blankBoxElement.innerText ? true : false
        let isAlphabetMatchBlankBox = (word[selectedBlankBoxId.split('_')[0]].toUpperCase() == selectedCharacter) ? true : false

        if (!isBoxContainCharacter && isAlphabetMatchBlankBox) {

            blankBoxElement.innerText = selectedCharacter;

            let nextBoxId = `${parseInt(selectedBlankBoxId.split('_')[0]) + 1}_word`

            this.doCurrentSelection(selectedBlankBoxId, nextBoxId, this)
            self.data.selectedCharacterIndex = nextBoxId;

            // this.selectNextElement(selectedBlankBoxId, word)
            return true
        } else {
            this.data.score += 1;
            this.updateScore()
            this.generateHangman(this.data.score)
            return false
        }
    }

    generateKeyboard = (i) => {

        let input = document.createElement('div'), self = this
        input.innerText = String.fromCharCode(65 + i)

        this.style(input, {
            border: '0.1px solid white',
            fontWeight: 'bold',
            color: 'white',
            padding: '8px',
            cursor: 'pointer',
            width: '40px',
            margin: '2px',
            height: '40px',
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
            fontSize: '24px',
        })

        input.addEventListener('click', function (element) {

            let selectedBlankBoxId = self.data.selectedCharacterIndex;
            let selectedCharacter = element.srcElement.innerText

            self.validate(selectedBlankBoxId, selectedCharacter)
        })


        if ([8, 16].includes(i)) {
            let newLine = document.createElement("br");
            input.appendChild(newLine)
            return input
        }

        return input
    }

    generateAlphabetsKeyboard() {

        let self = this;
        let inputParentTree = document.createElement('div');
        this.style(inputParentTree, {
            // border: '1px solid white',
            width: '480px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center'
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

    updateScore() {
        console.log(this.data.score)
    }

    setAlphabet(character, positionInArray) {

    }

    style(element, property) {
        for (let key in property) {
            element.style[key] = property[key]
        }
    }

    drawLine(ctx, startX, startY, endX, endY) {
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
    }

    drawArc(ctx, centerX, centerY, radius, startAngle, endAngle) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.stroke();
    }

    rootChildDiv(rootElement) {

        let rootElementChildDiv = document.createElement('div');

        this.style(rootElementChildDiv, {
            margin: '32px',
            display: 'flex',
            flexDirection: "column",
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center'

        })
        return rootElementChildDiv
    }


    generateSentenceBlock() {

        let sentence = document.createElement('p')
        sentence.innerText = `Hint: ${this.data.randomWord.sentence}`;

        this.style(sentence, {
            // border: '1px solid white',
            display: 'inline-block',
            width: 'max-content',
            color: 'white',
            fontWeight: 'bold',
            padding: '8px',
            top: '40',
            fontSize: '24px'
        })

        return sentence
    }

    generateHangman(step) {

        let canvas = document.getElementById("myCanvas")
        let ctx = canvas.getContext("2d")
        ctx.strokeStyle = "#378A74";
        ctx.fillStyle = "#378A74";


        ctx.font = "15px Arial";

        let frame1 = () => this.drawLine(ctx, 50, 250, 450, 250);
        let frame2 = () => this.drawLine(ctx, 60, 250, 60, 60)
        let frame3 = () => this.drawLine(ctx, 60, 60, 250, 60)
        let frame4 = () => this.drawLine(ctx, 250, 60, 250, 80)
        let head = () => this.drawArc(ctx, 250, 100, 20, 0, Math.PI * 2)
        let torso = () => this.drawLine(ctx, 250, 120, 250, 170)
        let leftArm = () => this.drawLine(ctx, 250, 120, 280, 150)
        let rightArm = () => this.drawLine(ctx, 250, 120, 220, 150)
        let rightLeg = () => this.drawLine(ctx, 250, 170, 220, 190)
        let leftLeg = () => this.drawLine(ctx, 250, 170, 280, 190)

        let steps = [frame1, frame2, frame3, frame4, head, torso, leftArm, rightArm, rightLeg, leftLeg]

        if (step <= 10) {
            let element = document.getElementById('score_id')
            element && (element.innerText = `${10 - step} lives`)
        }

        if (step >= 10) {
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, 600, 500);
            ctx.fillStyle = "#378A74";
            ctx.font = "40px Arial";
            ctx.fillText(`Game Over`, 180, 140);
            ctx.font = "20px Arial";
            ctx.fillText(`${this.data.randomWord.word} is the word.`, 180, 190);

            if (step === 10) {
                let gameOverBtn = this.restartButton()
                let rootParent = document.getElementById('scoreBoardId')
                rootParent.appendChild(gameOverBtn)
            }
            return
        } else {


            for (let index = 0; index < step; index++) {
                steps[index]();
            }
            return { canvas: canvas, ctx: ctx, steps: steps }
        }
    }

    restartButton() {

        let gameOverParent = document.createElement('div')
        this.style(gameOverParent, { display: 'flex' })

        let gameOver = document.createElement('BUTTON')
        this.style(gameOver, {
            margin: '8px',
            color: 'white',
            lineHeight: '30px',
            padding: '0 20px',
            background: '#378A74',
            border: 'none',
            border: '1px solid white',
            cursor: 'pointer',
            fontSize: '24px'
        })
        gameOver.innerHTML = "Restart";
        gameOverParent.appendChild(gameOver)

        gameOver.addEventListener("click", function () {
            location.reload(true);
        });

        return gameOverParent
    }

    scoreBoard(score) {

        let scoreParentElm = document.createElement('div');
        scoreParentElm.innerText = 'You Have '
        this.style(scoreParentElm, {
            color: 'white',
            fontSize: '24px',
            padding: '8px',
            // border: '1px solid white'
        })
        let scoreText = document.createElement('span')
        scoreText.setAttribute('id', 'score_id')
        scoreText.innerText = `${score} Lives`;
        scoreParentElm.appendChild(scoreText)
        return scoreParentElm
    }




}