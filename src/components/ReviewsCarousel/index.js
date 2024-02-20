import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onClickRightButton = () => {
    const {index} = this.state
    const {reviewsList} = this.props
    if (index < reviewsList.length - 1) {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }

  onClickLeftButton = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {index} = this.state
    const reviewsArray = reviewsList[index]
    const {imgUrl, username, companyName, description} = reviewsArray

    return (
      <div className="bg-container">
        <h1 className="top-heading">Reviews</h1>
        <div className="card-container">
          <img alt={username} src={imgUrl} />
          <p className="style-username">{username}</p>
          <p>{companyName}</p>
        </div>
        <div className="button-container">
          <div className="left-side-button">
            <button
              className="left-button"
              type="button"
              data-testid="leftArrow"
              onClick={this.onClickLeftButton}
            >
              <img
                alt="left arrow"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              />
            </button>
          </div>

          <div className="right-side-button">
            <button
              className="right-button"
              type="button"
              onClick={this.onClickRightButton}
              data-testid="rightArrow"
            >
              <img
                alt="right arrow"
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              />
            </button>
          </div>
        </div>
        <div className="description-container">
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
