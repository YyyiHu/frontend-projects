function Food() {
  const food1 = "Cherry";
  const food2 = "Noodles";
  return (
    <ul>
      <li>Pasta</li>
      <li>{food1}</li>
      <li>{food2.toUpperCase()}</li>
    </ul>
  );
}

export default Food;
