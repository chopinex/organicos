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
		</nav>
	);
}

export default Menu;