import styles from './PokemonContainer.module.css'

function PokemonContainer (props) {
  debugger
  return (
    <div>
      <div className={styles.text}>
        <div className={styles.card}>
          <img
            alt=""
            src={`https://pokeres.bastionbot.org/images/pokemon/${props.id}.png`}
          />
        </div>
        <div>Name: <span className={styles.data}>{props.name}</span></div>
        <div>
          Type(s) of surface:
          {props.types.map((it) => {
            return (
              <div key={it.type.name} className={styles.data}>
                {it.type.name}
              </div>
            );
          })}
        </div>
        <div>Weight: <span className={styles.data}>{props.weight}</span></div>
        <div></div>
      </div>
    </div>
  );
}

export default PokemonContainer;