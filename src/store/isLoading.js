import { IS_LOADING } from './actions/actionTypes';

export default (state = false, action) => {
    const { type, payload } = action;
    switch (type) {
        case IS_LOADING:
            return payload
        default:
            return state
    }
}