var array = [];
var gamestatus = false;
var i = 0;
var round = 1;
var buttons = ['red','green','blue','yellow'];


if (!gamestatus){
    $(document).one("keydown",function(event){
        gamestatus = true;
        $('h1').text(`Level ${round}`);
        pushRandom();

    })

}

$(".btn").on("click",function(){
    var clickedButton = $(this).attr('id');
    animation(clickedButton);
    check(clickedButton);

})

function animation(button){
    var audio = new Audio(`./sounds/${button}.mp3`);
    audio.play();
    $(`.${button}`).addClass("pressed");
    setTimeout(()=>{
        $(`.${button}`).removeClass("pressed");
    },150)
}
function pushRandom(){
    var random = buttons[Math.floor(Math.random()*4)];
    array.push(random);
    setTimeout(()=>{
        animation(random);
    },1500);

}
function check(clickedButton){
    
    if (clickedButton==array[i]){
        i+=1;
        console.log(array,1)
        if (i==array.length){
            round+=1;
            $('h1').text(`Level ${round}`);
            i = 0;
            console.log(array,2)
            pushRandom();
            

        }
    } else {
        $("h1").text("Game over Press any key to reset game");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");

        },2000)
        resetGame()
        
    }

}

function resetGame(){
    array = [];
    gamestatus = false;
    i = 0;
    round = 1;
    if (!gamestatus){
    $(document).one("keydown",function(event){
        gamestatus = true;
        $('h1').text(`Level ${round}`);
        pushRandom();

    })

}
    

}