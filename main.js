$("body").on("click", "button", function (e) {

	const airline = e.target;
	const airlineid = $(airline).val();

	$(".grafica").removeClass("active")
	$(`.grafica.${airlineid}`).addClass("active");


	console.log(airlineid)
});