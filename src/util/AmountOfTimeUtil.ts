import { AmountOfTime } from "../types/AmountOfTime";

export const toTemplateString = (amountOfTime?: AmountOfTime) : string => {
    return amountOfTime ?  `${amountOfTime.hours}h${amountOfTime.minutes}m${amountOfTime.seconds}s` : ""
}