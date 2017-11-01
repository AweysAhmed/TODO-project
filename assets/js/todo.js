$("ul").on("click", "li", function(){
$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(e){

$(this).parent().fadeOut(500, function(){
$(this).remove();
	});
		e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
var todo = $(this).val();
if (e.which === 13) {
$("ul").append("<li><span class='fa fa-trash'></span> "  + todo + "</li>");
$(this).val("");
}
});



