


$(document).ready(function(){
    console.log("redy");
    $("#show-all-data-one").click(function(){
        console.log("hello kushal")
        input_data = $("#show-all-data-one").text()
        if (input_data=="+"){
            $("#show-all-data-one").text("-")
            $("#experience-details-one").show()


        }
        else{
            $("#show-all-data-one").text("+")
            $("#experience-details-one").hide()
        }

    });

    $("#show-all-data-two").click(function(){
        console.log("hello kushal")
        input_data = $("#show-all-data-two").text()
        if (input_data=="+"){
            $("#show-all-data-two").text("-")
            $("#experience-details-second").show()


        }
        else{
            $("#show-all-data-two").text("+")
            $("#experience-details-second").hide()
        }

    });



});



$(document).ready(function(){

});



