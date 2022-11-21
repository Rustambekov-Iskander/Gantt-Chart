import {combineReducers, configureStore} from "@reduxjs/toolkit";
import ganttReducer from './reducers/charts/GanttSlice'


const rootReducer = combineReducers({
  ganttReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']