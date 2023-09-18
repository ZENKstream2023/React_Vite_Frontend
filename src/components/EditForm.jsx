import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import axios from "axios";
import Global from "@/Global";
import { useParams } from "react-router";

function EditContact() {
	const url = Global.url;
	const objeto = useParams();
	const valoresDelObjeto = Object.values(objeto);
	const companyId = valoresDelObjeto[0];

	// Utiliza useRef para crear referencias
	const empresaRef = useRef(null);
	const emailRef = useRef(null);
	const direccionRef = useRef(null);
	const asuntoRef = useRef(null);
	const descripcionRef = useRef(null);
	const frontRef = useRef(null);
	const backRef = useRef(null);
	const fullRef = useRef(null);

	const [formData, setFormData] = useState({
		company: "",
		email: "",
		address: "",
		subject: "",
		description: "",
		typejob: "",
	});

	const recibirFormulario = (e) => {
		e.preventDefault();

		var typejob = "Fullstack";

		if (frontRef.current.checked) {
			typejob = frontRef.current.value;
		} else if (backRef.current.checked) {
			typejob = backRef.current.value;
		} else {
			typejob = fullRef.current.value;
		}

		var user = {
			company: empresaRef.current.value,
			email: emailRef.current.value,
			address: direccionRef.current.value,
			subject: asuntoRef.current.value,
			description: descripcionRef.current.value,
			typejob: typejob,
		};

		console.log(user);
		// Actualiza el estado con los datos del formulario
		setFormData(user);
	};
	// Mantén el evento onSubmit para enviar el formulario
	const saveForm = (e) => {
		e.preventDefault();

		// Hacer la solicitud PUT para actualizar los datos del formulario
		axios.put(url + "form/" + companyId, formData).then((res) => {
			if (res.data.formData) {
				setFormData({
					article: res.data.formData,
					status: "success",
				});
			} else {
				setFormData({
					status: "failed",
				});
			}
		});
	};
	useEffect(() => {
		getCompany();
	}, [companyId]); // El segundo argumento [] indica que este efecto se ejecutará solo una vez, equivalente a componentDidMount en una clase.

	const getCompany = () => {
		// Realiza una solicitud GET para obtener los datos del contacto por su ID
		axios.get(url + "form/" + companyId).then((res) => {
			if (res.data.form) {
				// Actualiza el estado con los datos del contacto
				setFormData(res.data.form);
				// Rellena los valores de los campos de entrada (inputs)
				empresaRef.current.value = res.data.form.company;
				emailRef.current.value = res.data.form.email;
				direccionRef.current.value = res.data.form.address;
				asuntoRef.current.value = res.data.form.subject;
				descripcionRef.current.value = res.data.form.description;
				// Comprueba el valor del tipo de trabajo y marca el radio correspondiente
				switch (res.data.form.typejob) {
					case "Frontend":
						frontRef.current.checked = true;
						break;
					case "Backend":
						backRef.current.checked = true;
						break;
					default:
						fullRef.current.checked = true;
						break;
				}
			} else {
				console.error("Error al cargar los datos del contacto.");
			}
		});
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	// Método para eliminar un contacto
	const deleteContact = () => {
		if (window.confirm("¿Estás seguro de que deseas eliminar este contacto?")) {
			// Realiza una solicitud DELETE a la API para eliminar el contacto por su ID
			axios
				.delete(url + "form/" + companyId)
				.then((res) => {
					if (res.status === 200) {
						// La eliminación fue exitosa, puedes redirigir a otra página o realizar otras acciones
						console.log("Contacto eliminado con éxito.");
					} else {
						console.error("Error al eliminar el contacto.");
					}
				})
				.catch((error) => {
					console.error("Error al eliminar el contacto:", error);
				});
		}
	};
	return (
		<div>
			<div
				id="slider"
				className="slider-small position-relative overflow-hidden  text-center bg-body-tertiary"
			>
				<div className="col-md-6 p-lg-5 mx-auto my-5">
					<h1 className="display-3 fw-bold">CONTACT DETAILS</h1>
					<h3 className="fw-normal text-muted mb-3">
						Do you want to update or delete your initial contact attempt?
					</h3>
					<button
						className=" w-10 btn btn-primary btn-lg"
						onClick={deleteContact}
						type="button"
					>
						Delete
					</button>
				</div>
				<div className="product-device shadow-sm d-none d-md-block"></div>
				<div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
			</div>
			<div className="mid-form mt-3">
				{formData && (
					<div>
						<h1 className="subheader">
							Thank you for making the first contact, I will get in touch with
							you soon...
						</h1>
						<div className="row datos-formulario">
							<h2>The following data will be stored:</h2>
							<div className="col">
								<p>Empresa: {formData.company}</p>
								<p>Email: {formData.email}</p>
								<p>Direccion: {formData.address}</p>
							</div>
							<div className="col">
								<p>Asunto: {formData.subject}</p>
								<p>Descripción: {formData.description}</p>
								<p>Labor: {formData.typejob}</p>
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
					onSubmit={saveForm}
					onChange={recibirFormulario}
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
								onChange={handleChange}
								ref={empresaRef}
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
								onChange={handleChange}
								ref={emailRef}
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
								onChange={handleChange}
								ref={direccionRef}
							/>
							<div className="invalid-feedback">
								Please enter your shipping address.
							</div>
						</div>
					</div>

					<hr className="my-4" />
					<div className="form-group">
						<label htmlFor="asunto">Subject</label>
						<input
							type="text"
							name="asunto"
							onChange={handleChange}
							ref={asuntoRef}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="descripcion">Description *</label>
						<textarea
							name="descripcion"
							onChange={handleChange}
							ref={descripcionRef}
						></textarea>
					</div>
					<hr className="my-4" />
					<div className="form-group radiobuttons">
						<input
							type="radio"
							name="typejob"
							value="Frontend"
							onChange={handleChange}
							ref={frontRef}
						/>{" "}
						Frontend
						<input
							type="radio"
							name="typejob"
							value="Backend"
							onChange={handleChange}
							ref={backRef}
						/>{" "}
						Backend
						<input
							type="radio"
							name="typejob"
							value="Fullstack"
							onChange={handleChange}
							ref={fullRef}
						/>{" "}
						FullStack
					</div>
					<button className=" w-100 btn btn-primary btn-lg" type="submit">
						Update
					</button>
				</form>
			</div>
		</div>
	);
}

export default EditContact;
