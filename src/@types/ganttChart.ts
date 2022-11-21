export interface IGanttChart {
  id: number,
  title: string,
  periodStart: string,
  periodEnd: string,
  sub?: IGanttChart[]
}

export interface IProject {
  project: string,
  period: string,
  chart: IGanttChart[]
}