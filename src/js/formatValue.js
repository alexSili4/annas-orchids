function formatValue({ e, firstSymbol }) {
  const { value } = e.target;
  const plusIsFirstSymbol = value.startsWith(firstSymbol);

  if (!plusIsFirstSymbol) {
    e.target.value = `${firstSymbol}${value}`;
  }
}

export default formatValue;
