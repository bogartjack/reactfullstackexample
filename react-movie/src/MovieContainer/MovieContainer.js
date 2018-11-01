import React, {Component} from 'react';
import CreateMovie from './CreateMovie';

class MovieContainer extends Component{
	constructor(){
		super();
		this.state = {
			movies: []
		}
	}
	
	componentDidMount(){
		this.getAllMovies().then((res)=>{
			this.setState({movies: res})})
			.catch((err)=>{console.log(err)});
		
	}

	getAllMovies = async () => {
		const allMovies = await fetch('http://localhost:9000/api/v1/movies/');
		const allMoviesJson = await allMovies.json();
		return allMoviesJson.data;
	}

	addMovies = async (movie, e) =>{
		e.preventDefault();
		const newMovie = await fetch('http://localhost:9000/api/v1/movies/',{
			method: 'POST',
			body: JSON.stringify(movie),
			headers: {'Content-Type': 'application/json'}
		}).catch(err=>console.log(err));
		const parsed = await newMovie.json();
		this.setState({movies: [...this.state.movies, parsed.data]});
		console.log(this.state);
	}

	render() {
		const allMovies = this.state.movies.map((movie, i)=>{
			return(
				<li>title: {movie.title} description: movie: {movie.description}</li>
			)
		});
		return(
			<div>
				<CreateMovie addMovie = {this.addMovies} />
				<ol>
					{allMovies}
				</ol>
			</div>
		)
	}
}

export default MovieContainer
