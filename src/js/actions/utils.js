export const onSelectHandler = (ctx, event, key) => {
  const TARGET = event.target;
  ctx.setState({
    [key]: TARGET.value,
  });
};

export const onInputChangeHandler = (ctx, event) => {
  const TARGET = event.target;
  ctx.setState({
    [TARGET.name]: TARGET.value,
  });
};
