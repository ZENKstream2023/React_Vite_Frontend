import React from "react";
import Experiences from "@/components/Experiences";
export const ItemsPage = () => {
	return (
		<>
			<div
				id="slider"
				className="slider-small position-relative overflow-hidden  text-center bg-body-tertiary"
			>
				<div className="col-md-6 p-lg-5 mx-auto my-5">
					<h1 className="display-3 fw-bold">COMPANIES</h1>
					<h3 className="fw-normal text-muted mb-3">
						Expanding my experience.
					</h3>
				</div>
				<div className="product-device shadow-sm d-none d-md-block"></div>
				<div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
			</div>
			<Experiences />
		</>
	);
};
export default ItemsPage;
