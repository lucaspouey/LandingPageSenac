import React, { useState } from "react";

const perguntas = [
	{
		q: "Como faço para tirar dúvidas sobre o curso?",
		a: "Você pode enviar suas perguntas pelo formulário abaixo ou entrar em contato pelo e-mail suporte@unisenac.edu.br."
	},
	{
		q: "Onde posso registrar uma reclamação?",
		a: "Reclamações podem ser feitas diretamente pelo formulário ou pelo canal oficial de atendimento da Unisenac."
	},
	{
		q: "Qual o prazo de resposta para dúvidas e reclamações?",
		a: "Nosso time responde em até 2 dias úteis por e-mail ou telefone."
	}
];

const Faq = () => {
	const [open, setOpen] = useState(null);

	return (
		<section className="faq">
			<h2>Perguntas Frequentes & Reclamações</h2>
			<div className="faq-lista">
				{perguntas.map((item, idx) => (
					<div key={idx} className="faq-item">
						<button className="faq-pergunta" onClick={() => setOpen(open === idx ? null : idx)}>
							{item.q}
						</button>
						{open === idx && <div className="faq-resposta">{item.a}</div>}
					</div>
				))}
			</div>
			<form className="faq-form">
				<h3>Envie sua dúvida ou reclamação</h3>
				<input type="text" placeholder="Seu nome" required />
				<input type="email" placeholder="Seu e-mail" required />
				<textarea placeholder="Digite sua mensagem" required rows={4}></textarea>
				<button type="submit">Enviar</button>
			</form>
		</section>
	);
};

export default Faq;
