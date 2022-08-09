import '../styles/Producto.css';

function Producto(props){
	return(
		<div className="prod">
			{props.text}
		</div>
	);
}

export default Producto;