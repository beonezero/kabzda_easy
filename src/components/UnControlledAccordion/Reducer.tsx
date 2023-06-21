type ActionType = {
    type: string
}

export const TOGGLE_COLLAPSED = "TOGGLE-COLLAPSED"

export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            const stateCopy = {...state}
            stateCopy.collapsed = !stateCopy.collapsed
            return stateCopy
        default:
            throw new Error("bad action type")
    }
    return state
}