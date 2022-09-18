import logo from '../assets/logo.png';

function Banner() {
	const title = 'La maison jungle'
	return (
        <div className='lmj-banner'>
            <img src={logo} className="lmj-logo" alt="logo" />
            <h1>{title}</h1>
        </div>
    )
    
}

export default Banner