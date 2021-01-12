const Pokemon = (props) => {
  const { name, height } = props.info
  return <div>{name} {height}</div>;
}

export default Pokemon;