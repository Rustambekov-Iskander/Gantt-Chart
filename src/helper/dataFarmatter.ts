import {IGanttChart} from "../@types/ganttChart";

const durationFormatter = (date1: string, date2: string) => {
  const [d1, d2] = [Date.parse(date1), Date.parse(date2)]
  return Math.round((d2 - d1) / (1000 * 60 * 60 * 24))
}

const dateFormatter = (date: string) => {
  return new Date(date.split('-').reverse().join('/'))
}

// в примерах в документации данные принимались в таком виде,
// поэтому танцуем с бубном что бы подредактировать так как нам надо
export const dataFormatter: any = (data: IGanttChart[]) => {
  return data?.map((task: IGanttChart) => {
    return {
      TaskId: task.id,
      title: task.title,
      // поставил заглушку, видимо надо платить что бы корректно работало

      // periodStart: dateFormatter(task.periodStart),
      // periodEnd: dateFormatter(task.periodEnd),
      // duration: durationFormatter(task.periodStart, task.periodEnd) | 1,
      duration: 3,
      sub: dataFormatter(task.sub)
    }
  })
}