export const incNum = (num) => {
  return {
    type: "increment_number",
    payload: num
  };
};

export const decNum = (num) => {
  return {
    type: "decrement_number",
    payload: num
  };
};
