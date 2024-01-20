// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/ProjectCSS.css'
const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
  },
};
//   heading: {
//     background: '#3f51b5',
//     minHeight: 50,
//     lineHeight: 3.5,
//     fontSize: '1.2rem',
//     color: 'white',
//     padding: '0 20px',
//   },
//   content: {
//     padding: 20,
//   },
// };

// In `Card`, we can assign a style from an object by using curly braces
// We are assigning the card, heading, and content all from our `style` object
function Card(props) {

// propTypes: {
//   name: PropTypes.string.isRequired
// }

const {name, content} = props

  return (
    <div className='col-sm-4 jiggly' style={{height: '200px'}}>
    <div className="card" style={{...styles.card}}>
    {/* <div className="card"> */}
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p className="card-text">{content}</p>
        <a href="#" className="card-link">Card link</a>
        <a href="#" className="card-link">Another link</a>
      </div>
    </div>
    </div>
  );
}

export default Card;
