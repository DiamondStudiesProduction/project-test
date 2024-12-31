import { Link } from 'react-router-dom';

const style = {
	fontSize: '30px',
	display: 'flex',
	gap: '30px',
};

export const Home = () => {
	return (
		<div style={style}>
			<Link to={'/'}>
				<h1>Home</h1>
			</Link>
			<Link to={'/Gallery'}>
				<h1>Gallery</h1>
			</Link>
		</div>
	);
};
