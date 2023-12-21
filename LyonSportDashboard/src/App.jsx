import './app.css'
import FotoPerfil from './assets/images/guest.png'
import Sidebar from './components/Sidebar/Sidebar';
import './components/RowMovies/Card/card.css'

import Footer from './components/Footer/Footer';
import { Routes, Route } from "react-router-dom";
import Index from './views/Index';
import ContentRowView from './views/ContentRowView';
import RowMoviesView from './views/RowMoviesView';
import TableView from './views/Table';
import UsersTableView from './views/UsersTable';
import MovieView from './views/MovieView';
import Buscador from './views/Buscador';

function App() {

  return (
    <div id="wrapper">

      {/* <!-- Sidebar --> */}
      <Sidebar />
      {/* <!-- End of Sidebar --> */}

      {/* <!-- Content Wrapper --> */}
      <div id="content-wrapper" className="d-flex flex-column">

        {/* <!-- Main Content --> */}
        <div id="content">

          {/* <!-- Topbar --> */}
          <nav className="navbar navbar-expand navbar-light bg-negro topbar mb-4 static-top shadow">

            {/* <!-- Sidebar Toggle (Topbar) --> */}
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
              <i className="fa fa-bars"></i>
            </button>

            {/* <!-- Topbar Navbar --> */}
            <ul className="navbar-nav ml-auto ">





              <div className="topbar-divider d-none d-sm-block "></div>

              {/* <!-- Nav Item - User Information --> */}
              <li className="nav-item dropdown no-arrow">
                <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
                  <span className="mr-2 d-none d-lg-inline text-white medium">Invitado</span>
                  <img className="img-profile rounded-circle" src={FotoPerfil} alt="Foto de Perfil" width="60" />
                </a>
              </li>

            </ul>

          </nav>
          {/* <!-- End of Topbar --> */}

          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/buscador' element={ <Buscador /> } />
            <Route path='/contentrow' element={<ContentRowView />} /> 
            <Route path='/rowmovies' element={<RowMoviesView />} />
            <Route path='/table' element={<TableView />} />
            <Route path='/userstable' element={<UsersTableView />} />
            <Route path='/movie/:title' element={<MovieView />} />
            <Route path="*" element={<h1>404 - Not Found</h1>} />
          </Routes>

          
          
          </div>

        

        {/* <!-- Footer --> */}
        <Footer />
          
        {/* <!-- End of Footer --> */}

      </div>
      {/* <!-- End of Content Wrapper --> */}

    </div>
  );
}

export default App;
