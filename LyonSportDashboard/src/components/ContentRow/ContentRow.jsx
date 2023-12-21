import React, { Component } from "react";
import revolution from '../../assets/images/revolution-central.webp'
import Card from './Card/Card';
import airforce from '../../assets/images/airforce-perfil.webp'

class ContentRow extends Component {

  constructor() {
    super();
    this.state = {
      genres: []
    }
  }

  componentDidMount() {
    setTimeout(async () => {
      const response = await fetch('http://localhost:3000/api/products');
      const data = await response.json()
      this.setState({ id_image: data.data })

    }, 5000)
  }

  render() {
    return (
      <div className="row">
        <Card title={"Ultimo producto en la base de datos:"}>

          <div className="text-center">
            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '30rem' }} src={revolution} alt="revolution" />
            <h2 className="negro">Nike Revolution 6 NN JPss</h2>
            <a href="http://localhost:3000/products/11" className="btn btn-dark">Ir</a>
          </div>

        </Card>

        <Card title={"Producto Destacado"}>
          <div className="text-center">

          <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '30rem' }} src={airforce} alt="revolution" />
          <h2 className="negro">Nike Air Force</h2>
          <a href="http://localhost:3000/products/1" className="btn btn-dark">Ir</a>
          </div>
        </Card>
      </div>
    )
  }

}

export default ContentRow;