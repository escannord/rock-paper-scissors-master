var btn_modal = document.getElementById("btn-rules");
var modal_rules = document.getElementById("modal-rules");
var modal_closer = document.getElementById("modal-closer");
var modal_content = document.getElementById("modal-content");

var rules = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock",
};
btn_modal.addEventListener("click", function () {
    modal_rules.style.display = "grid";
});

modal_content.addEventListener("click", function (event) {
    event.stopPropagation();
});

modal_rules.addEventListener("click", function (event) {
    $(this).fadeOut("slow");
});

modal_closer.addEventListener("click", function (event) {
    $(modal_rules).fadeOut("slow");
});

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function picked(choice, elt) {
    var selected = $(elt);
    selected.off("click").removeAttr("onclick");
    var keys = Object.keys(rules);
    var house_choice = keys[Math.floor(Math.random() * keys.length)];
    selected.parent().siblings().fadeOut();
    selected
        .parent()
        .addClass("user-selected")
        .addClass("selected");
    selected.parent().siblings(".box-view").fadeIn().show();
    var clone = $(".option")
        .clone()
        .removeClass("option")
        .addClass("selected");
    clone.children().removeAttr("onclick").off("click");
    var i = 0;
    var interval = setInterval(() => {
        $(".box-view").html(
            $(clone[i])
                .css({
                    position: "relative",
                    top: "unset",
                    left: "unset",
                    transform: "none",
                })
                .fadeIn()
        );
        i++;
        if (i == clone.length) i = 0;
    }, 150);
    await setTimeout(() => {
        clearInterval(interval);
        var house_elt = $(clone.filter(".choice-" + house_choice));
        $(".box-view").html($(clone.filter(".choice-" + house_choice)));
        console.log(house_choice);

        $(".box-view").addClass(
            "house_selected"
        );
        var old_score =
            localStorage.getItem("paper_scissors_rock_score") ?? 0;
        if (house_choice == choice) {
            $(".result-text").text("EQUALITY");
            $(".btn-replay").toggleClass("btn-close btn-win");
        } else if (rules[house_choice] == choice) {
            $(".result-text").text("YOU LOSE");
            $(".box-view").addClass("win-shadow");
            $(".btn-replay").toggleClass("btn-win btn-lose");
            old_score--;
        } else {
            $(".result-text").text("YOU WIN");
            selected.parent().addClass("win-shadow");
            $(".btn-replay").toggleClass("btn-close btn-win");
            old_score++;
        }
        localStorage.setItem("paper_scissors_rock_score", old_score);
        $("#score-displayer .number").text(old_score);
        $(".result-play").fadeIn(1000);
    }, 4000);
}

$(document).ready(function () {
    $("#score-displayer .number").text(
        localStorage.getItem("paper_scissors_rock_score") ?? 0
    );
});

$(".btn-replay").on("click", function (e) {
    location.reload();
});