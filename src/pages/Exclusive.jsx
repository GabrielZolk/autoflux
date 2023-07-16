import Header from "../components/Header/Header";
import './Exclusive.css';

export default function Exclusive() {
  return (
    <div className="ex-bg">
      <Header />
      <div className="ex-content">
        <h3>Challenger T-X</h3>
        <div className="car">
          <div className="imgs">
            <img id="dodge1" src="./dodge1.png" />
            <img id="dodge2" src="./dodge2.png" />
          </div>
          <p>O Elegante Challenger T-X combina o estilo clássico do Dodge Challenger com a tecnologia avançada da Tesla. Com um design vintage e linhas aerodinâmicas modernas, este carro oferece uma experiência de luxo incomparável. Equipado com recursos de última geração da Tesla, como condução autônoma e sistema de energia elétrica, o Elegante Challenger T-X proporciona um desempenho poderoso e eficiente ao mesmo tempo.</p>
        </div>
      </div>

      <div className="ex-content">
        <h3>Cobra X-Tesla</h3>
        <div className="car">
          <div className="imgs">
            <img id="dodge1" src="./cobra1.png" />
            <img id="dodge2" src="./cobra2.png" />
          </div>
          <p>O Cobra X-Tesla é um carro único que combina a agressividade do lendário Cobra com a tecnologia inovadora da Tesla. Este carro esportivo elétrico é uma máquina de desempenho de alto nível, com aceleração impressionante e manuseio preciso. Com seu design aerodinâmico e detalhes elegantes, o Cobra X-Tesla é uma verdadeira obra-prima do luxo e da engenharia automotiva.</p>
        </div>
      </div>

      <div className="ex-content">
        <h3>Maverick Luxtron</h3>
        <div className="car">
          <div className="imgs">
            <img id="dodge1" src="./maverick1.png" />
            <img id="dodge2" src="./maverick2.png" />
          </div>
          <p>O Maverick Luxtron é uma fusão extraordinária entre o clássico Maverick e a tecnologia de vanguarda da Tesla. Este carro exclusivo oferece uma combinação perfeita de estilo retro e recursos avançados. Com seu motor elétrico potente e eficiente, o Maverick Luxtron proporciona uma condução suave e uma experiência luxuosa. Seu design arrojado e interior sofisticado tornam o Maverick Luxtron um verdadeiro ícone do luxo automotivo.</p>
        </div>
      </div>
    </div>
  )
}
