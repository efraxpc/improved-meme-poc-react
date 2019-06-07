import React, {Component} from 'react';
import axios from 'axios'
import '../styles/ListaPeliculas.css'

class ListaPeliculas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        };

        this.listarPeliculas = this.listarPeliculas.bind(this);
    }

    async componentDidMount() {
        await this.listarPeliculas();
    }

    async listarPeliculas(page = 1) {
        let self = this
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=89771290e51674556a8c70fb8c707e8c&language=en-US&page=${page}`, {})
            .then(function (response) {
                self.setState({
                    movies:[].concat(self.state.movies,response.data.results),
                    page:response.data.page
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div className={'table__container'}>
                <div className="card card1">
                    <p>Listado de películas Top</p>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Fecha de lanzamiento</th>
                            <th scope="col">Sinópsis</th>
                            <th scope="col">Detalles</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.movies.map((movie, key) => {
                            return (
                                <tr>
                                    <th scope="row">{key + 1}</th>
                                    <td>{movie.title}</td>
                                    <td>{movie.release_date}</td>
                                    <td>{movie.overview}</td>
                                    <td>
                                        <button type="button" className="btn btn-primary btn-ver" onClick={(e) => {
                                            e.preventDefault()
                                            this.props.history.push(`/detalle/${movie.id}`)
                                        }}><p className={'texto__btn'}>
                                            Ver
                                        </p>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}

                        </tbody>
                    </table>
                    <div className={'boton_mas__container'}>
                        <button type="button" className="btn btn-primary btn-mas" onClick={(e) => {
                            e.preventDefault()
                            this.listarPeliculas(this.state.page + 1)
                        }}><p className={'texto__btn'}>
                            Cargar más
                        </p>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListaPeliculas;