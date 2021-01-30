// const INITIAL_STATE = {
//   UNOCOIN: 0,
//   ZebPay: 0,
//   WazirX: 0,
//   CoinDcx: 0,
//   Pocketbits: 0,
// };

const INITIAL_STATE = [
  { name: "UNOCOIN", value: 0 },
  { name: "ZebPay", value: 0 },
  { name: "WazirX", value: 0 },
  { name: "CoinDcx", value: 0 },
  { name: "Pocketbits", value: 0 },
];

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UNOCOIN":
      return state.map((item) => {
        return item.name.toLowerCase() === action.type.toLowerCase()
          ? { name: item.name, value: action.payload }
          : item;
      });
    case "ZEBPAY":
      return state.map((item) => {
        return item.name.toLowerCase() === action.type.toLowerCase()
          ? { name: item.name, value: action.payload }
          : item;
      });
    case "WAZIRX":
      return state.map((item) => {
        return item.name.toLowerCase() === action.type.toLowerCase()
          ? { name: item.name, value: action.payload }
          : item;
      });
    case "COINDCX":
      return state.map((item) => {
        return item.name.toLowerCase() === action.type.toLowerCase()
          ? { name: item.name, value: action.payload }
          : item;
      });
    case "POCKETBITS":
      return state.map((item) => {
        return item.name.toLowerCase() === action.type.toLowerCase()
          ? { name: item.name, value: action.payload }
          : item;
      });
    default:
      return state;
  }
};

export default rootReducer;
