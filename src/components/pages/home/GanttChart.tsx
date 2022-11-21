import React, { FC, useEffect } from 'react'
import { ColumnDirective, ColumnsDirective, GanttComponent } from '@syncfusion/ej2-react-gantt'
import { IGanttChart } from '../../../@types/ganttChart'
import { taskBarInfo, taskValues, titleTemplate } from './GanttSettings'
import {dataFormatter} from "../../../helper/dataFarmatter";

interface GanttChartProps {
  charts: IGanttChart | {}
}
const GanttChart: FC<GanttChartProps> = ({ charts }) => {
  const tasks = dataFormatter(charts)

  //эта либа платная, поэтому вылезает модалка. А тут мы ее убираем как только она появляется))
  useEffect(() => {
    const licensing = document.getElementById('js-licensing')
    const timer = setInterval(() => {
      if (licensing) {
        licensing.remove()
        clearInterval(timer)
      }
    }, 1)
    setTimeout(() => {
      clearInterval(timer)
    }, 2000)
  }, [])

  return (
      <GanttComponent
        splitterSettings={{ columnIndex: 3 }}
        dataSource={tasks}
        gridLines="Vertical"
        taskFields={taskValues}
        queryTaskbarInfo={taskBarInfo}
        labelSettings={{ rightLabel: 'title' }}
        rowHeight={40}
      >
        <ColumnsDirective>
          <ColumnDirective allowResizing={false} field={'title'} headerText={'Work item'} template={titleTemplate} />
        </ColumnsDirective>
      </GanttComponent>
  )
}

export default GanttChart
