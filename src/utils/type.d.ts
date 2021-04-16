// Types

type ComponentType = {
  keyName: string
}

export type ComponentState = ComponentType[]

export type ComponentAction = {
  type: string
  payload: ComponentType
}

export type ComponentDispatchType = (args: ComponentAction) => ComponentAction

// Combined Types

export type CombinedState = {
  ComponentReducers: ComponentState
}

export type CombinedAction = {
  ComponentReducers: ComponentAction
}

export type CombinedDispatchType = (args: CombinedAction) => CombinedAction