import React from "react";
import {IGanttChart} from "../../../@types/ganttChart";
import styled from "styled-components";
import books from "../../../assets/icons/stack_books.svg";
import bulb from "../../../assets/icons/bulb.svg";
import save from "../../../assets/icons/save.svg";
import target from "../../../assets/icons/target.svg";
import lightning from "../../../assets/icons/lightning.svg";
import {TaskFieldsModel} from "@syncfusion/ej2-react-gantt";


export const taskValues: TaskFieldsModel = {
  id: 'TaskId',
  name: 'title',
  startDate: 'periodStart',
  duration: 'duration',
  endDate: 'periodEnd',
  child: 'sub'
}

//в документации написано сделать props: any
export const titleTemplate = (props: any) => {
  const [childAmount, taskName] = [props?.taskData?.sub?.length | 0, props.title]
  return (
    <TitleRow taskData={props}>
      <p>
        <span>{childAmount}</span> {taskName}
      </p>
      </TitleRow>
  )
}

export const taskBarInfo = (props: any) => {
  switch (props.data.level){
    case 0:
      props.taskbarBgColor = '#E2EBFF'
      props.taskbarBorderColor = '#497CF6'
      break;
    case 2:
      props.taskbarBgColor = '#CFF0D6'
      props.taskbarBorderColor = '#2DB77B'
      break;
    case 3:
      props.taskbarBgColor = '#CFF0D6'
      props.taskbarBorderColor = '#2DB77B'
      break;
    default:
      props.taskbarBgColor = '#FFF2E0'
      props.taskbarBorderColor = '#FFA530'
      break;
  }
}

interface TitleRowProps {
  taskData: {
    level: number
    taskData: IGanttChart
  }
}
const TitleRow = styled.div<TitleRowProps>`
  margin: -25px 0px -5px 14px;
  padding-left:
    ${({ taskData }) => {
  if (taskData.level * 18 > 80) {
    return 120
  }
  return taskData.level * 18
}}px;
  p {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;

    span {
      font-weight: 100;
      margin-right: 8px;
    }
    &:before {
      content: '';
      width: 14px;
      height: 14px;
      padding: 2px 10px;
      margin: 4px;

      background: url(${({ taskData }) => {
  switch (taskData.level) {
    case 0:
      return books
    case 1:
      return bulb
    case 2:
      return save
    case 3:
      return target
    default:
      return lightning
  }
}})
        no-repeat;
    }
  }
`