import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import Global from "@/Global";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 3, // Cambia el número de elementos visibles
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000, // Cambia la velocidad de reproducción automática
};
class Contact extends Component {
	url = Global.url;
	constructor(props) {
		super(props);
		this.empresaRef = React.createRef();
		this.emailRef = React.createRef();
		this.direccionRef = React.createRef();
		this.asuntoRef = React.createRef();
		this.descripcionRef = React.createRef();
		this.frontRef = React.createRef();
		this.backRef = React.createRef();
		this.fullRef = React.createRef();
		this.state = {
			user: {},
			formData: {
				company: "",
				email: "",
				address: "",
				subject: "",
				description: "",
				typejob: "",
			},
		};
	}

	recibirFormulario = (e) => {
		e.preventDefault();

		var typejob = "Fullstack";

		if (this.frontRef.current.checked) {
			typejob = this.frontRef.current.value;
		} else if (this.backRef.current.checked) {
			typejob = this.backRef.current.value;
		} else {
			typejob = this.fullRef.current.value;
		}

		var user = {
			company: this.empresaRef.current.value,
			email: this.emailRef.current.value,
			address: this.direccionRef.current.value,
			subject: this.asuntoRef.current.value,
			description: this.descripcionRef.current.value,
			typejob: typejob,
		};

		console.log(user);
		// Actualiza el estado con los datos del formulario
		this.setState({ formData: user, formSubmitted: true });
	};
	// Mantén el evento onSubmit para enviar el formulario
	saveForm = (e) => {
		e.preventDefault();

		// Hacer la solicitud POST para guardar los datos del formulario
		axios.post(this.url + "save-forms", this.state.formData).then((res) => {
			if (res.data.formData) {
				this.setState({
					article: res.data.formData,
					status: "success",
				});
			} else {
				this.setState({
					status: "failed",
				});
			}
		});
	};

	componentDidMount() {
		// Realiza operaciones de carga de datos o llamadas a API aquí si es necesario
		this.getForms();
	}
	getForms = () => {
		console.log("getForms");
		axios.get(this.url + "forms").then((res) => {
			this.setState({
				forms: res.data.Titles,
				status: "success",
			});
			console.log(this.state.forms);
		});
	};
	componentWillUnmount() {
		// Realiza limpieza o acciones de desmontaje si es necesario
	}

	render() {
		const { formSubmitted } = this.state;
		return (
			<div>
				<div
					id="slider"
					className="slider-small position-relative overflow-hidden  text-center bg-body-tertiary"
				>
					<div className="col-md-6 p-lg-5 mx-auto my-5">
						<h1 className="display-3 fw-bold">CONTACT</h1>
						<h3 className="fw-normal text-muted mb-3">
							Make an initial contact.
						</h3>
					</div>
					<div className="product-device shadow-sm d-none d-md-block"></div>
					<div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
				</div>
				<div className="mid-form mt-3">
					{formSubmitted && (
						<div>
							<h1 className="subheader">
								Thank you for making the first contact, I will get in touch with
								you soon...
							</h1>
							<div className="row datos-formulario">
								<h2>The following data will be stored:</h2>
								<div className="col">
									<p>Empresa: {this.state.formData.company}</p>
									<p>Email: {this.state.formData.email}</p>
									<p>Direccion: {this.state.formData.address}</p>
								</div>
								<div className="col">
									<p>Asunto: {this.state.formData.subject}</p>
									<p>Descripción: {this.state.formData.description}</p>
									<p>Labor: {this.state.formData.typejob}</p>
								</div>
							</div>
						</div>
					)}
					<h4 className="mb-3">
						Connect with a Talent Ready to Make a Difference!
					</h4>
					<form
						className="needs-validation"
						noValidate
						onSubmit={this.saveForm}
						onChange={this.recibirFormulario}
					>
						<div className="row g-3">
							<div className="col-sm-6">
								<label htmlFor="firstName" className="form-label">
									Company
								</label>
								<input
									type="text"
									className="form-control"
									id="firstName"
									required
									name="empresa"
									ref={this.empresaRef}
								/>
								<div className="invalid-feedback">
									Valid first name is required.
								</div>
							</div>
							<div className="col-12">
								<label htmlFor="email" className="form-label">
									Email <span className="text-body-secondary">(Optional)</span>
								</label>
								<input
									type="email"
									className="form-control"
									id="email"
									placeholder="you@example.com"
									name="email"
									ref={this.emailRef}
								/>
								<div className="invalid-feedback">
									Please enter a valid email address for shipping updates.
								</div>
							</div>

							<div className="col-12">
								<label htmlFor="address" className="form-label">
									Address
								</label>
								<input
									type="text"
									className="form-control"
									id="address"
									placeholder="1234 Main St"
									required
									name="direccion"
									ref={this.direccionRef}
								/>
								<div className="invalid-feedback">
									Please enter your shipping address.
								</div>
							</div>
						</div>

						<hr className="my-4" />
						<div className="form-group">
							<label htmlFor="asunto">Subject</label>
							<input type="text" name="asunto" ref={this.asuntoRef} />
						</div>
						<div className="form-group">
							<label htmlFor="descripcion">Description *</label>
							<textarea name="descripcion" ref={this.descripcionRef}></textarea>
						</div>
						<hr className="my-4" />
						<div className="form-group radiobuttons">
							<input
								type="radio"
								name="typejob"
								value="Frontend"
								ref={this.frontRef}
							/>{" "}
							Frontend
							<input
								type="radio"
								name="typejob"
								value="Backend"
								ref={this.backRef}
							/>{" "}
							Backend
							<input
								type="radio"
								name="typejob"
								value="Fullstack"
								ref={this.fullRef}
							/>{" "}
							FullStack
						</div>
						<button className=" w-100 btn btn-primary btn-lg" type="submit">
							Send
						</button>
					</form>
					<br />
					<h2 className="subheader interested text-center">
						<b>Interested </b>companies
					</h2>
					<br />
					{this.state.status === "success" && (
						<div id="articles">
							{this.state.forms.length === 0 ? (
								<p>No se encontraron formularios</p>
							) : (
								<Slider className="slider" {...settings}>
									{this.state.forms.map((form, i) => (
										<div key={i} className="text-center">
											<h2>{form.company}</h2>
											<div className="row">
												<div className="col-12">
													<Link to={"/contact/edit/" + form._id} key={form._id}>
														<button
															className="w-50 btn btn-primary btn-lg"
															type="submit"
														>
															Edit
														</button>
													</Link>
												</div>
											</div>
										</div>
									))}
								</Slider>
							)}
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default Contact;
