function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num);
}

const collectiveWisdom = {
    signInfo: ['star', 'moon', 'sun', 'comet'],
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
};

// Function to generate and format personal wisdom
function formatWisdom() {
    let personalWisdom = [];
    
    for (let prop in collectiveWisdom) {
        let optionIdx = generateRandomNumber(collectiveWisdom[prop].length);
        
        switch (prop) {
            case 'signInfo':
                personalWisdom.push(`Your sign right now is a "${collectiveWisdom[prop][optionIdx]}".`);
                break;
            case 'fortuneOutput':
                personalWisdom.push(`You are having: "${collectiveWisdom[prop][optionIdx]}".`);
                break;
            case 'advice':
                personalWisdom.push(`You should: "${collectiveWisdom[prop][optionIdx]}".`);
                break;
            default:
                personalWisdom.push('There is not enough info.');
        }
    }
    
    return personalWisdom.join('\n');
}

// Event listener for the button
document.getElementById('generate-button').addEventListener('click', () => {
    const fortuneOutput = formatWisdom();
    document.getElementById('fortune-output').textContent = fortuneOutput;
});
