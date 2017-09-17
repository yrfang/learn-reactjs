import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    //we just want to fetch the particular id in url, not a lists of posts
    //match the id in the url implemented by Route
    // this.props.match.params.id;
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  render() {
    // this.props === ownProps
    return (
      <div>
        Posts Show!
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);
