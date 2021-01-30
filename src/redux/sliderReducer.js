const INITIAL_STATE = {
  price: 0,
};

const sliderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "VALUE":
      return { price: action.payload };

    default:
      return state;
  }
};

export default sliderReducer;
