/* eslint-disable no-unused-vars */
export enum filterActionTypes {
    STATUSCHANGED = "filter/statusChanged",
    COLORCHANGED = "filter/colorChanged",
}

interface IStatusChanged {
    type: filterActionTypes.STATUSCHANGED;
    payload: {
        status: String;
    };
}

interface IColorChanged {
    type: filterActionTypes.COLORCHANGED;
    payload: {
        color: String;
        changeType: String;
    };
}

export type AllFilterTypes = IColorChanged | IStatusChanged;
