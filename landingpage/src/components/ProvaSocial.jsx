import React, { useState } from "react";
import carla from "../assets/Carla.png";
import ana from "../assets/Ana.png";
import bruno from "../assets/Bruno.png";
import diego from "../assets/Diego.png";

const alunos = [
	{
		nome: "Ana",
		img: ana,
		depoimento: "Graças à professora Aline, consegui entender lógica de programação de forma simples e prática!"
	},
	{
		nome: "Bruno",
		img: bruno,
		depoimento: "Aprendi a criar sites modernos e já estou fazendo meus próprios projetos."
	},
	{
		nome: "Carla",
		img: carla,
		depoimento: "Os professores são muito atenciosos e o conteúdo é direto ao ponto."
	},
	{
		nome: "Diego",
		img: diego,
		depoimento: "Recomendo para quem quer entrar no mercado de tecnologia!"
	},
];

const ProvaSocial = () => {
	const [index, setIndex] = useState(0);

	const prev = () => setIndex((i) => (i === 0 ? alunos.length - 1 : i - 1));
	const next = () => setIndex((i) => (i === alunos.length - 1 ? 0 : i + 1));

	return (
		<section className="carrossel">
			<h2>Conheça nossos alunos</h2>
			<div className="carrossel-container">
				<button onClick={prev} className="carrossel-btn">&#8592;</button>
				<div className="carrossel-item">
					<img src={alunos[index].img} alt={alunos[index].nome} className="carrossel-img" />
					<p className="carrossel-nome">{alunos[index].nome}</p>
					<blockquote className="carrossel-depoimento">{alunos[index].depoimento}</blockquote>
				</div>
				<button onClick={next} className="carrossel-btn">&#8594;</button>
			</div>
		</section>
	);
};

export default ProvaSocial;
