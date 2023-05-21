import React from 'react';
import './Home.css';

export type HomeProps = {
	message? : string
}

const Home: React.FC<HomeProps> = () => {
	return <div className='home'>Home</div>;
};

export default Home;
