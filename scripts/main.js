$(document).ready(function(){
    $("nav").sticky({topSpacing:0});
    
  });

$("#entrees").click(function(){
    $(".page1").show();
    $("#t1").css("display", "flex");
    $("#t1").css("vertical-align", "middle");
    $("#t1").css("text-align", "center");
    $("#t1").css("font-size", "1.3em");
    $("#t1").css("justify-content", "space-around");

    $("#entrees").css("background-color", "#fdecd8");
    $("#entrees").css("border-top", "3px solid #cec0ae");
    $("#entrees").css("border-left", "3px solid #cec0ae");
    $("#entrees").css("border-right", "3px solid #cec0ae");
    $("#entrees").css("margin-left", "2%");
    $("#entrees").css("border-radius", "2%");

    $("#plats").css("background-color", "#cec0ae");
    $("#plats").css("border-radius", "3%");
    $("#desserts").css("background-color", "#cec0ae");
    $("#desserts").css("border-radius", "3%");
    $("#formules").css("background-color", "#cec0ae");
    $("#formules").css("border-radius", "3%");

    $(".page2").hide();
    $(".page3").hide();
    $(".page4").hide();
});

$("#plats").click(function(){
    $(".page2").show();
    $("#t2").css("display", "flex");
    $("#t2").css("vertical-align", "middle");
    $("#t2").css("text-align", "center");
    $("#t2").css("font-size", "1.7em");
    $("#t2").css("justify-content", "space-around");

    $("#plats").css("background-color", "#fdecd8");
    $("#plats").css("border-top", "3px solid #cec0ae");
    $("#plats").css("border-left", "3px solid #cec0ae");
    $("#plats").css("border-right", "3px solid #cec0ae");
    $("#plats").css("margin-left", "2%");
    $("#plats").css("border-radius", "2%");
    $("#plats").css("padding-bottom", "8px");

    $("#desserts").css("background-color", "#cec0ae");
    $("#desserts").css("border-radius", "3%");
    $("#entrees").css("background-color", "#cec0ae");
    $("#entrees").css("border-radius", "3%");
    $("#formules").css("background-color", "#cec0ae");
    $("#formules").css("border-radius", "3%");

    $(".page1").hide();
    $(".page3").hide();
    $(".page4").hide();
});
$("#desserts").click(function(){
    $(".page3").show();
    $("#t3").css("display", "flex");
    $("#t3").css("vertical-align", "middle");
    $("#t3").css("text-align", "center");
    $("#t3").css("font-size", "1.7em");
    $("#t3").css("justify-content", "space-around");

    $("#desserts").css("background-color", "#fdecd8");
    $("#desserts").css("border-top", "3px solid #cec0ae");
    $("#desserts").css("border-left", "3px solid #cec0ae");
    $("#desserts").css("border-right", "3px solid #cec0ae");
    $("#desserts").css("margin-left", "2%");
    $("#desserts").css("border-radius", "2%");
     $("#desserts").css("padding-bottom", "8px");

    $("#plats").css("background-color", "#cec0ae");
    $("#plats").css("border-radius", "3%");
    $("#entrees").css("background-color", "#cec0ae");
    $("#entrees").css("border-radius", "3%");
    $("#formules").css("background-color", "#cec0ae");
    $("#formules").css("border-radius", "3%");

    $(".page1").hide();
    $(".page2").hide();
    $(".page4").hide();
});

$("#formules").click(function(){
    $(".page4").show();
    $("#t4").css("display", "flex");
    $("#t4").css("vertical-align", "middle");
    $("#t4").css("text-align", "center");
    $("#t4").css("font-size", "1.8em");
    $("#t4").css("justify-content", "space-around");

    $("#formules").css("background-color", "#fdecd8");
    $("#formules").css("border-top", "3px solid #cec0ae");
    $("#formules").css("border-left", "3px solid #cec0ae");
    $("#formules").css("border-right", "3px solid #cec0ae");
    $("#formules").css("margin-left", "2%");
    $("#formules").css("border-radius", "2%");
     $("#formules").css("padding-bottom", "8px");

    $("#desserts").css("background-color", "#cec0ae");
    $("#desserts").css("border-radius", "3%");
    $("#entrees").css("background-color", "#cec0ae");
    $("#entrees").css("border-radius", "3%");
    $("#plats").css("background-color", "#cec0ae");
    $("#plats").css("border-radius", "3%");

    $(".page1").hide();
    $(".page3").hide();
    $(".page2").hide();
});