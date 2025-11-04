import React from "react";

const Footer = () => (
	<footer className="footer">
		<div className="footer-links">
			<a href="https://www.senacrs.com.br/unisenac/8d0ded17-fd8e-4d8d-8b1c-cacbf8c65a36" target="_blank" rel="noopener noreferrer">Unisenac</a>
			<a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a>
			<a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite</a>
		</div>
		<div className="footer-autor">
			Página criada por <strong>Lucas Lobo Pouey</strong> &copy; {new Date().getFullYear()}
		</div>
	</footer>
);

export default Footer;
