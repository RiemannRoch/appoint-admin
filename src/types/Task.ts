import { AmountOfTime } from "./AmountOfTime"

export type Task = {
    id: number,
    name: string,
    plannedTime: AmountOfTime,
    loggedTime: AmountOfTime,
    lastModified: Date
}