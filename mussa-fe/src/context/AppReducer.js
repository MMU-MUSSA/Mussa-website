export default (state, action) => {
  switch (action.type) {
    case "CHANGE_SELECTED":
      return {
        ...state,
      };
    default:
      return state;
  }
};
