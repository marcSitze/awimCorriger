new Chart(document.getElementById("bar-chart"), {
	type: 'bar',
	data: {
		labels: ["Shavers", "Soap", "Water", "Coke"],
		datasets: [
			{
				label: "Products Ordered",
				backgroundColor: ["#3498db", "#3498db", "#3498db", "#3498db"],
				data: [45, 100, 120, 200]
        }
      ]
	},
	options: {
		legend: {
			display: false
		},
		title: {
			display: true,
			text: 'Predicted Sales'
		}
	}
});
