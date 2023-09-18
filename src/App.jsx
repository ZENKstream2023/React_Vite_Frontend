import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
//import MiPrimerComponente from "@components/MiPrimerComponente";
import NotFoundPage from "@pages/NotFoundPage";
import ExperiencesPage from "@pages/ExperiencesPage";
import HomePage from "@pages/HomePage";
import DashBoard from "@pages/DashBoard";
import ReportsPage from "@pages/ReportsPage";
import Customers from "./pages/Customers";
import Contact from "./pages/Contact";
import EditContact from "./components/EditForm";
function App() {
	return (
		<Routes>
			{/* Definir la ruta de la página de inicio */}
			<Route exact path="/" element={<HomePage />} />
			{/* Otras rutas */}
			<Route exact path="/panel" element={<DashBoard />} />
			<Route exact path="/informes" element={<ReportsPage />} />
			<Route exact path="/customers" element={<Customers />} />
			<Route exact path="/experiencia" element={<ExperiencesPage />} />
			<Route exact path="/contact" element={<Contact />} />
			<Route exact path="/contact/edit/:id" element={<EditContact />} />
			{/*<Route path="/contact/search/:search" element={<Search />} />
			<Route
				path="/redirect/:search"
				element={(props) => {
					var search = props.match.params.search;
					return <Redirect to={"/contact/search/" + search} />;
				}}
			/>*/}
			{/* Ruta por defecto en caso de que ninguna coincida */}
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
}

export default App;
