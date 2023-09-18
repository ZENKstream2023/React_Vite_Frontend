import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { NavLink } from "react-router-dom";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import reactlogo from "../src/assets/images/logo.svg";
const SearchApp = () => {
	return (
		<React.StrictMode>
			<BrowserRouter>
				<svg className="d-none">
					<symbol id="bootstrap" viewBox="0 0 118 94"></symbol>
					<symbol id="home" viewBox="0 0 16 16">
						<path
							fill="#fff"
							d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"
						/>
					</symbol>
					<symbol id="speedometer2" viewBox="0 0 16 16">
						<path
							fill="#fff"
							d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"
						/>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"
						/>
					</symbol>
					<symbol id="table" viewBox="0 0 16 16">
						<path
							fill="#fff"
							d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z"
						/>
					</symbol>
					<symbol id="people-circle" viewBox="0 0 16 16">
						<path fill="#fff" d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
						/>
					</symbol>
					<symbol id="grid" viewBox="0 0 16 16">
						<path
							fill="#fff"
							d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"
						/>
					</symbol>
				</svg>
				<header>
					<div className="px-3 py-2 text-bg-dark border-bottom">
						<div className="container">
							<div
								id="menu"
								className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
							>
								<NavLink
									to="/"
									id="logo"
									className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
								>
									<img src={reactlogo} />
									<h2>
										Full<b>Stack Dev</b>eloper
									</h2>
								</NavLink>
								<ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
									{/*<li>
										<form
											className="col-12 col-lg-auto me-lg-3 mt-3"
											role="search"
										>
											<input
												type="search"
												className="form-control form-control-dark text-bg-dark"
												placeholder="Search..."
												aria-label="Search"
											/>
										</form>
									</li>*/}
									<li>
										<NavLink to="/" className="nav-link text-secondary">
											<svg
												className="bi d-block mx-auto mb-1"
												width="24"
												height="24"
											>
												<use xlinkHref="#home" />
											</svg>
											Home
										</NavLink>
									</li>
									<li>
										<NavLink to="panel" className="nav-link text-white">
											<svg
												className="bi d-block mx-auto mb-1"
												width="24"
												height="24"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													fill="currentColor"
													className="bi bi-collection"
													viewBox="0 0 16 16"
												>
													<path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z" />
												</svg>
											</svg>
											Portfolio
										</NavLink>
									</li>
									<li>
										<NavLink to="experiencia" className="nav-link text-white">
											<svg
												className="bi d-block mx-auto mb-1"
												width="24"
												height="24"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													fill="currentColor"
													className="bi bi-briefcase"
													viewBox="0 0 16 16"
												>
													<path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
												</svg>
											</svg>
											Pro. Background
										</NavLink>
									</li>
									<li>
										<NavLink to="contact" className="nav-link text-white">
											<svg
												className="bi d-block mx-auto mb-1"
												width="24"
												height="24"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													fill="currentColor"
													className="bi bi-chat-left-dots"
													viewBox="0 0 16 16"
												>
													<path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
													<path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
												</svg>
											</svg>
											Contact
										</NavLink>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</header>
				<App />
				<footer className="container py-5">
					<div className="row">
						<div className="col-12 col-md">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								className="d-block mb-2"
								role="img"
								viewBox="0 0 24 24"
							>
								<title>Product</title>
								<circle cx="12" cy="12" r="10" />
								<path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" />
							</svg>
							<small className="d-block mb-3 text-body-secondary">
								&copy; Portafolio de React por Aritz Robledo Jorge
							</small>
						</div>
						<div className="col-6 col-md">
							<h5>Professional Package</h5>
							<ul className="list-unstyled text-small">
								<li>
									<p className="link-secondary text-decoration-none" to="#">
										600Mb Symmetrical Fiber
									</p>
								</li>
								<li>
									<p className="link-secondary text-decoration-none" to="#">
										High-Performance Setup
									</p>
								</li>
								<li>
									<p className="link-secondary text-decoration-none" to="#">
										Noise-Isolated Studio
									</p>
								</li>
							</ul>
						</div>
						<div className="col-6 col-md">
							<h5>Languages</h5>
							<ul className="list-unstyled text-small">
								<li>
									<p className="link-secondary text-decoration-none" to="#">
										Spanish
									</p>
									<p className="link-secondary text-decoration-none" to="#">
										Basque
									</p>
									<p className="link-secondary text-decoration-none" to="#">
										English B-1
									</p>
								</li>
							</ul>
						</div>
						<div className="col-6 col-md">
							<h5>Contact</h5>
							<ul className="list-unstyled text-small">
								<li>
									<p className="link-secondary text-decoration-none">
										+34 634 412 771
									</p>
								</li>
								<li>
									<p className="link-secondary text-decoration-none">
										webseobilbao@gmail.com
									</p>
								</li>
								<li>
									<NavLink
										className="link-secondary text-decoration-none"
										to="https://github.com/ZENKstream2023"
										target="_blank"
									>
										GitHub
									</NavLink>
								</li>
							</ul>
						</div>
						<div className="col-6 col-md">
							<h5>Origin</h5>
							<ul className="list-unstyled text-small">
								<li>
									<p className="link-secondary text-decoration-none">
										Zaldibar, 48250 Bizkaia, Basque Country, Spain
									</p>
								</li>
							</ul>
						</div>
					</div>
				</footer>
			</BrowserRouter>
		</React.StrictMode>
	);
};

ReactDOM.createRoot(document.getElementById("root")).render(<SearchApp />);
