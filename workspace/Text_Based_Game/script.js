var player = {
    health: 20,
    hasStick: false,
    hasKnife: false,
    hasBaseballBat: false,
};

var troll = {
    health: 5,
    damageOutput: 2,
};

var legendaryTroll = {
    health: 10,
    damageOutput: 4,
};

var randomNumber1 = undefined;
var randomNumber2 = undefined;
var randomNumber3 = undefined;

var getRandomNumber1 = function(){
    randomNumber1 = Math.random();
    if(randomNumber1 < 0.33) {
        randomNumber1 = 1;
    } else if (randomNumber1 < 0.66 && randomNumber1 >= 0.33) {
        randomNumber1 = 2;
    }else if (randomNumber1 >= 0.66){
        randomNumber1 = 3;
    }
};

var getRandomNumber2 = function(){
    randomNumber2 = Math.random();
    if(randomNumber2 < 0.33) {
        randomNumber2 = 1;
    } else if (randomNumber2 < 0.66 && randomNumber2 >= 0.33) {
        randomNumber2 = 2;
    }else if (randomNumber2 >= 0.66){
        randomNumber2 = 3;
    }
};

var getRandomNumber3 = function(){
    randomNumber3 = Math.random();
    if(randomNumber3 < 0.33) {
        randomNumber3 = 1;
    } else if (randomNumber3 < 0.66 && randomNumber3 >= 0.33) {
        randomNumber3 = 2;
    }else if (randomNumber3 >= 0.66){
        randomNumber3 = 3;
    }
};

getRandomNumber1(randomNumber1);
getRandomNumber2(randomNumber2);
getRandomNumber3(randomNumber3);

$('.terminal').terminal(function(command, term) {
    console.log(command);
    if(command === "run") {
        term.echo("Starting Game...");
        term.echo("Sitting in the middle of a forest, you see two trolls slowly approching in the distance. If you want to fight, type fight, if you want to search for weapons, type search, if you want to try to escape, type escape.");
        if(command === "search") {
            console.log("hello world");
        }
        switch(command){
            case "search":
                term.echo("henry");
                switch(randomNumber1) {
                    case 1:
                        term.echo("You found a stick! Now what would you like to do, fight or escape?");
                        player.hasStick = true;
                        break;
                    case 2:
                        term.echo("You found a knife! Now what would you like to do, fight or escape?");
                        player.hasKnife = true;
                        break;
                    case 3: 
                        term.echo("You found a baseball bat! Now what would you like to do, fight or escape?");
                        player.hasBaseballBat = true;
                        break;
                }
            break;
            case "fight":
                switch(randomNumber1) {
                    
                }
            break;
            
            case"escape":
                switch(randomNumber1) {
                }
            break;
        }
    }
}, {
    greetings: 'Sandbox Text Game',
    name: 'js_demo',
    height: 2000,
    prompt: '>>> ',
});



















