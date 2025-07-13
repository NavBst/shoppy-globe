import { Link } from "react-router-dom";
import '../index.css'
import { FaOpencart } from "react-icons/fa";
import { useSelector } from "react-redux";
const Header = () => {
  const cartItems = useSelector((store)=>store.cart.items)
  return (
    <header>
      <div className="inner">
        <div id="logo">
          ShoppyGlobe
        </div>
        <nav>
          <ul>
            <li>
              <Link to={'/'} className="nav-item">Home</Link>
            </li>
            <li>
              <Link to={'/cart'} className="nav-item" ><FaOpencart style={{fontSize: '1.5rem', fontWeight:'bold'}}/> <sup>  {cartItems.length}</sup>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header