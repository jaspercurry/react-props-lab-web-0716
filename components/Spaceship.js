const React = require('react');

class Spaceship extends React.Component {

  render() {
    return(
    <div>
    Title: <h1>  {this.props.name}</h1>
  Speed: <p> {this.props.speed}</p>
Has Rockets: <p>  {this.props.hasRockets}</p>
  Colors: <p> {this.props.colors.join(" ")}</p>

    </div>

  )}

}

Spaceship.defaultProps = {
  name: "jasper",
  speed: 1,
  hasRockets: false,
  colors: ['black', 'red']
}


module.exports = Spaceship;
