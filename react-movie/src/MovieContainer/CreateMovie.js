import React, {Component} from 'react';

 class CreateMovie extends Component{
	constructor(){
		super();
		this.state ={
			title: '',
			description: ''
		}
	}
	updateMovie = (e) => {
		this.setState({[e.currentTarget.name]: e.currentTarget.value});
	}
	render(){
		return(
			<form onSubmit={this.props.addMovie.bind(null, this.state)}>
				<label>Movie:
					<input value ={this.state.title} type='text' name='title' onChange={this.updateMovie}/>
				</label>
				<label>description:
					<input value ={this.state.description} type='text' name='description' onChange={this.updateMovie}/>
				</label>
				<button type='submit'>Submit</button>
			</form>
		)
	}
}

export default CreateMovie;
