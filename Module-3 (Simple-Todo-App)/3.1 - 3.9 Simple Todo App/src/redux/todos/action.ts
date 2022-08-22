import {
    IAdded,
    IAllCompleted,
    IClearCompleted,
    IColorSelected,
    IDeleted,
    IToggled,
    todoActionTypes,
} from "./actionTypes";

export const added = (todo: any): IAdded => ({
    type: todoActionTypes.ADDED,
    payload: todo,
});

export const toggled = (todoId: String): IToggled => ({
    type: todoActionTypes.Toggled,
    payload: {
        todoId,
    },
});

export const colorSelected = (todoId: String, color: string): IColorSelected => ({
    type: todoActionTypes.COLORSELECTED,
    payload: {
        todoId,
        color,
    },
});

export const deleted = (todoId: String): IDeleted => ({
    type: todoActionTypes.DELETED,
    payload: {
        todoId,
    },
});

export const allCompleted = (): IAllCompleted => ({
    type: todoActionTypes.ALLCOMPLETED,
});

export const clearCompleted = (): IClearCompleted => ({
    type: todoActionTypes.CLEARCOMPLETED,
});
