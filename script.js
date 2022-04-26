$(document).ready(function(){
    $("#sedan-button").click(function(){
        $( "#sedan-dialog" ).dialog();
    })//End sedan click function

    $("#espresso-button").click(function(){
        $( "#espresso-dialog" ).dialog();
    })//End espresso click function

    $("#tv-button").click(function(){
        $( "#tv-dialog" ).dialog();
    })//End tv click function

    $("#chair-button").click(function(){
        $( "#chair-dialog" ).dialog();
    })//End chair click function

    // var themeClass = $( "#sedan-dialog" ).dialog( "option", "classes.ui-dialog" );
    // console.log(themeClass)
})//End document ready function

