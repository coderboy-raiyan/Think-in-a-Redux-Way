import { TodoActionTypes, todoActionTypes } from "./actionTypes";

export const added = (todo: any): TodoActionTypes => ({
    type: todoActionTypes.ADDED,
    payload: todo,
});

export const toggled = (todoId: String): TodoActionTypes => ({
    type: todoActionTypes.Toggled,
    payload: {
        todoId,
    },
});

export const colorSelected = (todoId: String, color: string): TodoActionTypes => ({
    type: todoActionTypes.COLORSELECTED,
    payload: {
        todoId,
        color,
    },
});

export const deleted = (todoId: String): TodoActionTypes => ({
    type: todoActionTypes.DELETED,
    payload: {
        todoId,
    },
});

export const allCompleted = (): TodoActionTypes => ({
    type: todoActionTypes.ALLCOMPLETED,
});

export const clearCompleted = (): TodoActionTypes => ({
    type: todoActionTypes.CLEARCOMPLETED,
});
