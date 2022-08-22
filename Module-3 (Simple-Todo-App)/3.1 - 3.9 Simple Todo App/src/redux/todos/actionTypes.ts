/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
export enum todoActionTypes {
    ADDED = "todos/added",
    Toggled = "todos/toggled",
    ALLCOMPLETED = "todos/allcompleted",
    COLORSELECTED = "todos/colorselected",
    DELETED = "todos/deleted",
    CLEARCOMPLETED = "todos/clearcompleted",
}

export interface IAdded {
    type: todoActionTypes.ADDED;
    payload: any;
}

export interface IToggled {
    type: todoActionTypes.Toggled;
    payload: {
        todoId: String;
    };
}

export interface IColorSelected {
    type: todoActionTypes.COLORSELECTED;
    payload: {
        todoId: String;
        color: String;
    };
}

export interface IDeleted {
    type: todoActionTypes.DELETED;
    payload: {
        todoId: String;
    };
}

export interface IAllCompleted {
    type: todoActionTypes.ALLCOMPLETED;
}
export interface IClearCompleted {
    type: todoActionTypes.CLEARCOMPLETED;
}
