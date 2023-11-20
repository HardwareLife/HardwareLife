function filtroSelect() {

    var numeroSala = Number(sala.value);
    var numeroRack = Number(rack.value);
    var numeroSensor = Number(sensor.value);

    var titulo = document.getElementsByClassName("dashboard_header");
    var racks = document.getElementsByClassName("racks");

    if (numeroSala == 1) {

        titulo[0].childNodes[1].innerHTML = `Sala 1`;

        racks[0].innerHTML = `
        <div class="esfera_ideal"></div>
        <p>Sensor 1</p>
        <div class="esfera_ideal"></div>
        <p>Sensor 2</p> 
        <div class="esfera_ideal"></div>
        <p>Sensor 3</p> 
        <div class="esfera_ideal"></div>
        <p>Sensor 4</p> 
        <div class="esfera_ideal"></div>
        <p>Sensor 5</p> 
        <div class="esfera_ideal"></div>
        <p>Sensor 6</p>
        <div class="esfera_umidade_ideal"></div>
		<p>Umidade</p>
        `;

        racks[1].innerHTML = `
        <div class="esfera_ideal"></div>
				<p>Sensor 1</p>
				<div class="esfera_ideal"></div>
				<p>Sensor 2</p> 
				<div class="esfera_ideal"></div>
				<p>Sensor 3</p> 
				<div class="esfera_ideal"></div>
				<p>Sensor 4</p> 
				<div class="esfera_ideal"></div>
				<p>Sensor 5</p> 
				<div class="esfera_ideal"></div>
				<p>Sensor 6</p>
                <div class="esfera_umidade_emergencia"></div>
				<p>Umidade</p>
        `;

        myLine2.destroy();
        myBar.destroy();

        myBar = new Chart(bar2, {
            type: 'bar',
            data: {
                labels: ["Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                datasets: [
                    {
                        data: [20.5, 23.7, 24.6, 25.7, 27.8, 30.55],
                        label: "Temperatura média",
                        backgroundColor: "#ffa500",
                        fill: false
                    },
                    {
                        data: [55, 50, 45, 40, 40, 50, 70],
                        label: "Umidade Média",
                        backgroundColor: "#2eb2ff",
                        fill: false
                    }
                ]
            },
            options: {
                maintainAspectRatio: false,
                scales: {
                    x: {
                        ticks: {
                            font: {
                                size: 14,
                            }
                        }
                    },
                    y: {
                        ticks: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Média Mensal',
                        color: "black",
                        font: {
                            size: 20
                        }
                    }
                }
            }
        });

        myLine2 = new Chart(bar3, {
            type: 'line',
            data: {
                labels: ["23-10-2023", "24-10-2023", "25-10-2023", "26-10-2023", "27-10-2023", "28-10-2023", "29-10-2023"],
                datasets: [
                    {
                        data: [20.5, 23.7, 24.6, 25.7, 27.8, 18.5, 23.5, 27.5, 30.55],
                        label: "Temperatura",
                        borderColor: "#ffa500",
                        backgroundColor: "#ffa500",
                        fill: true
                    },
                    {
                        data: [50, 60, 50, 50, 50, 40, 50, 40, 45, 80],
                        label: "Umidade",
                        borderColor: "#2eb2ff",
                        backgroundColor: "#2eb2ff",
                        fill: true
                    }]
            },
            options: {
                maintainAspectRatio: false,
                scales: {
                    x: {
                        ticks: {
                            font: {
                                size: 14,
                            }
                        }
                    },
                    y: {
                        ticks: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Média Semanal',
                        color: "black",
                        font: {
                            size: 20
                        }
                    }
                }
            }
        });
        if (numeroRack == 1 && numeroSensor == 1) {

            myLine.destroy();

            myLine = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["16:20", "16:30", "16:40", "16:50", "17:00", "17:10", "17:20", "17:30"],
                    datasets: [
                        {
                            data: [20.5, 23.7, 24.6, 25.7, 27.8, 18.5, 23.5, 27.5, 30.55],
                            label: "Temperatura",
                            borderColor: "#ffa500",
                            fill: false
                        },
                        {
                            data: [60, 70, 80, 50, 50, 40, 30, 40, 30, 90],
                            label: "Umidade",
                            borderColor: "#2eb2ff",
                            fill: false
                        }]
                },
                options: {
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                font: {
                                    size: 14,
                                }
                            }
                        },
                        y: {
                            ticks: {
                                font: {
                                    size: 14
                                }
                            }
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Medições em tempo real',
                            color: "black",
                            font: {
                                size: 20
                            }
                        }
                    }
                }
            });
        }

        if (numeroRack == 1 && numeroSensor == 2) {

            myLine.destroy();

            myLine = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["16:20", "16:30", "16:40", "16:50", "17:00", "17:10", "17:20", "17:30"],
                    datasets: [
                        {
                            data: [22, 23, 25, 24, 23, 22, 25, 22],
                            label: "Temperatura",
                            borderColor: "#ffa500",
                            fill: false
                        },
                        {
                            data: [50, 50, 55, 50, 50, 45, 40, 40, 32, 70],
                            label: "Umidade",
                            borderColor: "#2eb2ff",
                            fill: false
                        }]
                },
                options: {
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                font: {
                                    size: 14,
                                }
                            }
                        },
                        y: {
                            ticks: {
                                font: {
                                    size: 14
                                }
                            }
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Medições em tempo real',
                            color: "black",
                            font: {
                                size: 20
                            }
                        }
                    }
                }
            });
        }
        if (numeroRack == 1 && numeroSensor == 3) {

            myLine.destroy();

            myLine = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["16:20", "16:30", "16:40", "16:50", "17:00", "17:10", "17:20", "17:30"],
                    datasets: [
                        {
                            data: [20, 21, 25, 23, 26, 26, 22, 23],
                            label: "Temperatura",
                            borderColor: "#ffa500",
                            fill: false
                        },
                        {
                            data: [60, 60, 60, 50, 50, 40, 45, 40, 55, 90],
                            label: "Umidade",
                            borderColor: "#2eb2ff",
                            fill: false
                        }]
                },
                options: {
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                font: {
                                    size: 14,
                                }
                            }
                        },
                        y: {
                            ticks: {
                                font: {
                                    size: 14
                                }
                            }
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Medições em tempo real',
                            color: "black",
                            font: {
                                size: 20
                            }
                        }
                    }
                }
            });
        }
        if (numeroRack == 1 && numeroSensor == 4) {

            myLine.destroy();

            myLine = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["16:20", "16:30", "16:40", "16:50", "17:00", "17:10", "17:20", "17:30"],
                    datasets: [
                        {
                            data: [27, 26, 24, 25, 22, 21, 21, 22],
                            label: "Temperatura",
                            borderColor: "#ffa500",
                            fill: false
                        },
                        {
                            data: [70, 65.5, 65, 65, 50.5, 45.5, 40.5, 50, 55, 80.5],
                            label: "Umidade",
                            borderColor: "#2eb2ff",
                            fill: false
                        }]
                },
                options: {
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                font: {
                                    size: 14,
                                }
                            }
                        },
                        y: {
                            ticks: {
                                font: {
                                    size: 14
                                }
                            }
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Medições em tempo real',
                            color: "black",
                            font: {
                                size: 20
                            }
                        }
                    }
                }
            });
        }
        if (numeroRack == 1 && numeroSensor == 5) {

            myLine.destroy();

            myLine = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["16:20", "16:30", "16:40", "16:50", "17:00", "17:10", "17:20", "17:30"],
                    datasets: [
                        {
                            data: [25, 24, 20, 20, 21, 23, 24, 25],
                            label: "Temperatura",
                            borderColor: "#ffa500",
                            fill: false
                        },
                        {
                            data: [90, 85.5, 80, 70, 50.5, 45.5, 60, 55, 50, 50],
                            label: "Umidade",
                            borderColor: "#2eb2ff",
                            fill: false
                        }]
                },
                options: {
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                font: {
                                    size: 14,
                                }
                            }
                        },
                        y: {
                            ticks: {
                                font: {
                                    size: 14
                                }
                            }
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Medições em tempo real',
                            color: "black",
                            font: {
                                size: 20
                            }
                        }
                    }
                }
            });
        }
        if(numeroRack == 1 && numeroSensor == 6){
    
            myLine.destroy();
        
            myLine = new Chart(ctx, {
                type : 'line',
                data : {
                    labels : [ "16:20", "16:30", "16:40", "16:50", "17:00", "17:10", "17:20", "17:30" ],
                    datasets : [
                            {
                                    data : [ 24, 22, 23, 22, 21, 20, 25, 26 ],
                                    label : "Temperatura",
                                    borderColor : "#ffa500",
                                    fill : false
                            },
                            {
                                data : [ 90, 85.5, 70, 75.5, 80, 60.5, 55, 75.5, 80, 85.5],
                                label : "Umidade",
                                borderColor : "#2eb2ff",
                                fill : false
                            }]
                },
                options : {
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                font: {
                                    size: 14,
                                }
                            }
                        },
                        y: {
                            ticks:{
                                font:{
                                    size: 14
                                }
                            }
                        }
                    },
                    plugins:{
                        title : {
                            display : true,
                            text : 'Medições em tempo real',
                            color: "black",
                            font: {
                                size: 20
                            }
                        }
                }}
            });
        }

        //sensores do rack 2 da sala 2

        if (numeroRack == 2 && numeroSensor == 1) {

            myLine.destroy();

            myLine = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["16:20", "16:30", "16:40", "16:50", "17:00", "17:10", "17:20", "17:30"],
                    datasets: [
                        {
                            data: [22, 23, 25, 24, 23, 22, 25, 22],
                            label: "Temperatura",
                            borderColor: "#ffa500",
                            fill: false
                        },
                        {
                            data: [50, 50, 55, 50, 50, 45, 40, 40, 32, 70],
                            label: "Umidade",
                            borderColor: "#2eb2ff",
                            fill: false
                        }]
                },
                options: {
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                font: {
                                    size: 14,
                                }
                            }
                        },
                        y: {
                            ticks: {
                                font: {
                                    size: 14
                                }
                            }
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Medições em tempo real',
                            color: "black",
                            font: {
                                size: 20
                            }
                        }
                    }
                }
            });
        }
        if (numeroRack == 2 && numeroSensor == 2) {

            myLine.destroy();

            myLine = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["16:20", "16:30", "16:40", "16:50", "17:00", "17:10", "17:20", "17:30"],
                    datasets: [
                        {
                            data: [20.5, 23.7, 24.6, 25.7, 27.8, 18.5, 23.5, 27.5, 30.55],
                            label: "Temperatura",
                            borderColor: "#ffa500",
                            fill: false
                        },
                        {
                            data: [60, 70, 80, 50, 50, 40, 30, 40, 30, 90],
                            label: "Umidade",
                            borderColor: "#2eb2ff",
                            fill: false
                        }]
                },
                options: {
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                font: {
                                    size: 14,
                                }
                            }
                        },
                        y: {
                            ticks: {
                                font: {
                                    size: 14
                                }
                            }
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Medições em tempo real',
                            color: "black",
                            font: {
                                size: 20
                            }
                        }
                    }
                }
            });
        }
        if (numeroRack == 2 && numeroSensor == 3) {

            myLine.destroy();

            myLine = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["16:20", "16:30", "16:40", "16:50", "17:00", "17:10", "17:20", "17:30"],
                    datasets: [
                        {
                            data: [20, 21, 25, 23, 26, 26, 22, 23],
                            label: "Temperatura",
                            borderColor: "#ffa500",
                            fill: false
                        },
                        {
                            data: [60, 60, 60, 50, 50, 40, 45, 40, 55, 90],
                            label: "Umidade",
                            borderColor: "#2eb2ff",
                            fill: false
                        }]
                },
                options: {
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                font: {
                                    size: 14,
                                }
                            }
                        },
                        y: {
                            ticks: {
                                font: {
                                    size: 14
                                }
                            }
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Medições em tempo real',
                            color: "black",
                            font: {
                                size: 20
                            }
                        }
                    }
                }
            });
        }
        if (numeroRack == 2 && numeroSensor == 4) {

            myLine.destroy();

            myLine = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["16:20", "16:30", "16:40", "16:50", "17:00", "17:10", "17:20", "17:30"],
                    datasets: [
                        {
                            data: [23, 24, 25, 27, 27, 26, 25, 22],
                            label: "Temperatura",
                            borderColor: "#ffa500",
                            fill: false
                        },
                        {
                            data: [80, 80, 90, 85.5, 60, 50, 55, 45, 40, 40],
                            label: "Umidade",
                            borderColor: "#2eb2ff",
                            fill: false
                        }]
                },
                options: {
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                font: {
                                    size: 14,
                                }
                            }
                        },
                        y: {
                            ticks: {
                                font: {
                                    size: 14
                                }
                            }
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Medições em tempo real',
                            color: "black",
                            font: {
                                size: 20
                            }
                        }
                    }
                }
            });
        }
        if (numeroRack == 2 && numeroSensor == 5) {

            myLine.destroy();

            myLine = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["16:20", "16:30", "16:40", "16:50", "17:00", "17:10", "17:20", "17:30"],
                    datasets: [
                        {
                            data: [23, 22, 26, 24, 25, 23, 22, 22],
                            label: "Temperatura",
                            borderColor: "#ffa500",
                            fill: false
                        },
                        {
                            data: [55, 55, 60, 80, 90, 85, 65, 50, 40, 90],
                            label: "Umidade",
                            borderColor: "#2eb2ff",
                            fill: false
                        }]
                },
                options: {
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                font: {
                                    size: 14,
                                }
                            }
                        },
                        y: {
                            ticks: {
                                font: {
                                    size: 14
                                }
                            }
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Medições em tempo real',
                            color: "black",
                            font: {
                                size: 20
                            }
                        }
                    }
                }
            });
        }
        if (numeroRack == 2 && numeroSensor == 6) {

            myLine.destroy();

            myLine = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["16:20", "16:30", "16:40", "16:50", "17:00", "17:10", "17:20", "17:30"],
                    datasets: [
                        {
                            data: [26, 26, 20, 21, 25, 23, 23, 22],
                            label: "Temperatura",
                            borderColor: "#ffa500",
                            fill: false
                        },
                        {
                            data: [40, 45, 50.5, 70, 70, 65, 50, 55, 60, 60],
                            label: "Umidade",
                            borderColor: "#2eb2ff",
                            fill: false
                        }]
                },
                options: {
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                font: {
                                    size: 14,
                                }
                            }
                        },
                        y: {
                            ticks: {
                                font: {
                                    size: 14
                                }
                            }
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Medições em tempo real',
                            color: "black",
                            font: {
                                size: 20
                            }
                        }
                    }
                }
            });
        }
    }
    //sensores do rack 1 da sala 1



    //Sala 2
    if (numeroSala == 2) {

        titulo[0].childNodes[1].innerHTML = `Sala 2`;
        racks[0].innerHTML = `<div class="esfera_ideal"></div>
    <p>Sensor 1</p>
    <div class="esfera_irregular"></div>
    <p>Sensor 2</p> 
    <div class="esfera_irregular"></div>
    <p>Sensor 3</p> 
    <div class="esfera_ideal"></div>
    <p>Sensor 4</p> 
    <div class="esfera_ideal"></div>
    <p>Sensor 5</p> 
    <div class="esfera_ideal"></div>
    <p>Sensor 6</p>
    <div class="esfera_umidade_emergencia"></div>
	<p>Umidade</p>
    `
    

        racks[1].innerHTML = `
    <div class="esfera_ideal"></div>
				<p>Sensor 1</p>
				<div class="esfera_critica"></div>
				<p>Sensor 2</p> 
				<div class="esfera_critica"></div>
				<p>Sensor 3</p> 
				<div class="esfera_ideal"></div>
				<p>Sensor 4</p> 
				<div class="esfera_ideal"></div>
				<p>Sensor 5</p> 
				<div class="esfera_irregular"></div>
				<p>Sensor 6</p>
                <div class="esfera_umidade_critico"></div>
				<p>Umidade</p>
                `

        myLine2.destroy();
        myBar.destroy();

        myLine2 = new Chart(bar3, {
            type: 'line',
            data: {
                labels: ["23-10-2023", "24-10-2023", "25-10-2023", "26-10-2023", "27-10-2023", "28-10-2023", "29-10-2023"],
                datasets: [
                    {
                        data: [22.5, 23.7, 24.6, 25.7, 27.8, 20.5, 23.5, 27.5, 30.55],
                        label: "Temperatura",
                        borderColor: "#ffa500",
                        backgroundColor: "#ffa500",
                        fill: true
                    },
                    {
                        data: [50, 40, 50, 50, 40, 40, 50, 40, 40, 70],
                        label: "Umidade",
                        borderColor: "#2eb2ff",
                        backgroundColor: "#2eb2ff",
                        fill: true
                    }]
            },
            options: {
                maintainAspectRatio: false,
                scales: {
                    x: {
                        ticks: {
                            font: {
                                size: 14,
                            }
                        }
                    },
                    y: {
                        ticks: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Média Semanal',
                        color: "black",
                        font: {
                            size: 20
                        }
                    }
                }
            }
        });

        //Média mensal da sala 2
        myBar = new Chart(bar2, {
            type: 'bar',
            data: {
                labels: ["Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                datasets: [
                    {
                        data: [23, 23.7, 23, 22, 27, 25],
                        label: "Temperatura média",
                        backgroundColor: "#ffa500",
                        fill: false
                    },
                    {
                        data: [45, 50, 40, 55, 45, 50, 52],
                        label: "Umidade Média",
                        backgroundColor: "#2eb2ff",
                        fill: false
                    }
                ]
            },
            options: {
                maintainAspectRatio: false,
                scales: {
                    x: {
                        ticks: {
                            font: {
                                size: 14,
                            }
                        }
                    },
                    y: {
                        ticks: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Média Mensal',
                        color: "black",
                        font: {
                            size: 20
                        }
                    }
                }
            }
        });

        if (numeroRack == 1 && numeroSensor == 1) {

            myLine.destroy();
            // média semanal da sala 2

            myLine = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["16:20", "16:30", "16:40", "16:50", "17:00", "17:10", "17:20", "17:30"],
                    datasets: [
                        {
                            data: [22, 23, 25, 23, 23, 27, 27, 26],
                            label: "Temperatura",
                            borderColor: "#ffa500",
                            fill: false
                        },
                        {
                            data: [60, 70, 70, 50, 50, 40, 50, 40, 50, 90],
                            label: "Umidade",
                            borderColor: "#2eb2ff",
                            fill: false
                        }]
                },
                options: {
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                font: {
                                    size: 14,
                                }
                            }
                        },
                        y: {
                            ticks: {
                                font: {
                                    size: 14
                                }
                            }
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Medições em tempo real',
                            color: "black",
                            font: {
                                size: 20
                            }
                        }
                    }
                }
            });

        }


        if (numeroRack == 1 && numeroSensor == 2) {

            myLine.destroy();

            myLine = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["16:20", "16:30", "16:40", "16:50", "17:00", "17:10", "17:20", "17:30"],
                    datasets: [
                        {
                            data: [25, 23, 25, 24, 22, 24, 27, 26],
                            label: "Temperatura",
                            borderColor: "#ffa500",
                            fill: false
                        },
                        {
                            data: [50, 50, 40, 55, 45, 40, 45, 40, 55, 90],
                            label: "Umidade",
                            borderColor: "#2eb2ff",
                            fill: false
                        }]
                },
                options: {
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                font: {
                                    size: 14,
                                }
                            }
                        },
                        y: {
                            ticks: {
                                font: {
                                    size: 14
                                }
                            }
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Medições em tempo real',
                            color: "black",
                            font: {
                                size: 20
                            }
                        }
                    }
                }
            });

        }

        if (numeroRack == 1 && numeroSensor == 3) {

            myLine.destroy();

            myLine = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["16:20", "16:30", "16:40", "16:50", "17:00", "17:10", "17:20", "17:30"],
                    datasets: [
                        {
                            data: [25, 22, 22, 24, 22, 23, 27, 26],
                            label: "Temperatura",
                            borderColor: "#ffa500",
                            fill: false
                        },
                        {
                            data: [50, 55, 45, 55, 45, 40, 45, 40, 45, 90],
                            label: "Umidade",
                            borderColor: "#2eb2ff",
                            fill: false
                        }]
                },
                options: {
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                font: {
                                    size: 14,
                                }
                            }
                        },
                        y: {
                            ticks: {
                                font: {
                                    size: 14
                                }
                            }
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Medições em tempo real',
                            color: "black",
                            font: {
                                size: 20
                            }
                        }
                    }
                }
            });

        }  

        if (numeroRack == 1 && numeroSensor == 4) {

            myLine.destroy();

            myLine = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["16:20", "16:30", "16:40", "16:50", "17:00", "17:10", "17:20", "17:30"],
                    datasets: [
                        {
                            data: [28, 26, 25, 26, 24, 24, 23, 23],
                            label: "Temperatura",
                            borderColor: "#ffa500",
                            fill: false
                        },
                        {
                            data: [55, 54, 55, 55, 56, 57, 57, 56, 58, 60],
                            label: "Umidade",
                            borderColor: "#2eb2ff",
                            fill: false
                        }]
                },
                options: {
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                font: {
                                    size: 14,
                                }
                            }
                        },
                        y: {
                            ticks: {
                                font: {
                                    size: 14
                                }
                            }
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Medições em tempo real',
                            color: "black",
                            font: {
                                size: 20
                            }
                        }
                    }
                }
            });

        }

        if (numeroRack == 1 && numeroSensor == 5) {

            myLine.destroy();

            myLine = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["16:20", "16:30", "16:40", "16:50", "17:00", "17:10", "17:20", "17:30"],
                    datasets: [
                        {
                            data: [27, 27, 28, 29, 29, 30, 30, 31],
                            label: "Temperatura",
                            borderColor: "#ffa500",
                            fill: false
                        },
                        {
                            data: [56, 57, 54, 52, 51, 51, 49, 48, 45, 45],
                            label: "Umidade",
                            borderColor: "#2eb2ff",
                            fill: false
                        }]
                },
                options: {
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                font: {
                                    size: 14,
                                }
                            }
                        },
                        y: {
                            ticks: {
                                font: {
                                    size: 14
                                }
                            }
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Medições em tempo real',
                            color: "black",
                            font: {
                                size: 20
                            }
                        }
                    }
                }
            });

        }

        if (numeroRack == 1 && numeroSensor == 6) {

            myLine.destroy();

            myLine = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["16:20", "16:30", "16:40", "16:50", "17:00", "17:10", "17:20", "17:30"],
                    datasets: [
                        {
                            data: [27, 25, 25, 24, 22, 24, 24, 23],
                            label: "Temperatura",
                            borderColor: "#ffa500",
                            fill: false
                        },
                        {
                            data: [50, 55, 45, 55, 45, 50, 50, 50, 55, 60],
                            label: "Umidade",
                            borderColor: "#2eb2ff",
                            fill: false
                        }]
                },
                options: {
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                font: {
                                    size: 14,
                                }
                            }
                        },
                        y: {
                            ticks: {
                                font: {
                                    size: 14
                                }
                            }
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Medições em tempo real',
                            color: "black",
                            font: {
                                size: 20
                            }
                        }
                    }
                }
            });

        }

        if (numeroRack == 2 && numeroSensor == 1) {

            myLine.destroy();

            myLine = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["16:20", "16:30", "16:40", "16:50", "17:00", "17:10", "17:20", "17:30"],
                    datasets: [
                        {
                            data: [25, 23, 25, 24, 22, 24, 27, 26],
                            label: "Temperatura",
                            borderColor: "#ffa500",
                            fill: false
                        },
                        {
                            data: [50, 50, 40, 55, 45, 40, 45, 40, 55, 90],
                            label: "Umidade",
                            borderColor: "#2eb2ff",
                            fill: false
                        }]
                },
                options: {
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                font: {
                                    size: 14,
                                }
                            }
                        },
                        y: {
                            ticks: {
                                font: {
                                    size: 14
                                }
                            }
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Medições em tempo real',
                            color: "black",
                            font: {
                                size: 20
                            }
                        }
                    }
                }
            });

        }

        if (numeroRack == 2 && numeroSensor == 2) {

            myLine.destroy();

            myLine = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["16:20", "16:30", "16:40", "16:50", "17:00", "17:10", "17:20", "17:30"],
                    datasets: [
                        {
                            data: [25, 28, 25, 24, 30, 24, 27, 26],
                            label: "Temperatura",
                            borderColor: "#ffa500",
                            fill: false
                        },
                        {
                            data: [35, 50, 40, 55, 45, 60, 45, 40, 55, 90],
                            label: "Umidade",
                            borderColor: "#2eb2ff",
                            fill: false
                        }]
                },
                options: {
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                font: {
                                    size: 14,
                                }
                            }
                        },
                        y: {
                            ticks: {
                                font: {
                                    size: 14
                                }
                            }
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Medições em tempo real',
                            color: "black",
                            font: {
                                size: 20
                            }
                        }
                    }
                }
            });

        }

        if (numeroRack == 2 && numeroSensor == 3) {

            myLine.destroy();

            myLine = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["16:20", "16:30", "16:40", "16:50", "17:00", "17:10", "17:20", "17:30"],
                    datasets: [
                        {
                            data: [25, 28, 25, 24, 25, 24, 23, 22],
                            label: "Temperatura",
                            borderColor: "#ffa500",
                            fill: false
                        },
                        {
                            data: [50, 52, 45, 55, 40, 40, 45, 50, 55, 90],
                            label: "Umidade",
                            borderColor: "#2eb2ff",
                            fill: false
                        }]
                },
                options: {
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                font: {
                                    size: 14,
                                }
                            }
                        },
                        y: {
                            ticks: {
                                font: {
                                    size: 14
                                }
                            }
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Medições em tempo real',
                            color: "black",
                            font: {
                                size: 20
                            }
                        }
                    }
                }
            });

        }

        if (numeroRack == 2 && numeroSensor == 4) {

            myLine.destroy();

            myLine = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["16:20", "16:30", "16:40", "16:50", "17:00", "17:10", "17:20", "17:30"],
                    datasets: [
                        {
                            data: [25, 24, 24, 25, 25, 25, 26, 26],
                            label: "Temperatura",
                            borderColor: "#ffa500",
                            fill: false
                        },
                        {
                            data: [50, 50, 48, 45, 45, 46, 45, 49, 50, 50],
                            label: "Umidade",
                            borderColor: "#2eb2ff",
                            fill: false
                        }]
                },
                options: {
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                font: {
                                    size: 14,
                                }
                            }
                        },
                        y: {
                            ticks: {
                                font: {
                                    size: 14
                                }
                            }
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Medições em tempo real',
                            color: "black",
                            font: {
                                size: 20
                            }
                        }
                    }
                }
            });

        }

        if (numeroRack == 2 && numeroSensor == 5) {

            myLine.destroy();

            myLine = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["16:20", "16:30", "16:40", "16:50", "17:00", "17:10", "17:20", "17:30"],
                    datasets: [
                        {
                            data: [25, 26, 29, 31, 32, 30, 27, 26],
                            label: "Temperatura",
                            borderColor: "#ffa500",
                            fill: false
                        },
                        {
                            data: [50, 49, 46, 47, 45, 40, 45, 40, 45, 40],
                            label: "Umidade",
                            borderColor: "#2eb2ff",
                            fill: false
                        }]
                },
                options: {
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                font: {
                                    size: 14,
                                }
                            }
                        },
                        y: {
                            ticks: {
                                font: {
                                    size: 14
                                }
                            }
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Medições em tempo real',
                            color: "black",
                            font: {
                                size: 20
                            }
                        }
                    }
                }
            });

        }

        if (numeroRack == 2 && numeroSensor == 6) {

            myLine.destroy();

            myLine = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["16:20", "16:30", "16:40", "16:50", "17:00", "17:10", "17:20", "17:30"],
                    datasets: [
                        {
                            data: [27, 27, 25, 24, 22, 20, 20, 18],
                            label: "Temperatura",
                            borderColor: "#ffa500",
                            fill: false
                        },
                        {
                            data: [58, 60, 60, 58, 58, 58, 55, 60, 65, 65],
                            label: "Umidade",
                            borderColor: "#2eb2ff",
                            fill: false
                        }]
                },
                options: {
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                font: {
                                    size: 14,
                                }
                            }
                        },
                        y: {
                            ticks: {
                                font: {
                                    size: 14
                                }
                            }
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Medições em tempo real',
                            color: "black",
                            font: {
                                size: 20
                            }
                        }
                    }
                }
            });

        }
    }

}
