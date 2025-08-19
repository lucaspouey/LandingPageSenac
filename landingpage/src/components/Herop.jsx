import React from "react";
import logo from "../assets/logo.png";

const Hero = () => {
	return (
		<section className="hero">
			<nav className="hero-nav">
						<div className="hero-nav-logo">
							<img src={logo} alt="Logo Unisenac" />
						</div>
				<ul className="hero-nav-links">
					<li><a href="#">Home</a></li>
					<li><a href="#">Sobre</a></li>
					<li><a href="#">Contato</a></li>
				</ul>
				<a href="#" className="hero-nav-cta">Inscreva-se</a>
			</nav>
			<div className="hero-layout">
				<div className="hero-left">
					<h1 className="hero-title">
						Acesse seu <span className="hero-title-highlight">Futuro Tech</span> com a Unisenac
					</h1>
					<p className="hero-desc">
Domine programação, web e lógica de forma prática! Aprenda com especialistas e ganhe experiência em projetos reais para conquistar seu espaço no mercado de tecnologia.					</p>
					<a href="#" className="hero-cta">Quero começar</a>
				</div>
				<div className="hero-right">
					<div className="hero-card">
						<h3>Curso em Destaque</h3>
						<div className="hero-card-info">
							<span className="hero-card-label">Carga horária:</span>
							<span className="hero-card-value">1200h</span>
						</div>
						<div className="hero-card-info">
							<span className="hero-card-label">Formação:</span>
							<span className="hero-card-value">2 anos</span>
						</div>
						<div className="hero-card-info">
							<span className="hero-card-label">Vagas:</span>
							<span className="hero-card-value">40</span>
						</div>
						<a href="#" className="hero-card-cta">Ver detalhes</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
