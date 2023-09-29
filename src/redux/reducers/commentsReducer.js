const initData = {
  comments: [],
  isLoading: false,
};

export default commentsReducer = (state = initData, {type, payload}) => {
  console.log('Reducer: ', type, payload);
  switch (type) {
    case 'GET_COMMENTS':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_COMMENTS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        comments: payload,
      };
    default:
      return state;
  }
};
