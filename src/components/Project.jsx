// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/ProjectCSS.css'
// const styles = {
//   card: {
//     margin: 20,
//     // background: '#e8eaf6',
//   },
// };

// In `Card`, we can assign a style from an object by using curly braces
// We are assigning the card, heading, and content all from our `style` object
function Card(props) {

// propTypes: {
//   name: PropTypes.string.isRequired
// }

const {name, content, image, gitLink, deployLink} = props

  return (
    <div className='col-sm-4 jiggly' style={{height: '250px', backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
    <div className="card">
      <div className="card-body cardbody">
        <a className='card-title'  href={gitLink}>{name}  <img src='github-9-128.png' style={{width: '25px'}}></img></a>
        {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
        <p className="card-text">{content}</p>
        <a href={deployLink} className="card-link">Applink (if deployed)</a>
      </div>
    </div>
    </div>
  );
}

export default Card;
