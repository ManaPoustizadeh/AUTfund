/**
 * Created by ASUS on 2/2/2017.
 */
$("#ResearchArea").click(function(){
    if ($("#ResearchArea i").hasClass("fa-caret-right")){
        $("#ResearchArea i").removeClass("fa-caret-right");
        $("#ResearchArea i").addClass("fa-caret-down");
    }
    else{
        $("#ResearchArea i").removeClass("fa-caret-down");
        $("#ResearchArea i").addClass("fa-caret-right");
    }
    $("#ResearchAreaOpen").toggle();
});

$("#All").click(function () {
    if ($("#All").hasClass("active")){
        $("#ResearchAreaOpen li").each(function() {
            $(this).removeClass("active");
        });
    }
    else {
        $("#ResearchAreaOpen li").each(function() {
            $(this).addClass("active");
        });
    }
});

$("#Aerospace").click(function () {
    $("#All").removeClass("active");
    $(this).toggleClass("active");
});

$("#Electrical").click(function () {
    $("#All").removeClass("active");
    $(this).toggleClass("active");
});