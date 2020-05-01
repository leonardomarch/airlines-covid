//navigation via graph//

$("body").on("click", "svg rect", function (e) {
	e.preventDefault();
	const this_rect = e.target;

	const stock = $(this_rect).attr("mydata:stock");
	const fare = $(this_rect).attr("mydata:fare");
	const cases = $(this_rect).attr("mydata:cases");

	$("rect").removeClass("active")
	$(this_rect).addClass("active");

	$("#fareoutput").text(fare);
	$("#stockoutput").text(stock);
	$("#casesoutput").text(cases);

	console.log(airfare + stock)

});

//navigation via buttons//