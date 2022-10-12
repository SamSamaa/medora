import ProfilePicture from '../../assets/profile-picture.png';

import './navbar.scss';

const Navbar = () => {
	return (
		<nav className='Navbar'>
			<span>Medora</span>
			<ul className='menu'>
				<li>About us</li>
				<li>Furniture</li>
				<li>Our Stores</li>
				<li>Blog</li>
				<li className='profile-picture'><img src={ProfilePicture} alt='users profile picture' /></li>
			</ul>
		</nav>
	)
}

export default Navbar;