import React, { Component } from "react";

class MiComponente extends Component {
	render() {
		let receta = {
			nombre: "Pizza Carbonara",
			ingredientes: [
				"Masa de pizza",
				"Salsa de carbonara",
				"Queso mozzarella",
				"Huevos",
				"Tocino o panceta",
				"Aceite de oliva",
				"Sal",
				"Pimienta negra",
				"Queso parmesano (opcional)",
			],
			temperatura: 220,
			tiempo: 15,
			descripcion:
				"Sumérgete en la irresistible tentación de nuestra pizza carbonara, una obra maestra culinaria que combina la crujiente indulgencia del bacon dorado y la cremosidad de los quesos mozzarella y parmesano, todo enmarcado por una base de masa de pizza perfectamente horneada. Cada bocado es un viaje sensorial que te transportará a un mundo de sabores exquisitos. La mezcla de huevos y crema de leche forma un lecho sedoso que abraza los ingredientes, mientras que el perejil fresco picado añade un toque de frescura a esta deliciosa creación. Esta pizza es mucho más que una comida; es una experiencia gastronómica que deleitará tus sentidos y te dejará deseando otro pedazo. ¡Disfruta de la magia de la pizza carbonara en cada rebanada!",
		};
		return (
			<>
				<h1>{receta.nombre}</h1>
				<h5>{receta.descripcion}</h5>
				<h2>
					{"Cocinala en tu horno a " +
						receta.temperatura +
						"°C durante unos " +
						receta.tiempo +
						"minutos"}
				</h2>
				<ol>
					{receta.ingredientes.map((ingrediente, i) => {
						console.log(ingrediente);
						return <li key={i}>{ingrediente}</li>;
					})}
				</ol>

				<hr />
				{this.props.saludo && (
					<>
						<h1>DESDE UNA PROP: </h1>
						<h3>{this.props.saludo}</h3>
					</>
				)}
			</>
		);
	}
}

export default MiComponente;
