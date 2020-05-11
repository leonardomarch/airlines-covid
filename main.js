function getData(entry, property) { // This is a function for retrieving info from json that we get from Google Sheets. Thank you, TC for this one!
	property = property.replace(/[^A-Za-z0-9]+/, "").toLowerCase(); //puts things in lower case and removes non-alphanumeric characters
	const item = entry[`gsx$${property}`];
	if (item.$t) {
		return item.$t;
	}
	return item;
}


url = "https://spreadsheets.google.com/feeds/list/11wEkIEQvgr3slnlOHbtGBbzPY7M18q0NkPvNMTJYn1Q/1/public/values?alt=json" //url for airline data//
$(".calendar.month").on("change", "select",
	function (e) {
		user_month = $(this).val() //working!//

		$(".calendar.day").on("change", "select",
			function (e) {
				user_day = $(this).val() //working!//

				user_date = user_month + " " + user_day
				console.log(user_date)

				let data;
				fetch(url) //jquery function that gets a url
					.then(r => r.json())
					.then(d => {
						data = d.feed.entry; //data is an array
					})
					.then(() => {
						const date_data = data.filter(row => getData(row, 'date') === user_date); // identifies the row based on user date
						date_data.forEach(date => cases = (getData(date, 'cases'))) //captures the 'cases' code from that row
						date_data.forEach(date => nyc_la = (getData(date, 'la'))) //captures the 'cases' code from that row
						date_data.forEach(date => nyc_chicago = (getData(date, 'chicago'))) //captures the 'cases' code from that row
						date_data.forEach(date => nyc_atlanta = (getData(date, 'atlanta'))) //captures the 'cases' code from that row
						date_data.forEach(date => nyc_washington = (getData(date, 'washington'))) //captures the 'cases' code from that row
						date_data.forEach(date => nyc_orlando = (getData(date, 'orlando'))) //captures the 'cases' code from that row
						date_data.forEach(date => stock_aal = (getData(date, 'aal'))) //captures the 'cases' code from that row
						date_data.forEach(date => stock_alk = (getData(date, 'alk'))) //captures the 'cases' code from that row
						date_data.forEach(date => stock_dal = (getData(date, 'dal'))) //captures the 'cases' code from that row
						date_data.forEach(date => stock_luv = (getData(date, 'luv'))) //captures the 'cases' code from that row
						date_data.forEach(date => stock_ual = (getData(date, 'ual'))) //captures the 'cases' code from that row
						//////VARIABLE NAMES ARE RIGHT HERE ^//////i.e. console.log(nyc_la) will give you the price for that date///
						data_row = [cases, nyc_la, nyc_chicago, nyc_atlanta, nyc_washington, nyc_orlando, stock_aal, stock_alk, stock_dal, stock_luv, stock_ual]
						console.log(data_row)
						console.log(date_data)

						$(".date.chosen span").text(date_data);


						//stocks//
						var stockAAL = document.getElementById("stockaal");
						stockAAL.style.height = stock_aal + "px";

						var stockALK = document.getElementById("stockalk");
						stockALK.style.height = stock_alk + "px";

						var stockDAL = document.getElementById("stockdal");
						stockDAL.style.height = stock_dal + "px";

						var stockLUV = document.getElementById("stockluv");
						stockLUV.style.height = stock_luv + "px";

						var stockUAL = document.getElementById("stockual");
						stockUAL.style.height = stock_ual + "px";

						//fares//

						var farela = document.getElementById("airfarecla");
						farela.style.width = nyc_la + "px";

						var fareCHI = document.getElementById("airfarechi");
						fareCHI.style.width = nyc_chicago + "px";

						var fareATL = document.getElementById("airfareatl");
						fareATL.style.width = nyc_atlanta + "px";

						var fareWAS = document.getElementById("airfarewash");
						fareWAS.style.width = nyc_washington + "px";

						var fareORL = document.getElementById("airfareorl");
						fareORL.style.width = nyc_atlanta + "px";

					});
				console.log(nyc_chicago)

			});
	});


//navigation via graph//

$("body").on("click", "svg rect", function (e) {
	e.preventDefault();
	const this_rect = e.target;

	const stock = $(this_rect).attr("mydata:stock");
	console.log(stock)
	const fare = $(this_rect).attr("mydata:fare");
	console.log(fare)
	const cases = $(this_rect).attr("mydata:cases");
	console.log(cases)



	//change scale values//
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

	//change color of data points on graph//
	$("rect").removeClass("active")
	$(this_rect).addClass("active");

	$("#fareoutput span").text(fare);
	$("#stockoutput span").text(stock);
	$("#casesoutput span").text(cases);


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

	//Visualization of cases//

	var person = document.getElementById("person1");

	for (let i = 1; i < 10; i++) {

		var outPerson = person.cloneNode(true)
		$("#casesoutput").append(outPerson);
	}

});

//navigation via buttons//







//change Viewbox//
//shape = document.getElementsByTagName("svg")[0];
//shape.setAttribute("viewBox", "-180 -10 1077.88 407.69");

//navigation via buttons//