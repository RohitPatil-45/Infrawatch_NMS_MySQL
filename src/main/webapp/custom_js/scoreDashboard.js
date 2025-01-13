window.onload = function() {

	solidgaugeone();
	solidgaugetwo();

	AverageCPUData();
	AverageMemoryData();
	AverageTempData();

	// containerlinegraphone();
	containerbarghraphone();

	containerlinegraphtwo();

	containerspeedthree();
	containerlinegraphthree();

}

function containerlinegraphthree() {
	var data = [
	// Data for 1st January 2025
	{
		"Timestamp" : "10:04 01/01/25",
		"Responsetime" : "5",
		"Throughput" : "50"
	}, {
		"Timestamp" : "10:50 01/01/25",
		"Responsetime" : "6",
		"Throughput" : "60"
	}, {
		"Timestamp" : "11:06 01/01/25",
		"Responsetime" : "6",
		"Throughput" : "58"
	}, {
		"Timestamp" : "11:34 01/01/25",
		"Responsetime" : "10",
		"Throughput" : "52"
	},

	// Data for 2nd January 2025
	{
		"Timestamp" : "04:21 02/01/25",
		"Responsetime" : "15",
		"Throughput" : "48"
	}, {
		"Timestamp" : "04:51 02/01/25",
		"Responsetime" : "15",
		"Throughput" : "49"
	}, {
		"Timestamp" : "05:22 02/01/25",
		"Responsetime" : "14",
		"Throughput" : "50"
	},

	// Data for 3rd January 2025
	{
		"Timestamp" : "10:04 03/01/25",
		"Responsetime" : "5",
		"Throughput" : "53"
	}, {
		"Timestamp" : "10:50 03/01/25",
		"Responsetime" : "6",
		"Throughput" : "57"
	}, {
		"Timestamp" : "11:06 03/01/25",
		"Responsetime" : "6",
		"Throughput" : "55"
	},

	// Data for 4th January 2025
	{
		"Timestamp" : "04:21 04/01/25",
		"Responsetime" : "15",
		"Throughput" : "45"
	}, {
		"Timestamp" : "05:07 04/01/25",
		"Responsetime" : "15",
		"Throughput" : "47"
	}, {
		"Timestamp" : "05:22 04/01/25",
		"Responsetime" : "14",
		"Throughput" : "46"
	},

	// Data for 5th January 2025
	{
		"Timestamp" : "10:04 05/01/25",
		"Responsetime" : "7",
		"Throughput" : "51"
	}, {
		"Timestamp" : "10:35 05/01/25",
		"Responsetime" : "9",
		"Throughput" : "55"
	},

	// Data for 6th January 2025
	{
		"Timestamp" : "11:06 06/01/25",
		"Responsetime" : "7",
		"Throughput" : "50"
	}, {
		"Timestamp" : "11:21 06/01/25",
		"Responsetime" : "6",
		"Throughput" : "52"
	},

	// Data for 7th January 2025
	{
		"Timestamp" : "10:04 07/01/25",
		"Responsetime" : "6",
		"Throughput" : "53"
	}, {
		"Timestamp" : "10:35 07/01/25",
		"Responsetime" : "6",
		"Throughput" : "54"
	},

	// Data for 8th January 2025
	{
		"Timestamp" : "04:21 08/01/25",
		"Responsetime" : "5",
		"Throughput" : "55"
	}, {
		"Timestamp" : "04:36 08/01/25",
		"Responsetime" : "5",
		"Throughput" : "56"
	}, {
		"Timestamp" : "04:51 08/01/25",
		"Responsetime" : "6",
		"Throughput" : "58"
	} ];

	function sortSeriesDataByName(aSeries) {
		aSeries.data.sort(function(a, b) {
			return a[0] - b[0];
		});
	}

	var series = [ {
		name : "Response Time",
		data : []
	}, {
		name : "Throughput",
		data : []
	} ];

	// Parse the Timestamp into a Date object and push data into the series
	data
			.forEach(function(dataEl) {
				var timestampParts = dataEl.Timestamp.split(" "); // Splitting
				// the date
				// and time
				// part
				var dateParts = timestampParts[1].split("/"); // Extract day,
				// month, and
				// year
				var timeParts = timestampParts[0].split(":"); // Extract hour
				// and minutes

				var timestamp = new Date("20" + dateParts[2], dateParts[0] - 1,
						dateParts[1], timeParts[0], timeParts[1]);

				// Push Response Time and Throughput data into respective series
				series[0].data.push([ timestamp.getTime(),
						Number(dataEl.Responsetime) ]);
				series[1].data.push([ timestamp.getTime(),
						Number(dataEl.Throughput) ]);
			});

	// Sorting the series data by time
	series.forEach(sortSeriesDataByName);

	// Create the Highcharts chart
	Highcharts.chart('containerlinegraph003', {
		chart : {
			height : '45%', // Set height to 50% of the container
			width : null
		// Fit the chart to the container's width
		},
		title : {
			text : 'Average Response Time and Throughput Metrics', // Title
			style : {
				fontWeight : '100' // Set the font weight to 100 (light bold)
			}
		},
		series : series,
		yAxis : [ {
			title : {
				text : 'Response Time (ms)' // Title for the Y-axis for response
			// time
			}
		}, {
			title : {
				text : 'Throughput (Mbps)' // Title for the Y-axis for
			// throughput
			},
			opposite : true
		// Display this axis on the opposite side
		} ],
		xAxis : {
			type : 'datetime',
			title : {
				text : 'Timestamp' // Title for the X-axis
			},
			labels : {
				format : '{value:%d/%m/%y}' // Format for x-axis labels:
			// "dd/MM/yy"
			}
		},
		exporting : {
			enabled : false
		},
		legend : {
			enabled : true, // Enable the legend for both response time and
			// throughput
			align : 'right', // Position legend to the right
			verticalAlign : 'middle', // Align legend vertically in the center
			layout : 'vertical' // Arrange legend items vertically
		}
	});
}

function containerspeedthree() {

	const gaugeOptions = {
		chart : {
			type : 'solidgauge',
			height : '40%',
			backgroundColor : 'rgba(255, 255, 255, 0.0)',
		},

		title : {
			text : 'Average Storage Utilization', // Add your desired title
			// here
			style : {
				fontWeight : '100' // Set the font weight to 100 (light bold)
			}
		},

		pane : {
			center : [ '50%', '85%' ],
			size : '140%',
			startAngle : -90,
			endAngle : 90,
			background : {
				backgroundColor : Highcharts.defaultOptions.legend.backgroundColor
						|| '#fafafa',
				borderRadius : 5,
				innerRadius : '60%',
				outerRadius : '100%',
				shape : 'arc'
			}
		},

		exporting : {
			enabled : false
		},

		tooltip : {
			enabled : false
		},

		// the value axis
		yAxis : {
			stops : [ [ 0.1, '#2dce89' ], // green
			[ 0.2, '#2dce89' ], [ 0.3, '#2dce89' ], [ 0.4, '#2dce89' ],

			[ 0.5, '#fb6340' ], // yellow
			[ 0.6, '#fb6340' ], [ 0.7, '#fb6340' ], [ 0.8, '#fb6340' ],
					[ 0.9, '#f5365c' ] // red
			],
			lineWidth : 0,
			tickWidth : 0,
			minorTickInterval : null,
			tickAmount : 2,
			title : {
				y : -70
			},
			labels : {
				y : 16
			}
		},

		plotOptions : {
			solidgauge : {
				borderRadius : 3,
				dataLabels : {
					y : 5,
					borderWidth : 0,
					useHTML : true
				}
			}
		}
	};

	// The speed gauge
	const chartSpeed = Highcharts
			.chart(
					'container-speed003',
					Highcharts
							.merge(
									gaugeOptions,
									{
										yAxis : {
											min : 0,
											max : 100,
											title : {
												text : ''
											}
										},

										credits : {
											enabled : false
										},

										series : [ {
											name : 'Average Memory',
											data : [ 50 ],
											dataLabels : {
												format : '<div style="text-align:center">'
														+ '<span style="font-size:25px">{y}</span><br/>'
														+ '<span style="font-size:12px;opacity:0.4">%</span>'
														+ '</div>'
											},
											tooltip : {
												valueSuffix : ' km/h'
											}
										} ]

									}));

	// Bring life to the dials

}

function containerlinegraphtwo() {
	var data = [
	// Data for 1st January 2025
	{
		"Timestamp" : "10:04 01/01/25",
		"Responsetime" : "5"
	}, {
		"Timestamp" : "10:50 01/01/25",
		"Responsetime" : "6"
	}, {
		"Timestamp" : "11:06 01/01/25",
		"Responsetime" : "6"
	}, {
		"Timestamp" : "11:34 01/01/25",
		"Responsetime" : "10"
	},

	// Data for 2nd January 2025
	{
		"Timestamp" : "04:21 02/01/25",
		"Responsetime" : "15"
	}, {
		"Timestamp" : "04:51 02/01/25",
		"Responsetime" : "15"
	}, {
		"Timestamp" : "05:22 02/01/25",
		"Responsetime" : "14"
	},

	// Data for 3rd January 2025
	{
		"Timestamp" : "10:04 03/01/25",
		"Responsetime" : "5"
	}, {
		"Timestamp" : "10:50 03/01/25",
		"Responsetime" : "6"
	}, {
		"Timestamp" : "11:06 03/01/25",
		"Responsetime" : "6"
	},

	// Data for 4th January 2025
	{
		"Timestamp" : "04:21 04/01/25",
		"Responsetime" : "15"
	}, {
		"Timestamp" : "05:07 04/01/25",
		"Responsetime" : "15"
	}, {
		"Timestamp" : "05:22 04/01/25",
		"Responsetime" : "14"
	},

	// Data for 5th January 2025
	{
		"Timestamp" : "10:04 05/01/25",
		"Responsetime" : "7"
	}, {
		"Timestamp" : "10:35 05/01/25",
		"Responsetime" : "9"
	},

	// Data for 6th January 2025
	{
		"Timestamp" : "11:06 06/01/25",
		"Responsetime" : "7"
	}, {
		"Timestamp" : "11:21 06/01/25",
		"Responsetime" : "6"
	},

	// Data for 7th January 2025
	{
		"Timestamp" : "10:04 07/01/25",
		"Responsetime" : "6"
	}, {
		"Timestamp" : "10:35 07/01/25",
		"Responsetime" : "6"
	},

	// Data for 8th January 2025
	{
		"Timestamp" : "04:21 08/01/25",
		"Responsetime" : "5"
	}, {
		"Timestamp" : "04:36 08/01/25",
		"Responsetime" : "5"
	}, {
		"Timestamp" : "04:51 08/01/25",
		"Responsetime" : "6"
	} ];

	function sortSeriesDataByName(aSeries) {
		aSeries.data.sort(function(a, b) {
			return a[0] - b[0];
		});
	}

	var series = [ {
		name : "Responsetime",
		data : []
	} ];

	// Parse the Timestamp into a Date object and push data into the series
	data.forEach(function(dataEl) {
		var timestampParts = dataEl.Timestamp.split(" "); // Splitting the
		// date and time
		// part
		var dateParts = timestampParts[1].split("/"); // Extract day, month,
		// and year
		var timeParts = timestampParts[0].split(":"); // Extract hour and
		// minutes

		var timestamp = new Date("20" + dateParts[2], dateParts[0] - 1,
				dateParts[1], timeParts[0], timeParts[1]);

		series[0].data
				.push([ timestamp.getTime(), Number(dataEl.Responsetime) ]);
	});

	// Sorting the series data by time
	series.forEach(sortSeriesDataByName);

	// Create the Highcharts chart
	Highcharts.chart('containerlinegraph002', {
		chart : {
			height : '70%', // Set height to 50% of the container
			width : null
		// Fit the chart to the container's width
		},
		title : {
			text : 'Average Response Time Metrics', // Add your desired title
			style : {
				fontWeight : '100' // Set the font weight to 100 (light bold)
			}
		},
		series : series,
		yAxis : [ {
			title : {
				text : 'Response Time (ms)' // Title for the Y-axis
			}
		} ],
		xAxis : {
			type : 'datetime',
			title : {
				text : 'Timestamp' // Title for the X-axis
			},
			labels : {
				format : '{value:%d/%m/%y}' // Format for x-axis labels:
			// "dd/MM/yy"
			}
		},
		exporting : {
			enabled : false
		},
		legend : {
			enabled : false, // Enable legend for uptime and downtime
			align : 'right', // Position legend to the right
			verticalAlign : 'middle', // Align legend vertically in the center
			layout : 'vertical' // Arrange legend items vertically
		}
	});
}

function containerbarghraphone() {
	Highcharts.chart('container-barghraph001', {
		chart : {
			type : "column",
			marginBottom : 50,
			height : '50%', // Set height to 60% of the container
			width : null
		},
		title : {
			text : 'Average Uptime & Downtime', // Add your desired title here
			style : {
				fontWeight : '100' // Set the font weight to 100 (light bold)
			}
		},
		exporting : {
			enabled : false
		},
		legend : {
			enabled : true, // Enable legend for uptime and downtime
			align : 'right', // Position legend to the right
			verticalAlign : 'middle', // Align legend vertically in the center
			layout : 'vertical' // Arrange legend items vertically
		},
		xAxis : {
			type : 'datetime',
			title : {
				text : 'Date'
			},
			labels : {
				format : '{value:%e %b %Y}' // Display the date in "dd MMM yyyy"
			// format
			},
			tickInterval : 24 * 3600 * 1000
		// One day interval
		},
		yAxis : {
			title : {
				text : 'Percentage (%)'
			},
			max : 100
		// Limit to 100% since it's uptime/downtime percentages
		},
		series : [
				{
					name : 'Uptime (%)',
					color : '#2dce89',
					data : [ [ Date.UTC(2025, 0, 1), 95 ],
							[ Date.UTC(2025, 0, 2), 98 ],
							[ Date.UTC(2025, 0, 3), 96 ],
							[ Date.UTC(2025, 0, 4), 97 ],
							[ Date.UTC(2025, 0, 5), 94 ],
							[ Date.UTC(2025, 0, 6), 99 ],
							[ Date.UTC(2025, 0, 7), 95 ],
							[ Date.UTC(2025, 0, 8), 96 ] ]
				},
				{
					name : 'Downtime (%)',
					color : '#f5365c',
					data : [ [ Date.UTC(2025, 0, 1), 5 ],
							[ Date.UTC(2025, 0, 2), 2 ],
							[ Date.UTC(2025, 0, 3), 4 ],
							[ Date.UTC(2025, 0, 4), 3 ],
							[ Date.UTC(2025, 0, 5), 6 ],
							[ Date.UTC(2025, 0, 6), 1 ],
							[ Date.UTC(2025, 0, 7), 5 ],
							[ Date.UTC(2025, 0, 8), 4 ] ]
				} ]
	});

}

function containerlinegraphone() {

	var data = [ {
		"Timestamp" : "10:04 02/01/25",
		"NetworkBandwidth" : "5",
		"PacketLoss" : "66",
		"Latency" : "66"
	}, {
		"Timestamp" : "10:19 02/01/25",
		"NetworkBandwidth" : "6",
		"PacketLoss" : "65",
		"Latency" : "66"
	}, {
		"Timestamp" : "10:35 02/01/25",
		"NetworkBandwidth" : "6",
		"PacketLoss" : "64",
		"Latency" : "66"
	}, {
		"Timestamp" : "10:50 02/01/25",
		"NetworkBandwidth" : "6",
		"PacketLoss" : "64",
		"Latency" : "66"
	}, {
		"Timestamp" : "11:06 02/01/25",
		"NetworkBandwidth" : "6",
		"PacketLoss" : "64",
		"Latency" : "66"
	}, {
		"Timestamp" : "11:21 02/01/25",
		"NetworkBandwidth" : "7",
		"PacketLoss" : "63",
		"Latency" : "66"
	}, {
		"Timestamp" : "11:34 02/01/25",
		"NetworkBandwidth" : "10",
		"PacketLoss" : "66",
		"Latency" : "66"
	}, {
		"Timestamp" : "04:21 02/01/25",
		"NetworkBandwidth" : "15",
		"PacketLoss" : "64",
		"Latency" : "66"
	}, {
		"Timestamp" : "04:36 02/01/25",
		"NetworkBandwidth" : "16",
		"PacketLoss" : "61",
		"Latency" : "66"
	}, {
		"Timestamp" : "04:51 02/01/25",
		"NetworkBandwidth" : "15",
		"PacketLoss" : "59",
		"Latency" : "66"
	}, {
		"Timestamp" : "05:07 02/01/25",
		"NetworkBandwidth" : "15",
		"PacketLoss" : "60",
		"Latency" : "66"
	}, {
		"Timestamp" : "05:22 02/01/25",
		"NetworkBandwidth" : "14",
		"PacketLoss" : "61",
		"Latency" : "66"
	} ];

	function sortSeriesDataByName(aSeries) {
		aSeries.data.sort(function(a, b) {
			return a[0] - b[0];
		});
	}

	var series = [ {
		name : "Average Network Bandwidth",
		data : []
	}, {
		name : "Packet Loss",
		data : [],
		yAxis : 1
	}, {
		name : "Latency",
		data : [],
		yAxis : 1
	} ];

	data.forEach(function(dataEl) {
		series[0].data.push([ new Date(dataEl.Timestamp).getTime(),
				Number(dataEl.NetworkBandwidth) ]);
		series[1].data.push([ new Date(dataEl.Timestamp).getTime(),
				Number(dataEl.PacketLoss) ]);
		series[2].data.push([ new Date(dataEl.Timestamp).getTime(),
				Number(dataEl.Latency) ]);
	});

	series.forEach(sortSeriesDataByName);

	Highcharts.chart('containerlinegraph001', {
		chart : {

			height : '45%', // Set height to 30% of the container
			width : null
		// Allow the chart to fit the container's width
		},
		title : {
			text : 'Network Performance Metrics', // Add your desired title
			// here
			style : {
				fontWeight : '100' // Set the font weight to 100 (light bold)
			}
		},
		series : series,
		yAxis : [ {
			title : {
				text : 'Network Bandwidth'
			}
		}, {
			title : {
				text : 'Packet Loss'
			},
			opposite : true
		}, {
			title : {
				text : 'Latency'
			},
			opposite : true
		} ],
		xAxis : {
			type : 'datetime'
		},
		exporting : {
			enabled : false
		}
	});

}

function AverageTempData() {

	var l = window.location;
	var base_url = l.protocol + "//" + l.host + "/" + l.pathname.split('/')[1];
	var serviceUrl = base_url + "/dashboard/AverageTempDataScore";
	$.ajax({
		type : 'GET',
		url : serviceUrl,
		dataType : 'json',
		success : function(data) {

			AverageTemp(data[0]);

		}
	});

}

function AverageTemp(Tempdata) {
	Highcharts
			.chart(
					'container-AverageTemp',
					{
						chart : {
							inverted : true,
							marginLeft : 135,
							type : 'bullet',
							marginTop : 40,
							height : '18%', // Set height to 30% of the
							// container
							width : null,
							backgroundColor : 'rgba(255, 255, 255, 0.0)',
						},
						title : {
							text : 'Average Temperature',
							style : {
								fontWeight : '100' // Set the font weight to
							// 100 (light bold)
							}
						},
						xAxis : {
							categories : [ '<span class="hc-cat-title">Temperature</span><br/>Degree Celsius' ]
						},
						yAxis : {
							gridLineWidth : 0,
							plotBands : [ {
								from : 0,
								to : 27,
								color : '#2dce89'
							}, {
								from : 27,
								to : 40,
								color : '#ffd928'
							}, {
								from : 40,
								to : 9e9,
								color : '#f5365c'
							} ],
							title : null
						},
						plotOptions : {
							series : {
								pointPadding : 0.25,
								borderWidth : 0,
								color : '#000',
								targetOptions : {
									width : '200%'
								}
							}
						},
						series : [ {
							data : [ {
								y : Tempdata
							} ]
						} ],
						tooltip : {
							pointFormat : '<b>{point.y}</b>'
						},
						legend : {
							enabled : false
						},
						credits : {
							enabled : false
						},
						exporting : {
							enabled : false
						}
					});

}

function AverageMemoryData() {

	var l = window.location;
	var base_url = l.protocol + "//" + l.host + "/" + l.pathname.split('/')[1];
	var serviceUrl = base_url + "/dashboard/AverageMemoryDataScore";
	$.ajax({
		type : 'GET',
		url : serviceUrl,
		dataType : 'json',
		success : function(data) {

			AverageMemory(data);

		}
	});

}

function AverageMemory(memorydata) {

	const gaugeOptions = {
		chart : {
			type : 'solidgauge',
			height : '70%',
			backgroundColor : 'rgba(255, 255, 255, 0.0)',
		},

		title : {
			text : 'Average Memory Used', // Add your desired title
			// here
			style : {
				fontWeight : '100' // Set the font weight to 100 (light bold)
			}
		},

		pane : {
			center : [ '50%', '85%' ],
			size : '140%',
			startAngle : -90,
			endAngle : 90,
			background : {
				backgroundColor : Highcharts.defaultOptions.legend.backgroundColor
						|| '#fafafa',
				borderRadius : 5,
				innerRadius : '60%',
				outerRadius : '100%',
				shape : 'arc'
			}
		},

		exporting : {
			enabled : false
		},

		tooltip : {
			enabled : false
		},

		// the value axis
		yAxis : {
			stops : [ [ 0.1, '#2dce89' ], // green
			[ 0.2, '#2dce89' ], [ 0.3, '#2dce89' ], [ 0.4, '#2dce89' ],

			[ 0.5, '#fb6340' ], // yellow
			[ 0.6, '#fb6340' ], [ 0.7, '#fb6340' ], [ 0.8, '#fb6340' ],
					[ 0.9, '#f5365c' ] // red
			],
			lineWidth : 0,
			tickWidth : 0,
			minorTickInterval : null,
			tickAmount : 2,
			title : {
				y : -70
			},
			labels : {
				y : 16
			}
		},

		plotOptions : {
			solidgauge : {
				borderRadius : 3,
				dataLabels : {
					y : 5,
					borderWidth : 0,
					useHTML : true
				}
			}
		}
	};

	// The speed gauge
	const chartSpeed = Highcharts
			.chart(
					'container-AverageMemory',
					Highcharts
							.merge(
									gaugeOptions,
									{
										yAxis : {
											min : 0,
											max : 100,
											title : {
												text : ''
											}
										},

										credits : {
											enabled : false
										},

										series : [ {
											name : 'Average Memory Used',
											data : memorydata,
											dataLabels : {
												format : '<div style="text-align:center">'
														+ '<span style="font-size:25px">{y}</span><br/>'
														+ '<span style="font-size:12px;opacity:0.4">%</span>'
														+ '</div>'
											},
											tooltip : {
												valueSuffix : ' km/h'
											}
										} ]

									}));

	// Bring life to the dials

}

function AverageCPUData() {

	var l = window.location;
	var base_url = l.protocol + "//" + l.host + "/" + l.pathname.split('/')[1];
	var serviceUrl = base_url + "/dashboard/AverageCPUDataScore";
	$.ajax({
		type : 'GET',
		url : serviceUrl,
		dataType : 'json',
		success : function(data) {

			AverageCPU(data);

		}
	});

}

function AverageCPU(cpudata) {

	const gaugeOptions = {
		chart : {
			type : 'solidgauge',
			height : '70%',
			backgroundColor : 'rgba(255, 255, 255, 0.0)',
		},

		title : {
			text : 'Average CPU Utilization', // Add your desired title
			// here
			style : {
				fontWeight : '100' // Set the font weight to 100 (light bold)
			}
		},

		pane : {
			center : [ '50%', '85%' ],
			size : '140%',
			startAngle : -90,
			endAngle : 90,
			background : {
				backgroundColor : Highcharts.defaultOptions.legend.backgroundColor
						|| '#fafafa',
				borderRadius : 5,
				innerRadius : '60%',
				outerRadius : '100%',
				shape : 'arc'
			}
		},

		exporting : {
			enabled : false
		},

		tooltip : {
			enabled : false
		},

		// the value axis
		yAxis : {
			stops : [ [ 0.1, '#2dce89' ], // green
			[ 0.2, '#2dce89' ], [ 0.3, '#2dce89' ], [ 0.4, '#2dce89' ],

			[ 0.5, '#fb6340' ], // yellow
			[ 0.6, '#fb6340' ], [ 0.7, '#fb6340' ], [ 0.8, '#fb6340' ],
					[ 0.9, '#f5365c' ] // red
			],
			lineWidth : 0,
			tickWidth : 0,
			minorTickInterval : null,
			tickAmount : 2,
			title : {
				y : -70
			},
			labels : {
				y : 16
			}
		},

		plotOptions : {
			solidgauge : {
				borderRadius : 3,
				dataLabels : {
					y : 5,
					borderWidth : 0,
					useHTML : true
				}
			}
		}
	};

	// The speed gauge
	const chartSpeed = Highcharts
			.chart(
					'container-AverageCPU',
					Highcharts
							.merge(
									gaugeOptions,
									{
										yAxis : {
											min : 0,
											max : 100,
											title : {
												text : ''
											}
										},

										credits : {
											enabled : false
										},

										series : [ {
											name : 'Average CPU Utilization',
											data : cpudata,
											dataLabels : {
												format : '<div style="text-align:center">'
														+ '<span style="font-size:25px">{y}</span><br/>'
														+ '<span style="font-size:12px;opacity:0.4">%</span>'
														+ '</div>'
											},
											tooltip : {
												valueSuffix : ' km/h'
											}
										} ]

									}));

	// Bring life to the dials

}

function solidgaugetwo() {

	Highcharts.chart('solidgauge02', {

		chart : {
			type : 'solidgauge',
			height : '50%',

		},
		navigation : {
			buttonOptions : {
				enabled : false
			}
		},

		title : {
			text : 'Security & Capacity',
			style : {
				fontSize : '20px',
				color : 'rgb(97 97 97 / 65%)',

			}
		},

		tooltip : {
			borderWidth : 0,
			backgroundColor : 'none',
			shadow : false,
			style : {
				fontSize : '12px'
			},
			valueSuffix : '%',
			pointFormat : '{series.name}<br>'
					+ '<span style="font-size: 2em; color: {point.color}; '
					+ 'font-weight: bold">{point.y}</span>',
			positioner : function(labelWidth) {
				return {
					x : (this.chart.chartWidth - labelWidth) / 2,
					y : (this.chart.plotHeight / 2) + 15
				};
			}
		},

		pane : {
			startAngle : 0,
			endAngle : 360,
			background : [ { // Track for Conversion
				outerRadius : '112%',
				innerRadius : '88%',
				backgroundColor : 'none',
				borderWidth : 0
			}, { // Track for Engagement
				outerRadius : '87%',
				innerRadius : '63%',
				backgroundColor : 'none',
				borderWidth : 0
			} ]
		},

		yAxis : {
			min : 0,
			max : 100,
			lineWidth : 0,
			tickPositions : []
		},

		plotOptions : {
			solidgauge : {
				dataLabels : {
					enabled : false
				},
				linecap : 'round',
				stickyTracking : false,
				rounded : true
			}
		},

		series : [ {
			name : 'Security',
			data : [ {
				color : '#fb6340',
				radius : '112%',
				innerRadius : '88%',
				y : 70
			} ],
			custom : {
				icon : 'filter',
				iconColor : '#303030'
			}
		}, {
			name : 'Capacity',
			data : [ {
				color : '#f5365c',
				radius : '87%',
				innerRadius : '63%',
				y : 30
			} ],
			custom : {
				icon : 'comments-o',
				iconColor : '#ffffff'
			}
		} ]
	});

}
function solidgaugeone() {

	Highcharts.chart('solidgauge01', {

		chart : {
			type : 'solidgauge',
			height : '50%',

		},
		navigation : {
			buttonOptions : {
				enabled : false
			}
		},

		title : {
			text : 'Performance & Availability',
			style : {
				fontSize : '20px',
				color : 'rgb(97 97 97 / 65%)',

			}
		},

		tooltip : {
			borderWidth : 0,
			backgroundColor : 'none',
			shadow : false,
			style : {
				fontSize : '12px'
			},
			valueSuffix : '%',
			pointFormat : '{series.name}<br>'
					+ '<span style="font-size: 2em; color: {point.color}; '
					+ 'font-weight: bold">{point.y}</span>',
			positioner : function(labelWidth) {
				return {
					x : (this.chart.chartWidth - labelWidth) / 2,
					y : (this.chart.plotHeight / 2) + 15
				};
			}
		},

		pane : {
			startAngle : 0,
			endAngle : 360,
			background : [ { // Track for Conversion
				outerRadius : '112%',
				innerRadius : '88%',
				backgroundColor : 'none',
				borderWidth : 0
			}, { // Track for Engagement
				outerRadius : '87%',
				innerRadius : '63%',
				backgroundColor : 'none',
				borderWidth : 0
			} ]
		},

		yAxis : {
			min : 0,
			max : 100,
			lineWidth : 0,
			tickPositions : []
		},

		plotOptions : {
			solidgauge : {
				dataLabels : {
					enabled : false
				},
				linecap : 'round',
				stickyTracking : false,
				rounded : true
			}
		},

		series : [ {
			name : 'Performance',
			data : [ {
				color : '#fb6340',
				radius : '112%',
				innerRadius : '88%',
				y : 70
			} ],
			custom : {
				icon : 'filter',
				iconColor : '#303030'
			}
		}, {
			name : 'Availability',
			data : [ {
				color : '#2dce89',
				radius : '87%',
				innerRadius : '63%',
				y : 93.33
			} ],
			custom : {
				icon : 'comments-o',
				iconColor : '#ffffff'
			}
		} ]
	});

}
