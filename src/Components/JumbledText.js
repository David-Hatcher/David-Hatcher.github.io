import React, {useState} from 'react'

const JumbledText = (props) => {
    const [randomText,setRandomtext] = useState("");
    const [text] = useState(props.text);
    if(randomText === "") {
        setRandomtext(generateRandomName(text));
    } else {
        changeNameCharacter(text,randomText,setRandomtext);
    }
    return (
            <p>
                {randomText}
            </p>
    )
}

export default JumbledText;

const changeNameCharacter = (text,textVar,setTextVar) => {
    setTimeout(() => {
        decodeRandomName(text,textVar,setTextVar);
    },120)
}

const decodeRandomName = (text,randomText,setRandomText) => {
    let newName = randomText.split("");
    if(text !== randomText) {
        for(let i = 0; i < text.length; i++) {
            if(newName[i] !== text.charAt(i)) {
                newName[i] = text.charAt(i);
                break;
            }
        }
        setRandomText(newName.join(""));
    }
}

const generateRandomName = (text) => {
    let possibles = `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`.split("");
    let newText = "";
    text.split("").forEach(() => {newText += getRandomSymbol(possibles)});
    return newText;
}

const getRandomSymbol = (possibles) => {
    return possibles[getRandomNumber(possibles.length)]
}

const getRandomNumber = (max) => {
    return Math.floor(Math.random() * (max));
}
