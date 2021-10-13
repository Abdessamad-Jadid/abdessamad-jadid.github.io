$(document).ready(function () {

    "use strict"

    let inputwidth = null;
    let inputgrowth = null;
    let inputamount = null;
    let inputinterval = null;

    $("#start").click(function () {
        inputwidth = parseInt($("input[name='width']").val());
        inputgrowth = parseInt($("input[name='growth']").val());
        inputamount = parseInt($("input[name='amount']").val());
        inputinterval = parseInt($("input[name='interval']").val());
        for (let i = 1; i < inputamount; i++) {
            createCircle(i, inputwidth);
        }

       setInterval(grow, inputinterval);

        $("div .c").click(function (e) {
            $(e.target).remove();
        });


        $("div .c").on('mouseenter mouseleave', function (e) {
            if (e.type === 'mouseenter')
            {
                $(this).animate({'opacity': '0.5'}, 100);
            }
            else 
              $(this).animate({'opacity': '1'}, 100); 
            });
           

    });

    function grow() {
        let oldsize = parseInt($(".c").css("width"));
        $(".c").css({
            "width": oldsize + inputgrowth + "px",
            "height": oldsize + inputgrowth + "px"
        });
    };

    let randomColor = function () {
        return '#' + ('000000' + Math.floor(Math.random() * 16777215).toString(16)).slice(-6);
    };

    function createCircle(i, width) {
        $("#playground").append($("<div>", {
            "id": "c" + i,
            "class": "c",
            "css": {
                "background-color": randomColor,
                "width": width + "px",
                "z-index": "-" + i,
                "left": (Math.random() * ($(document).width() - width)),
                "top": (Math.random() * ($(document).height() - width))
            },
        }));
    };

});