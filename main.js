//navigation via graph//

$("body").on("click", "svg rect", function (e) {
	e.preventDefault();
	const this_rect = e.target;

	const stock = $(this_rect).attr("mydata:stock");
	const fare = $(this_rect).attr("mydata:fare");
	const cases = $(this_rect).attr("mydata:cases");

	//change scale//
	if (cases >= 1 && cases <= 10) {
		$("#personscale").text("x1");
	} else if (cases >= 11 && cases <= 100) {
		$("#personscale").text("X10+");
	} else if (cases >= 101 && cases <= 1000) {
		$("#personscale").text("x100+");
	} else if (cases >= 1001 && cases <= 10000) {
		$("#personscale").text("x1000+");
	} else if (cases >= 10001 && cases <= 10000) {
		$("#personscale").text("x10000+");
	} else if (100001 >= cases <= 1000000) {
		$("#personscale").text("x100000+");
	}
	console.log(cases)

	$("rect").removeClass("active")
	$(this_rect).addClass("active");

	$("#fareoutput span").text(fare);
	$("#stockoutput span").text(stock);
	$("#casesoutput span").text(cases);
	console.log(stock)

	//navigation via buttons//

	//change Viewbox//
	//shape = document.getElementsByTagName("svg")[0];
	//shape.setAttribute("viewBox", "-180 -10 1077.88 407.69");

	//navigation via buttons//

	//change height of stock prices//

	var newHeight = document.getElementById("stock1");
	newHeight.style.height = stock + "px";

	var newHeight = document.getElementById("stock2");
	newHeight.style.height = fare + "px";

	var newHeight = document.getElementById("stock3");
	newHeight.style.height = cases + "px";

	$("#stock2 span").text(fare);
	$("#stock1 span").text(stock);
	$("#stock3 span").text(cases);

	//VIsual cases//

	var person = document.getElementById("person1");

	for (let i = 1; i < 10; i++) {

		var outPerson = person.cloneNode(true)
		$("#casesoutput").append(outPerson);
	}





});