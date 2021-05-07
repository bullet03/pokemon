import styles from './Card.module.css'
import { Link } from 'react-router-dom'

function Card (props) {
  console.log(props)
  return (
    <div className={styles.card}>
      <Link to={`/pokemons/${props.name}`}>
        <img
          alt=""
          src={`https://pokeres.bastionbot.org/images/pokemon/${props.id}.png`}
        />
      </Link>
    </div>
  );
}

export default Card