$("body").on("click", "button", function (e) {

	const airline = e.target;
	const airlineid = $(airline).val();

	$(".grafica").removeClass("active")
	$(`.grafica.${airlineid}`).addClass("active");

	console.log(airlineid)
});


// Code for slider///
$("body").on("change", ".slider", function (e) {
	const sliderValue = $(e.target).val();
	// code to use slider to navigate//
	var newDate = new Date(2020, 01, 00);
	newDate.setDate(sliderValue);

	//after we got the date we have to change it to a simple format//
	month2 = newDate.getMonth();
	month = newDate.toLocaleString('default', { month: 'long' });
	day = newDate.getDate();
	year = newDate.getFullYear();
	var finalDate = month + " " + day + " " + year;
	var finalDate1 = month2 + "" + day + "" + year;
	//final date//
	$("#dateoutput").text(finalDate);

	//code to make text visible-invisible. get the ID of based on Date//
	var texto = document.getElementById(`${finalDate1}`).innerHTML;
	$("#dateoutput1").text(texto)
	//code to make images visible-invisible//
	$(`.invisible.${finalDate1}`).removeClass("invisible");

});

$("body").on("click", ".graph", function (e) {
	const select = e.target;
	const select2 = select.id

	$(".st4.color").removeClass("color");
	$(`.st4#${select2}`).addClass("color");


	console.log(select2)
});