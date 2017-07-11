import { createSelector } from "reselect"

export const getOutlet = state => {
  let { outlet_id, allowed_outlets } = state

  return allowed_outlets.filter(allowed_outlet => allowed_outlet.id === outlet_id)[0]
}

const avaibleTime = state => state
export const getAvaibleTime = createSelector(avaibleTime)

export const getCalendarTime = state => {
  let { availableDate } = state
  if (!availableDate) {
    return null
  }
  return availableDate
}
