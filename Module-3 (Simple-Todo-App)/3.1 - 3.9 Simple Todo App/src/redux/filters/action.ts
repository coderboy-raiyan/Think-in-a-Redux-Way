import { AllFilterTypes, filterActionTypes } from "./actionTypes";

export const colorChanged = (color: String, changeType: String): AllFilterTypes => ({
    type: filterActionTypes.COLORCHANGED,
    payload: {
        color,
        changeType,
    },
});

export const statusChanged = (status: String): AllFilterTypes => ({
    type: filterActionTypes.STATUSCHANGED,
    payload: {
        status,
    },
});
