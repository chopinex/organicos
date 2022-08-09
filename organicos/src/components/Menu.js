import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import MenuItem from './MenuItem'

import '../styles/Menu.css';

function Menu(){
	return(
		<nav>
			<ul>
				<MenuItem text="Home"/>
				<MenuItem text="Recetas"/>
				<MenuItem text="Productos"/>
				<MenuItem text="Contacto"/>
			</ul>
			<span className="socials">
				<SocialIcon url="https://www.whatsapp.com" style={{ height: 30, width: 30 }}/>
				<SocialIcon url="https://www.instagram.com" style={{ height: 30, width: 30 }}/>
				<SocialIcon url="https://www.facebook.com" style={{ height: 30, width: 30 }}/>
				<SocialIcon url="https://www.youtube.com" style={{ height: 30, width: 30 }}/>
			</span>
		</nav>
	);
}

export default Menu;