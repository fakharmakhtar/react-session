import React, { Component } from 'react';
import Thumbnail from '../Thumbnail';
import Collapsible from 'react-collapsible';
import collapse from '../../static/collapse.png'
import expand from '../../static/expand.png'

class MovieItem extends Component {
    constructor(props) {
        super(props)
        this.state = { userRating: null };
        this.submitRating = this.submitRating.bind(this);
    }
    submitRating(event) {
        this.setState({ userRating: event.target.value })
    }
    render() {
        const { movie } = this.props;
        const { userRating } = this.state;
        let block;
        if (userRating) {
            block = <h5 className='rating' onClick={e => { this.setState({ userRating: null }) }}>User Rating: {userRating}</h5>
        } else {
            block = <h5 className='rating'><input type='text' placeholder='Enter your rating' onChange={this.submitRating} /></h5>
        }
        return (
            <div className='wrapper' >
                <Thumbnail src={movie.image_url}></Thumbnail>
                <div>
                    <div className='titleRow'>
                        <h1 className='title'>{movie.title}</h1>
                    </div>
                    <Collapsible trigger={<img className='collapse' src={expand}></img>} open={true} triggerWhenOpen={<img className='collapse' src={collapse}></img>}>
                        <h5 className='rating'>Rating: {movie.rating}</h5>
                        <h5 className='rating'>Release Year: {movie.year}</h5>
                        {block}
                        <p className='description'>{movie.description}</p>
                    </Collapsible>

                </div>
            </div >
        );
    }

}

export default MovieItem;