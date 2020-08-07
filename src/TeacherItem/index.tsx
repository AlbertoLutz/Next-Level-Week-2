import React from 'react';
import './style.css';

import watsappIcon from '../assets/images/icons/whatsapp.svg';



function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"></img>
            <div>
                <strong>Professor A</strong>
                <span>Química</span>
            </div>
        </header>


        <p>
            Lorem ipsum dolor sit amet consectetur
         <br /><br />
         adipisicing elit. Quis, consectetur.
         Sit, facilis, dolorem nesciunt
         suscipit omnis praesentium
         Totam nesciunt quidem repudiandae quisquam cupiditate.
     </p>

        <footer>
            <p>
                Preço/hora
             <strong>R$ 80,00</strong>
            </p>
            <button type="button">
                <img src={watsappIcon} alt="Logotipo Whatsapp" />
            Entrar em contato.
         </button>

        </footer>
    </article>
    );
}

export default TeacherItem;