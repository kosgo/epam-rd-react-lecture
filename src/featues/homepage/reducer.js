import { ADD_NEW } from './types';

const initialState = {
    data: [1, 2, 3],
    connection: true,
};

export const homepageReducer = (state = initialState, action) => {
    if (action.type === ADD_NEW) {
        return { ...state, data: [...state.data, action.payload] };
    }

    return state;
};
