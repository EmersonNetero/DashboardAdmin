import './style.css';
import hello from "../../assets/hello.svg"
import Charts from "../charts";

function Main() {
	return (
		<main>
			<div className="main__container">
				<div className="main__title">
					<img src={hello} alt="hello" />
					<div className="main__greeting">
						<h1>Olá Emerson</h1>
						<p>Bem vindo ao seu painel</p>
					</div>
				</div>

				<div className="main__cards">
					<div className="card">
						<i className="fas fa-file-alt text-lightblue"></i>
						<div className="card__inner">
							<p className="text-primary-p">Número de pedidos</p>
							<span className="font-bold text-title">578</span>
						</div>
					</div>
					<div className="card">
						<i className="fas fa-money-bill-alt text-red"></i>
						<div className="card__inner">
							<p className="text-primary-p">Pagamentos</p>
							<span className="font-bold text-title">R$2.500</span>
						</div>
					</div>

					<div className="card">
						<i className="fas fa-archive text-yellow"></i>
						<div className="card__inner">
							<p className="text-primary-p">Número de produtos</p>
							<span className="font-bold text-title">32</span>
						</div>
					</div>
					<div className="card">
						<i className="fas fa-bars text-green"></i>
						<div className="card__inner">
							<p className="text-primary-p">Categorias</p>
							<span className="font-bold text-title">40</span>
						</div>
					</div>
				</div>
				<div className="charts">
					<div className="charts__left">
						<div className="charts__left__title">
							<div>
								<h1>Daily Reports</h1>
								<p>Barra dos coqueiros, Sergipe, BR</p>
							</div>
							<i className="fas fa-chart-bar"></i>
						</div>
						<Charts />
					</div>
					<div className="charts__right">
						<div className="charts__right__title">
							<div>
								<h1>Daily Reports</h1>
								<p>Barra dos coqueiros, Sergipe, BR</p>
							</div>
							<i className="fas fa-dollar-sign"></i>
						</div>

						<div className="charts__right__cards">
							<div className="card1">
								<h1>Lucro</h1>
								<p>R$2555</p>
							</div>

							<div className="card2">
								<h1>Pagamentos</h1>
								<p>R$250,00</p>
							</div>

							<div className="card3">
								<h1>Custo de hospedagem</h1>
								<p>R$150,00</p>
							</div>

							<div className="card4">
								<h1>Banco de dados</h1>
								<p>R$180,00</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Main;
