import RowMovies from '../components/RowMovies/RowMovies';
import ContentRow from '../components/ContentRow/ContentRow';
import Table from '../components/Table/Table';
import UsersTable from '../components/Table/UsersTable';


function Index() {
    return (

        <div className="container-fluid">

            <ContentRow />

            <RowMovies />


            <h1>Tabla de productos:</h1>
            <Table/>




            <h1>Tabla de Usuarios:</h1>
            <UsersTable/>
        </div>



    )
}

export default Index;