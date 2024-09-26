
import "../styles/navbar.css"
import CartWidget from "./CartWidget"



export const NavBar = () => {
  return (
<ul>
    <li><a href="#home">Inicio</a></li>
    <li><a href="#productos">Productos</a></li>
    <li><a href="#ofertas">Ofertas</a></li>
    <li><a href="#contacto">Contacto</a></li>
    <li><a href="#carrito">Carrito</a></li>
    <CartWidget/>
</ul>
  )
}
export default NavBar