function validateValue({ e, regex }) {
  const { value } = e.target;
  const isValidValue = regex.test(value);

  if (!isValidValue) {
    e.target.value = value.slice(0, -1);
  }

  return isValidValue;
}

export default validateValue;
