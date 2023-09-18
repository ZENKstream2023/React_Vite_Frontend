import React, { Component } from "react";
import axios from "axios";
import Global from "@/Global";
import mylogo from "../assets/images/webseobilbao.png";
import "../App.css";
class Experiences extends Component {
	url = Global.url;
	state = {
		experience: [],
		status: null,
	};
	componentDidMount() {
		// Realiza operaciones de carga de datos o llamadas a API aquí si es necesario
		this.getExperiences();
	}
	getExperiences = () => {
		axios.get(this.url + "experiences").then((res) => {
			var experience = res.data.Titles;
			console.log("hola", experience);
			this.setState({
				experience: experience,
				status: "success",
			});
			console.log(this.state);
		});
	};
	render() {
		if (this.state.experience.length >= 1) {
			var listExperience = this.state.experience.map((myexperience, o) => {
				return (
					<article className="article-item" id="article-template" key={o}>
						<div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
							<div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
								<div className="my-3 py-3">
									<h2 className="display-5">{myexperience.experience}</h2>
									<span className="date">{myexperience.enddate}</span>
									{myexperience.description.map((desc, j) => (
										<p className="center" key={j}>
											{desc.task}
										</p>
									))}
								</div>
								<div
									className="bg-body-tertiary shadow-sm mx-auto"
									style={{
										width: "80%",
										height: "300px",
										borderRadius: "21px 21px 0 0",
									}}
								>
									<div className="image-wrap">
										{myexperience.image ? (
											<img
												src={myexperience.image}
												alt={myexperience.experience}
											/>
										) : (
											<img src={mylogo} />
										)}
									</div>
								</div>
							</div>
						</div>
						<div className="clearfix"></div>
					</article>
				);
			});
			return <div id="articles">{listExperience}</div>;
		} else if (
			this.state.experience.length === 0 &&
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

export default Experiences;
