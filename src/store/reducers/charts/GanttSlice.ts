import { IGanttChart, IProject } from '../../../@types/ganttChart'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { $api } from '../../../services/axios'
import {data} from "../../../services/constans";


export const ganttFetch = createAsyncThunk('gantt/ganttFetch', async (_, { rejectWithValue }) => {
  try {
    // const { data } = await $api.get<IProject>('/tmp/test.php/')
    return { project: data, charts: [data.chart] }
  } catch (e) {
    console.log(e)
    return rejectWithValue((e as Error).message)
  }
})

interface initialStateType {
  project: IProject | any
  charts: IGanttChart[]
  isLoading: boolean
  isError: string | unknown
}

const initialState: initialStateType = {
  project: null,
  charts: [],
  isLoading: false,
  isError: ''
}

export const GanttSlice = createSlice({
  name: 'gantt',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(ganttFetch.pending, state => {
      state.isError = ''
      state.isLoading = true
    })
    builder.addCase(ganttFetch.fulfilled, (state, {payload: {charts, project}}) => {
      state.isError = ''
      state.isLoading = false
      state.charts = charts
      state.project = project
    })
    builder.addCase(ganttFetch.rejected, (state, {payload}) => {
      state.isError = payload
      state.isLoading = false
    })
  }
})

export default GanttSlice.reducer
