function jokeGenerator(){
    var jokesList = {
        "1": `Why don't skeletons fight each other? They don't have the guts.`,
        "2": `How does a penguin build its house? Igloos it together.`,
        "3": `Why did the scarecrow win an award? Because he was outstanding in his field.`,
        "4": `I'm reading a book on anti-gravity. It's impossible to put down.`,
        "5": `What did one wall say to the other wall? "I'll meet you at the corner.`,
        "6": `Why don't eggs tell jokes? Because they might crack up!`,
        "7": `Parallel lines have so much in common. It's a shame they'll never meet.`,
        "8": `How do you organize a space party? You planet!`,
        "9": `Did you hear about the claustrophobic astronaut? He needed a little space.`,
        "10": `I'm on a seafood diet. I see food and I eat it.`,
        "11": `Why couldn't the bicycle stand up by itself? It was two-tired.`,
        "12": `How do you make holy water? You boil the hell out of it.`,
        "13": `What do you call cheese that isn't yours? Nacho cheese!`,
        "14": `I'm reading a book on teleportation. It's bound to get me somewhere.`,
        "15": `Why don't scientists trust atoms? Because they make up everything!`,
        "16": `What did one snowman say to the other? "Do you smell carrots?`,
        "17": `Why did the golfer bring two pairs of pants? In case he got a hole in one.`,
        "18": `Parallel lines have so much in common. It's a shame they'll never meet.`,
        "19": `Why did the tomato turn red? Because it saw the salad dressing!`,
        "20": `What did the ocean say to the shore? Nothing, it just waved.`,
        "21": `What do you call a lazy kangaroo? A pouch potato.`,
        "22": `Why was the math book sad? It had too many problems.`,
        "23": `What do you call a group of musical whales? An orca-stra!`,
        "24": `How do you make a tissue dance? You put a little boogie in it.`,
        "25": `What did one wall say to the other wall? "I'll meet you at the corner.`,
        "26": `What did the left eye say to the right eye? "Between you and me, something smells.`,
        "27": `Why couldn't the bicycle stand up by itself? It was two-tired.`,
        "28": `What do you call a bear with no teeth? A gummy bear!`,
        "29": `How do you make holy water? You boil the hell out of it!`,
        "30": `What do you call a magic dog? A labracadabrador!`,
    }

    var jokeNumber = Object.keys(jokesList);
    var joke = jokeNumber[Math.floor(Math.random() * jokeNumber.length)];

    var shownJoke = jokesList[joke];

    document.getElementById("jokeText").innerHTML = shownJoke;
}
