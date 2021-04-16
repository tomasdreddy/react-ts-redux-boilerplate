import * as actionTypes from "../actionsTypes/ComponentTypes"
import { ComponentType, ComponentAction } from '../utils/type'

const initialState:ComponentType[] = []

const reducer = (
  state: ComponentType[] = initialState,
  action: ComponentAction
): ComponentType[] => {
  switch (action.type) {
    case actionTypes.COMPONENT_ACTION_1_NAME:
    case actionTypes.COMPONENT_ACTION_2_NAME:
    case actionTypes.COMPONENT_ACTION_3_NAME:
      return { 
        ...state,
        ...action.payload
      }
  }
  return state
}

export default reducer