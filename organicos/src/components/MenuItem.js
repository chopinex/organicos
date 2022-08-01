import '../styles/MenuItem.css';

function MenuItem(props){
	return(
		<li><a href="#">{props.text}</a></li>
	);
}

export default MenuItem;