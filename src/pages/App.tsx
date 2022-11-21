import React, { useEffect } from 'react'
import '../components/pages/home/App.css'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { ganttFetch } from '../store/reducers/charts/GanttSlice'
import GanttChart from '../components/pages/home/GanttChart'
import styled from 'styled-components'
import Button from '../components/UI/Button'

import downloadIcon from '../assets/icons/download.svg'

function App() {
  const dispatch = useAppDispatch()
  const { project, charts, isLoading } = useAppSelector(state => state.ganttReducer)

  useEffect(() => {
    dispatch(ganttFetch())
  }, [])

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    )
  }
  if (charts.length) {
    return (
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}} className={'container'}>
        <Header>
          <h2>
            {project?.project}/ {project?.period}
          </h2>{' '}
          <Button>
            <img src={downloadIcon} alt="download" />
            Export
          </Button>
        </Header>
        <GanttChart charts={charts} />
      </div>
    )
  }
  return <div>Ничего не найдено...</div>
};
const Header = styled.div`
  font-family: Roboto, sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    font-size: 24px;
    font-weight: 400;
    color: #262842;
  }
  button {
    display: flex;
    align-items: center;
    grid-gap: 0 8px;
  }
`

export default App
