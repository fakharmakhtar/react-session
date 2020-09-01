import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class MovieDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { expanded: false }
        this.seeMore = this.seeMore.bind(this)
        this.renderDescTag = this.renderDescTag.bind(this)
    }

    seeMore() {
        if (!this.state.expanded) return '...'

        return this.props.movie.description.substring(100);

    }
    renderDescTag() {
        let desc = this.props.movie.description;

        if (desc.length > 100) {
            desc = desc.substring(0, 100);
            return <p className='description'>{desc}<span onClick={() => this.setState({ expanded: true })}>{this.seeMore()}</span></p>;
        }
        return <p className='description'>{desc}</p>;
    }

    renderVidTag() {
        const vidURL = this.props.movie.video_url;
        return vidURL === undefined ? null : <Fragment><a target='_blank' rel='noopener noreferrer' href={vidURL}>Trailer Link</a><br /></Fragment>;
    }
    render() {
        const { movie, renderUserRating } = this.props;
        const vidTag = this.renderVidTag();
        const descTag = this.renderDescTag();

        return (
            <Fragment>
                <h5 className='rating'>Rating: {movie.rating}</h5>
                <h5 className='rating'>Release Year: {movie.year}</h5>
                {renderUserRating()}
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