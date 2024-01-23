import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/ProjectCSS.css'


function Card(props) {

const {name, content, image, gitLink, deployLink} = props

  return (
    <div className='col-sm-4 card-container' style={{height: '250px', backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
    <div className="card">
      <div className="card-body cardbody">
        <a className='card-title'  href={gitLink}>{name}  <img src='github-9-128.png' style={{width: '25px'}}></img></a>
        <p className="card-text">{content}</p>
        <a href={deployLink} className="card-link">Applink (if deployed)</a>
      </div>
    </div>
    </div>
  );
}

export default Card;
