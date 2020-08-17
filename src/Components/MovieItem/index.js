import React, { Component } from 'react';
import Thumbnail from '../Thumbnail';
import MovieDetails from '../MovieDetails'

class MovieItem extends Component {
    constructor(props) {
        super(props)
        this.state = { userRating: null, isRenderChildren: true };
        this.submitRating = this.submitRating.bind(this);
        this.collapseOnClick = this.collapseOnClick.bind(this);
        this.renderSubmitButton = this.renderSubmitButton.bind(this);
    }
    submitRating(event) {
        this.setState({ userRating: event.target.value })
    }

    collapseOnClick(event) {
        const className = event.target.className;
        if (className === 'collapse') {
            event.target.className = 'expand';
            this.setState({isRenderChildren: false});
        } else {
            event.target.className = 'collapse';
            this.setState({isRenderChildren: true});
        }
    }

    renderSubmitButton() {
        const { userRating } = this.state;
        if (userRating)
            return <h5 className='rating' onClick={e => { this.setState({ userRating: null }) }}>User Rating: {userRating}</h5>

        return <h5 className='rating'><input type='text' placeholder='Enter your rating' onChange={this.submitRating} /></h5>

    }

    renderChildren() {
        if (this.state.isRenderChildren) {
            return <MovieDetails movie={this.props.movie} renderSubmitButton={this.renderSubmitButton}/>
        }
    }

    render() {
        const { movie } = this.props;

        return (
            <div className='wrapper' >
                <Thumbnail src={movie.image_url}></Thumbnail>
                <div>
                    <div className='titleRow'>
                        <h1 className='title'>{movie.title}</h1>
                        <img className='collapse' onClick={this.collapseOnClick} />
                    </div>
                    {this.renderChildren()}
                </div>
            </div >
        );
    }

}

export default MovieItem;