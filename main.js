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

				const user_date = user_month + " " + user_day
				console.log(user_date)

				let data;
				fetch(url) //jquery function that gets a url
					.then(r => r.json())
					.then(d => {
						data = d.feed.entry; //data is an array
					})
					.then(() => {
						const date_data = data.find(row => getData(row, 'date') === user_date); // identifies the row based on user date
						const cases = getData(date_data, 'cases');
						const nyc_la = getData(date_data, 'la'); //captures the 'cases' code from that row
						const nyc_chicago = getData(date_data, 'chicago');
						const nyc_atlanta = getData(date_data, 'atlanta');
						const nyc_washington = getData(date_data, 'washington');
						const nyc_orlando = getData(date_data, 'orlando');
						const stock_aal = getData(date_data, 'aal');
						const stock_alk = getData(date_data, 'alk');
						const stock_dal = getData(date_data, 'dal');
						const stock_luv = getData(date_data, 'luv');
						const stock_ual = getData(date_data, 'ual');
						const comm_flights = getData(date_data, 'flights');

						//////VARIABLE NAMES ARE RIGHT HERE ^//////i.e. console.log(nyc_la) will give you the price for that date///
						data_row = [cases, nyc_la, nyc_chicago, nyc_atlanta, nyc_washington, nyc_orlando, stock_aal, stock_alk, stock_dal, stock_luv, stock_ual, flights]

						console.log(data_row);
						console.log(date_data);

						$(".date.chosen span").text(user_date + ", " + 2020);

						//----flights bar----//

						var flightsDec = parseInt(comm_flights) / 101977;
						var flightsTotalPercent = (parseInt(flightsDec) * 100);

						var flightsTotal = document.getElementById("flights");
						flightsTotal.style.width = flightsTotalPercent + "%";

						console.log(comm_flights);
						console.log(flightsDec);
						console.log(flightsTotalPercent);

						//stocks bars heights//
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

						//fares bars heights//

						var farela = document.getElementById("airfarela");
						farela.style.height = nyc_la + "px";

						var fareCHI = document.getElementById("airfarechi");
						fareCHI.style.height = nyc_chicago + "px";

						var fareATL = document.getElementById("airfareatl");
						fareATL.style.height = nyc_atlanta + "px";

						var fareWAS = document.getElementById("airfarewash");
						fareWAS.style.height = nyc_washington + "px";

						var fareORL = document.getElementById("airfareorl");
						fareORL.style.height = nyc_orlando + "px";

						$(".cases span").text(cases);

						//----------------cases analysis----------------//


						//setting data on top of bars---stocks//
						$("#stockaal p").text(stock_aal);
						$("#stockalk p").text(stock_alk);
						$("#stockdal p").text(stock_dal);
						$("#stockluv p").text(stock_luv);
						$("#stockual p").text(stock_ual);

						//setting data on top of bars---fares//
						$("#airfarela p").text(nyc_la);
						$("#airfarechi p").text(nyc_chicago);
						$("#airfareatl p").text(nyc_atlanta);
						$("#airfarewash p").text(nyc_washington);
						$("#airfareorl p").text(nyc_orlando);

					});

			});

	});


//----code to get date ---//
$("body").on("click", ".navigation button", function (e) {
	e.preventDefault();
	const cliqued = e.target;
	const cliquedId = cliqued.id;
	var dateValue = $(e.target).val();
	dateValue = 0
	var valorTotal = 0

	var valorAcumulado = dateValue + valorAcumulado;
	console.log(valorTotal)
	console.log(dateValue)
});

$(".calendar.month").on("change", "select", function (e) {
	e.preventDefault();
	var monthChosen = $(e.target).val();
	$(".calendar.day").on("change", "select", function (e) {
		var dayChosen = $(e.target).val();
		console.log(dayChosen)
		console.log(monthChosen)

		var dateChosen = monthChosen + " " + dayChosen;
		console.log(dateChosen)
	});

});







//trtr//