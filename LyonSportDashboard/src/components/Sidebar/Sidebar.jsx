import React from 'react'
import Logo from '../../assets/images/logopng.png'
import { Link } from 'react-router-dom';
import '../RowMovies/Card/card.css'
function Sidebar() {
    return (
        <ul className="navbar-nav bg-negro sidebar sidebar-dark   " id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                <div className="sidebar-brand-icon">
                    <img className="w-50" src={Logo} alt="Lyon Logo" />
                </div>
            </Link>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0 bg-white" />

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <Link className="nav-link" to="/">
                    <i className="fas fa-cat fs-2rem"></i>
                    <span className='fs-1rem'>Lyons's Dashboard</span></Link>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider bg-white" />
            {/* <!-- Nav Item - Pages --> */}
            {/* <li className="nav-item">
                <Link className="nav-link collapsed" to="/buscador">
                    <i className="fas fa-search text-white fs-2rem"></i>
                    <span className='text-white fs-2rem'>Buscador</span>
                </Link>
            </li> */}
            {/* <!-- Nav Item - Pages --> */}
            <li className="nav-item">
                <Link className="nav-link collapsed" to="/rowmovies">
                    <i className="fas fa-file-excel text-white fs-2rem"></i>
                    <span className='text-white fs-2rem'>Datos</span>
                </Link>
            </li>

            {/* <!-- Nav Item - Charts --> */}
            <li className="nav-item">
                <Link className="nav-link" to="/contentrow">
                    <i className="fas fa-tshirt text-white fs-2rem"></i>
                    <span className='text-white fs-2rem'>Productos</span></Link>
            </li>

            {/* <!-- Nav Item - Tables --> */}
            <li className="nav-item">
                <Link className="nav-link" to="/table">
                    <i className="fas fa-fw fa-table text-white fs-2rem"></i>
                    <span className='text-white fs-2rem'>Tabla de productos</span></Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/userstable">
                    <i className="fas fa-fw fa-table text-white fs-2rem"></i>
                    <span className='text-white fs-2rem'>Tabla de usuarios</span></Link>
            </li>


        </ul>
    )
}

export default Sidebar;