/* eslint-disable default-param-last */
/* eslint-disable no-param-reassign */
import { TodoActionTypes, todoActionTypes } from "./actionTypes";
import initialState from "./initialState";

const generateId = (array: any[]) => {
    const maxId = array.reduce((acc: any, curr: any) => Math.max(acc, curr.id), 0);
    return maxId + 1;
};

const todoReducer = (state = initialState, { type, payload }: TodoActionTypes) => {
    switch (type) {
        case todoActionTypes.ADDED:
            return [
                ...state,
                {
                    id: generateId(state),
                    ...payload,
                },
            ];

        default:
            return state;
    }
};

export default todoReducer;
