import React from "react";
import "./header.css";
import people from '../../assents/people.png'
import ai from '../../assents/ai.png'

const Header = () => {
  return(
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Vamos Construir Algo incrível com GPT-3 OpenAI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Seu Email" />
          <button type="button">Vamos Começar</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p> Mais de 1.600 acessos nas últimas 24 horas</p>
        </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" /></div>
      </div>
    </div>
  )
}

export default Header