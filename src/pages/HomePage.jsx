import React from "react";
import "@/App.css";
import Titulacion from "../components/Titulacion";
import reactlogo from "../assets/images/logo.svg";
export const HomePage = () => {
	return (
		<>
			<div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
				<div className="col-md-6 p-lg-5 mx-auto my-5">
					<h1 className="z-3 position-absolute display-3 fw-bold">
						ARITZ ROBLEDO JORGE
					</h1>
					<h3 className="p-5 fw-normal text-muted mt-5 mb-3">
						Welcome to my portfolio, I hope you like it...
					</h3>
				</div>
				<div id="secondlogobanner" className="product-device">
					<img
						id="secondlogobanner"
						className=" d-none d-md-block"
						src={reactlogo}
					/>
				</div>
				<div id="logobanner" className="product-device product-device-2 ">
					<img id="logobanner" src={reactlogo} />
				</div>
				<div className="product-device shadow-sm d-none d-md-block"></div>
				<div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
			</div>
			<Titulacion />
		</>
	);
};
export default HomePage;
