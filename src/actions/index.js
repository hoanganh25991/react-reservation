/**
 * Store action in page
 * How to build an action
 * Call function name, like
 * i want to disptach updateReservation
 * just call updateReservation(reservation) 
 * //of course, please give me data, to send
 * // internal, this function build an action obj as
 * {
 *      type: UPDATE_RESERVATION,
 *      reservation: reservation
 * }
 */
import * as c from "./const-name"
import { fetchData } from "../actions/fetch-data"

export * from "./auth"
export * from "./reservations"
export * from "./filter"
export * from "./popup"
/*
 |--------------------------------------------------------------------------
 | User
 |--------------------------------------------------------------------------
 | User support login
 |
 */
export const actionUpdateUser = user => ({ type: c.UPDATE_USER, user })

/*
 |--------------------------------------------------------------------------
 | Switch outlet
 |--------------------------------------------------------------------------
 | 
 |
 */
export const actionChooseDefaultOutlet = () => ({
  type: c.CHOOSE_DEFAULT_OUTLET
})
export const actionSwitchOutlet = outlet_id => ({
  type: c.SWITCH_OUTLET,
  outlet_id
})
