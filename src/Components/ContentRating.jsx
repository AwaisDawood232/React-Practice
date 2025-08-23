import React, {Component} from 'react';
import './ContentRating.css'

class ContentRating extends Component {
  constructor (props) {
    super(props);
    this.state = {
      likes: 0,
      dislikes: 0
    }

    this.handlelikes = () => {
      this.setState((prevState) => ({
        likes: prevState.likes + 1
      }))
    }
    
    this.handleDislikes = () => {
      this.setState((prevState) => ({
        dislikes: prevState.dislikes + 1
      }))
    }
  }
  

  render() {
    return (

      <div className="content_rating">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, aliquid quam cumque magnam mollitia numquam neque quibusdam voluptas omnis modi, maxime facere vero excepturi corporis enim quos libero non voluptatem quia beatae voluptatum ducimus. Praesentium aliquam ratione iure sed?
        </p>
      <div className="rating-button">

        <button className="like_button" onClick={ this.handlelikes }> Like {this.state.likes}</button>
        <button className="dislike_button" onClick={this.handleDislikes}> Dislike {this.state.dislikes}</button>
      </div>
     
      </div>

    )
  }
}

export default ContentRating;


