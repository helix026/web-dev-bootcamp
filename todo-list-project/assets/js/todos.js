$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event) {
    event.stopPropagation();
    $(this).parent().fadeOut(300, function () {
        $(this).remove();
    });
});

$("input[type='text']").keypress(function(event) {
    if(event.which === 13) {
        var task = $(this).val();
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + task + "</li>");
        $(this).val("");
    }
});

$(".fa-pencil-square-o").click(function() {
    $("input[type='text']").fadeToggle();
})