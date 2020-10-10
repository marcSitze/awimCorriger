var ctx = document.getElementById('line-chart').getContext('2d');
var chart = new Chart(ctx, {
	// The type of chart we want to create
	type: 'line',

	// The data for our dataset
	data: {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [{
			label: "My First dataset",
			backgroundColor: 'rgb(52, 152, 219, 0.2)',
			borderColor: 'rgb(52, 152, 219)',
			data: [0, 10, 5, 2, 20, 30, 45],
        }]
	},

	// Configuration options go here
	options: {}
});