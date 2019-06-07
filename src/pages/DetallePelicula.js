import React, {Component} from 'react';
import axios from "axios";
import '../styles/DetallePelicula.css'

class DetallePelicula extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movie: {}
        };
    }

    async componentDidMount() {
        const idString = this.props.location.pathname
        const idStringSplited = idString.split("/");
        const id = parseInt(idStringSplited[2])

        let self = this
        await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=89771290e51674556a8c70fb8c707e8c&language=en-US`, {})
            .then(function (response) {
                const movie = response
                self.setState({
                    movie
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        const priceSplitter = (number) => (number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));

        console.log();
        return (
            <div className={'detalles__container'}>
                <div className={'boton_volver__container'}>
                    <button type="button" className="btn btn-info btn-volver" onClick={(e) => {
                        e.preventDefault()
                        this.props.history.push(`/`)
                    }}><p className={'texto__btn_volver'}>
                        Volver
                    </p>
                    </button>
                </div>
                <div className="card">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><p className={'texto__titulo_descripcion'}>Nombre</p> <p
                            className={'texto__descripcion'}>{this.state.movie.data && this.state.movie.data.title}</p>
                        </li>
                        <li className="list-group-item"><p className={'texto__titulo_descripcion'}>Presupuesto</p> <p
                            className={'texto__descripcion'}>USD {priceSplitter(this.state.movie.data && this.state.movie.data.budget)}</p>
                        </li>
                        <li className="list-group-item"><p className={'texto__titulo_descripcion'}>Website</p>
                            {this.state.movie.data &&  this.state.movie.data.homepage !== null ? <p>
                                <a target={'blank'} href={this.state.movie.data && this.state.movie.data.homepage}>
                                    {this.state.movie.data && this.state.movie.data.homepage}
                                </a>
                            </p>: <p>No posee</p>}
                        </li>
                        <li className="list-group-item"><p className={'texto__titulo_descripcion'}>Fecha de
                            lanzamiento</p> <p>{this.state.movie.data && this.state.movie.data.release_date}</p></li>
                        <li className="list-group-item"><p className={'texto__titulo_descripcion'}>Sinópsis</p> <p
                            className={'texto__descripcion'}>{this.state.movie.data && this.state.movie.data.overview}</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default DetallePelicula;