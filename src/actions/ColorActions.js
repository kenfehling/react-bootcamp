import { SET_COLOR } from "../constants/ActionTypes";

export function setColor(color) {
    return {
        type: SET_COLOR,
        color
    }
}