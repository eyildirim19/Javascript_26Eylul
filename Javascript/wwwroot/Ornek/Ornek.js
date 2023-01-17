


var i = 1;
function Slider() {
    /*var dv = $("#dvS");*/



    var li = $(".list-group-item");
    /* console.log(li);*/
    if (i >= li.length)
        i = 0;

    var r = i * 41;
    /*$("#dvS").css("top", "-" + r + "px");*/
    $("#dvS").animate({
        "top": "-" + r + "px"
    }, 2000);
    i++;
}
