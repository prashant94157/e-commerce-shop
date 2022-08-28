import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from '../constants/productConstants';
const intialState = {
  products: [],
};
const productListReducers = (state = intialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};
export { productListReducers };
