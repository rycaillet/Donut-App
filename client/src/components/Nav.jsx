import { Link } from 'react-router-dom'

const Nav = () => {

    return (
        <header>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/donutShops'>Donut Shops</Link>
            </nav>
        </header>
    )
}

export default Nav