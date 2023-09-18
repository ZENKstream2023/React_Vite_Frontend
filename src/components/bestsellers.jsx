import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { top_ventas } from "../bbdd.json";
//https://www.chartjs.org/docs/latest/

const BestSellers = () => {
	const chartRef = useRef(null);

	useEffect(() => {
		// Datos del gráfico
		const data = top_ventas;

		// Destruir el gráfico anterior si existe
		if (chartRef.current) {
			chartRef.current.destroy();
		}

		// Crear el gráfico
		chartRef.current = new Chart(document.getElementById("bestsellers"), {
			type: "bar", //bar, line
			data: {
				labels: data.map((row) => row.articulo_id),
				datasets: [
					{
						label: "Más Vendidos",
						data: data.map((row) => row.cantidad_vendida),
					},
				],
			},
		});
	}, []);

	return <canvas id="bestsellers" width="400" height="200"></canvas>;
};

export default BestSellers;
