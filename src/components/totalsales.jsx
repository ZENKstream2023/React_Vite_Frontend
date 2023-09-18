import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { pedidos } from "../bbdd.json";
//https://www.chartjs.org/docs/latest/

const TotalSales = () => {
	const chartRef = useRef(null);

	useEffect(() => {
		// Datos del gráfico
		const data = pedidos;

		// Destruir el gráfico anterior si existe
		if (chartRef.current) {
			chartRef.current.destroy();
		}
		// Crear el gráfico
		chartRef.current = new Chart(document.getElementById("totalsales"), {
			type: "line", //bar, line
			data: {
				labels: data.map((row) => row.fecha),
				datasets: [
					{
						label: "Historico Ganancias",
						data: data.map((row) => row.total),
					},
				],
			},
		});
	}, []);

	return <canvas id="totalsales" width="400" height="200"></canvas>;
};

export default TotalSales;
