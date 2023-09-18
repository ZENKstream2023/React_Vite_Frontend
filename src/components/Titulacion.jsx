import React, { Component } from "react";
import axios from "axios";
import Global from "@/Global";
import "../App.css";
class Titulacion extends Component {
	url = Global.url;
	state = {
		titles: [],
		status: null,
	};
	componentDidMount() {
		// Realiza operaciones de carga de datos o llamadas a API aquí si es necesario
		this.getTitulaciones();
	}
	getTitulaciones = () => {
		console.log("getTitulaciones");
		axios.get(this.url + "titulaciones").then((res) => {
			this.setState({
				titles: res.data.Titles,
				status: "success",
			});
			console.log(this.state);
		});
	};
	render() {
		if (this.state.titles.length >= 1) {
			var listTitles = this.state.titles.map((title, i) => {
				return (
					<article className="article-item" id="article-template" key={i}>
						<div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
							<div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
								<div className="my-3 py-3">
									<h2 className="display-5">{title.title}</h2>
									<span className="date">{title.enddate}</span>
									<p className="lead">{title.description}</p>
								</div>
								<div
									className="bg-body-tertiary shadow-sm mx-auto"
									style={{
										width: "80%",
										height: "300px",
										borderRadius: "21px 21px 0 0",
									}}
								>
									{" "}
									<div className="image-wrap">
										<img src={title.image} alt={title.title} />
									</div>
								</div>
							</div>
						</div>
						<div className="clearfix"></div>
					</article>
				);
			});
			return <div id="articles">{listTitles}</div>;
		} else if (
			this.state.titles.length === 0 &&
			this.state.status === "success"
		) {
			return (
				<div id="articles">
					<h2 className="subheader">No se están mostrando las titulaciones</h2>
					<p>
						Tal vez se estén realizando modificaciones internas. Por favor,
						intentelo en otro momento
					</p>
				</div>
			);
		} else {
			return (
				<div id="articles">
					<h2 className="subheader">Cargando...</h2>
					<p>Espere mientras carga el contenido</p>
				</div>
			);
		}
	}
}

export default Titulacion;
