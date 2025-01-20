window.onload = function() {
	prefixByUpdates();
	prefixByWithdraws();
	peerUpdatesChart();
	peerWithdrawsChart();
}

function prefixByUpdates()
{
	 const labels = [
        "2403:da00::/32", "61.1.0.0/24", "61.7.208.0/24", "78.9.53.0/21",
        "93.2.84.0/22", "92.1.38.0/23", "92.0.75.0/21", "7.24.208.0/20", 
        "7.8.15.0/20", "93.1.155.0/21", "46.26.202.0/21", "90.53.80.0/20"
    ];
    const data = [2559, 1268, 1006, 908, 903, 902, 902, 902, 902, 900, 898, 897, 895, 895, 892];
    
    // Configuring the chart
    const config = {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Number of Updates',
                data: data,
                backgroundColor: 'orange',
                borderColor: 'orange',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of Updates'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Prefixes'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Top 20 Prefixes By Number of Updates'
                }
            }
        }
    };

    // Render the chart
    const ctx = document.getElementById('prefixUpdatesChart').getContext('2d');
    new Chart(ctx, config);
}

function prefixByWithdraws()
{
	const labels = [
        "2403:da00::/32", "2606:4000::/48", "62.248.97.0/24", "67.72.69.0/24", 
        "7.8.25.0/21", "90.53.176.0/21", "92.0.75.0/21", "78.9.53.0/22", 
        "7.24.208.0/20", "7.24.8.0/20", "93.1.155.0/21", "46.26.202.0/20"
    ];
    const data = [3113, 1596, 1506, 1133, 458, 456, 419, 419, 419, 418, 418, 417, 417, 417];

    // Configuring the chart
    const config = {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Number of Withdraws',
                data: data,
                backgroundColor: 'blue',
                borderColor: 'blue',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of Withdraws'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Prefixes'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Top 20 Prefixes By Number of Withdraws'
                }
            }
        }
    };

    // Render the chart
    const ctx = document.getElementById('prefixWithdrawsChart').getContext('2d');
    new Chart(ctx, config);
}

function peerUpdatesChart()
{
	      const ctx = document.getElementById('peerUpdatesChart').getContext('2d');

        // Sample data for the graph
        const labels = [
            "04/08/2016 14:55", "04/08/2016 15:03", "04/08/2016 15:11", "04/08/2016 15:28", 
            "04/08/2016 15:36", "04/08/2016 15:45", "04/08/2016 15:53", "04/08/2016 16:01", 
            "04/08/2016 16:10", "04/08/2016 16:18", "04/08/2016 16:26", "04/08/2016 16:35", 
            "04/08/2016 16:43", "04/08/2016 16:51"
        ];

        const data = [
            0, 3347, 1500, 1000, 750, 1250, 1500, 1750, 1000, 500, 750, 2000, 1000, 750
        ];

        // Chart configuration
        new Chart(ctx, {
            type: 'line', // Use line chart for smooth connections
            data: {
                labels: labels,
                datasets: [{
                    label: 'Number of Updates',
                    data: data,
                    backgroundColor: 'rgba(255, 165, 0, 0.5)', // Light orange fill
                    borderColor: 'rgba(255, 165, 0, 1)', // Orange border
                    borderWidth: 2,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: true
                    },
                    tooltip: {
                        enabled: true
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Time'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Updates'
                        },
                        beginAtZero: true
                    }
                }
            }
        });
}

function peerWithdrawsChart()
{
	      const ctx = document.getElementById('peerWithdrawsChart').getContext('2d');

        // Data extracted from the graph in the image
        const labels = [
            "04/08/2016 14:55", "04/08/2016 15:03", "04/08/2016 15:11", "04/08/2016 15:20", 
            "04/08/2016 15:28", "04/08/2016 15:36", "04/08/2016 15:45", "04/08/2016 15:53", 
            "04/08/2016 16:01", "04/08/2016 16:10", "04/08/2016 16:18", "04/08/2016 16:26", 
            "04/08/2016 16:35", "04/08/2016 16:43"
        ];

        const data = [
            0, 319, 300, 280, 250, 230, 280, 300, 270, 260, 220, 250, 280, 200
        ];

        // Chart configuration
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Count of Withdraws',
                    data: data,
                    backgroundColor: 'rgba(70, 130, 180, 0.5)', // Blue fill
                    borderColor: 'rgba(70, 130, 180, 1)', // Blue border
                    borderWidth: 2,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: true
                    },
                    tooltip: {
                        enabled: true
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Time'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Withdraws'
                        },
                        beginAtZero: true
                    }
                }
            }
        });
}
