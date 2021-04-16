import { 
  COMPONENT_ACTION_1_NAME,
  COMPONENT_ACTION_2_NAME,
  COMPONENT_ACTION_3_NAME
} from '../actionsTypes/ComponentTypes'
import { ComponentType, ComponentAction } from '../utils/type'

export function executeActionOne(payload: ComponentType[]) {
  const action: ComponentAction = {
    type: COMPONENT_ACTION_1_NAME,
    payload
  }
  return action
}

export function executeActionTwo(payload: ComponentType[]) {
  const action: ComponentAction = {
    type: COMPONENT_ACTION_2_NAME,
    payload
  }
  return action
}

export function executeActionThree(payload: ComponentType[]) {
  const action: ComponentAction = {
    type: COMPONENT_ACTION_3_NAME,
    payload
  }
  return action
}