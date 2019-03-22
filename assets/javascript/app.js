$(document).ready(function(){

questions = [{q: "What is the Hulk's real name?", a: "Bruce Banner", b: "Bruce Wayner", c: "Peter Parker" },
{q: "Where is Thor form?", a: "Narnia", b: "Asgard", c: "Titan" },
{q: "What are the objects called that Thanos desires?", a: "Eternity Stones", b: "World Peace", c: "Infinity Stones" },
{q: "Ant-Man and the _____", a: "Bee", b: "Wasp", c: "Roach" },
{q: "Whos is the author of the original Marvel Comics?", a: "Stan Lee", b: "C.S. Lewis", c: "Hemmingway" },
{q: "Nick Fury got his eye scratched out by?", a: "Loki", b: "a cat", c: "Thanos" },
{q: "Next Avenger's Movies?", a: "Infinity War 2", b: "Avengers Ultimate", c: "End Game" },




]



$("#quizPage").hide();
$("#start").click(startGame);

// setTimeout(countDown, 1000 * 60);

var t = 60;


function startGame() {
    $(".startWrap").hide();
    $("#quizPage").show();

    var lTime = setInterval(function(){
        if (t != 0){
            t=t -1;
            $("#time").text(t);
        }
        else{
            t=0;
            $("#time").text(t);
            alert("Times Up!");
        clearInterval(lTime);
        }
    },1000);
}
});
// function countDown(){
//     setTimeout(countDown, 1000 * 60);
//     time--;
//     $("#time").text(time);
// }

