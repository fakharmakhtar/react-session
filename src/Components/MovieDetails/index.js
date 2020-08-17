import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class MovieDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { expanded: false }
        this.seeMore = this.seeMore.bind(this)
    }

    seeMore() {
        if (!this.state.expanded) return '...'

        return this.props.movie.description.substring(100);

    }
    render() {
        const { movie, renderSubmitButton } = this.props;
        const vidURL = movie.video_url;
        const vidTag = vidURL === undefined ? null : <Fragment><a target='_blank' href={vidURL}>Trailer Link</a><br /></Fragment>

        let desc = movie.description;
        let descTag = <p className='description'>{desc}</p>;

        if (desc.length > 100) {
            desc = desc.substring(0, 100);
            descTag = <p className='description'>{desc}<span onClick={() => this.setState({ expanded: true })}>{this.seeMore()}</span></p>;
        }
        return (
            <Fragment>
                <h5 className='rating'>Rating: {movie.rating}</h5>
                <h5 className='rating'>Release Year: {movie.year}</h5>
                {renderSubmitButton()}
                {vidTag}
                {descTag}
            </Fragment>
        )
    }
}

MovieDetails.propTypes = {
    movie: PropTypes.object
}

export default MovieDetails;