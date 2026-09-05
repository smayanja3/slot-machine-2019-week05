// What is a slot machine? 
    // - is a function of your input(bet) to an output( you potential winnings )
    // - a slot machine is a device that people give a bet or a token to a lever and some wheels spin nad you get a random result.

/// How does a slot machine work?
// - Input --> bet --> money --> risk 
//-Process   
// sets of values -"reels" which get randomly shuffled, and values selected for each
//shows our result :decision --> win/ lose how do you decide what a win is winning depend on the matching symbols and the paytable
//output --- money win or loss--> this could be possitive or negative
// on a win you get back your input + some "winnings"
//on a loss --> you lose your input

//Rules of the slot machine
// - Input
    // - needs to be positive
    // - needs to be between a min and a max bet amount 
    // - needs to == to or smaller then your current "wallet"
    // cant be more than what you have 
     
// -Process
    // - reels need to randomize 
    // - should give one of our five options 
    // - check if our reel values are the same (matching symbols)
    // -if yes
    // - multiply the input by the winning factor based on the selected option/symbol
    // - winning factor is the amount of money you get on top of your input back
    //- if no
    // - the player loses their input  and get NOTHING, GOOD DAY SIR

// - Output
    // - the amount returned from the process
    // - this loops back to the beginning


const minBet = 5
const maxBet = 50
let balance = 1000;
const symbols = ["🍒", "🍋", "🍊", "🍉", "🍇"];
//These symbols appear on our reels
const winningFactors = 5;

document.querySelector("#spin").addEventListener("click", slotMachine)


function slotMachine() {
    // grabbing the input amount from the HTML
    //const slotsArray = document.querySelectorAll('.slots') //- new
    const betInput = document.querySelector('#bet');
    let bet = Number(betInput.value);
    let resultMessage = document.querySelector("#result");
    //placeing the currentbalance on the dom so we can visualize it
    // // check our input  

    /*Object-oriented programming is a programming paradigm that uses "objects" to represent data and methods. In this case, we are using an object to represent the symbols on the slot machine reels. Each symbol has a value associated with it, which is used to determine the winning factor when the player wins.
    symbols[0].valueOf = 5

    */
   
    //Validates the bet against the rules we created
    if (balance > bet) {
        // Math.floor() is used to round down the random number to the nearest whole number, ensuring we get a valid index for the array.
        console.log(Math.floor() * symbols.length)
        // .floor rounds down to the nearest whole number so we dont get under 0 and over 4
        // we made an array that stores all the values the array can be and in order to randamize it, we use Math.random() to get a random number between 0 and 1, multiply it by the length of the array, and then round it down to the nearest whole number.
        // rolls the reels
        const reel1 = symbols[Math.floor(Math.random() * symbols.length)];
        const reel2 = symbols[Math.floor(Math.random() * symbols.length)];
        const reel3 = symbols[Math.floor(Math.random() * symbols.length)];
        //show the symbols
        // slotsArray[0].innerText = reel1 <-- do not understand why we needed this or how this works
        // slotsArray[1].innerText = reel2
        // slotsArray[2].innerText = reel3
        document.querySelector("#reel1").innerText = reel1
        document.querySelector("#reel2").innerText = reel2
        document.querySelector("#reel3").innerText = reel3
        //^^^ I had to fixed the scoop i had the original code outside of the scoop where it actually exist.
        // then i had the correct scoop but i had it before the if statement, which was incorrect.

        console.log(reel1, reel2, reel3);
        //checks for wins and looses
        if (reel1 === reel2 && reel2 === reel3) {
            // because if reel1 === reel2 and reel2 === reel3, then all three are the same
            console.log("Win!");
            balance += bet * winningFactors;
            resultMessage.innerText = "Win!"; //--new noe it shows the result on the DOM
        } else {
            console.log("Loss!");
            balance -= bet;
            resultMessage.innerText = "Loss!";
        }
    } else {
        console.log("Come on now, You BROKE");
        resultMessage.innerText = "Come on now, You BROKE";
    }
    
    document.querySelector("#balance").innerText = balance;
}
// document.querySelector("#balance").innerHTML = balance; // This line is commented out because the balance is already updated inside the function

/// originally has this line outside of my function and my balance was not updating becasue the rules of the function only apply inside
// - this makes sure that the balance is updated on the DOM after each spin

