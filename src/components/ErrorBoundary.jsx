class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		// Actualiza el estado para mostrar un mensaje de error al usuario.
		return { hasError: true };
	}

	render() {
		if (this.state.hasError) {
			// Puedes renderizar un mensaje de error personalizado aquí.
			return <p>Ha ocurrido un error.</p>;
		}

		return this.props.children;
	}
}
