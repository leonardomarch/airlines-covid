//navigation via graph//

$("body").on("click", "svg rect", function (e) {
	e.preventDefault();
	const this_rect = e.target;

	const result = $(this_rect).attr("mydata:name")
	$(this_rect).removeClass("active");
	$(this_rect).addClass("active");


	console.log(result)

});