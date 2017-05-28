import { END_POINT as end_point } from "./.env"

/**
 * Endpoint
 */
// Decide endpoint base on .env file
const END_POINT_FALLBACK = "https://alfred.hoipos.com/reservation/dev/api/admin"
// Endpoint in app
export const END_POINT = end_point ? end_point : END_POINT_FALLBACK
export const END_POINT_RESERVATIONS = "reservations"
export const END_POINT_AUTH = "auth"

/**
 * Fetch hook
 */
export const THUNK_FETCH_DATA = "THUNK_FETCH_DATA"
export const BEFORE_SEND_REQ = "BEFORE_SEND_REQ"
export const RECEIVE_RES = "RECEIVE_RES"
export const FETCH_FAIL = "FETCH_FAIL"
// Support fetch type
export const POST_FORM = "POST_FORM"
export const POST_JSON = "POST_JSON"

/**
 * Auth
 *
 */
export const THUNK_SEND_LOGIN_REQ = "THUNK_SEND_LOGIN_REQ"
export const THUNK_SEND_LOGOUT_REQ = "THUNK_SEND_LOGOUT_REQ"
export const UPDATE_USER = "UPDATE_USER"
export const LOGGING_IN = "LOGGING_IN"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAIL = "LOGIN_FAIL"
export const LOGGING_OUT = "LOGGING_OUT"
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"
export const LOGOUT_FAIL = "LOGOUT_FAIL"

/**
 * Fetch reservations
 */
export const THUNK_FETCH_RESERVATIONS = "THUNK_FETCH_RESERVATIONS"
export const THUNK_FETCH_RESERVATIONS_BY_DAY = "THUNK_FETCH_RESERVATIONS_BY_DAY"

export const UPDATE_RESERVATION = "UPDATE_RESERVATION"
export const UPDATE_RESERVATIONS = "UPDATE_RESERVATIONS"
export const FETCH_RESERVATIONS_FAIL = "FETCH_RESERVATIONS_FAIL"
export const ASSIGN_DATE_ON_RESERVATIONS = "ASSIGN_DATE_ON_RESERVATIONS"
export const FETCH_RESERVATIONS_BY_DAY = "FETCH_RESERVATIONS_BY_DAY"

/**
 * Filter
 */
// Filter by day const
export const TODAY = "TODAY"
export const TOMORROW = "TOMORROW"
export const NEXT_3_DAYS = "NEXT_3_DAYS"
export const NEXT_7_DAYS = "NEXT_7_DAYS"
export const NEXT_30_DAYS = "NEXT_30_DAYS"
export const TOGGLE_INPUT_PICK_A_DATE = "TOGGLE_INPUT_PICK_A_DATE"
export const TOGGLE_FILTER_STATUS = "TOGGLE_FILTER_STATUS"
// Filter by status const
export const ARRIVED = 400
export const CONFIRMED = 300
export const REMINDER_SENT = 200
export const RESERVED = 100
export const USER_CANCELLED = -100
export const STAFF_CANCELLED = -200
export const NO_SHOW = -300
export const CLEAR_FILTER_BY_STATUS = "CLEAR_FILTER_BY_STATUS"
export const THUNK_TOGGLE_FILTER_BY_DAY = "THUNK_TOGGLE_FILTER_BY_DAY"
export const UPDATE_FILTER_BY_DAY = "UPDATE_FILTER_BY_DAY"

/**
 * Ajax
 */
// Ajax type
export const AJAX_LOGIN = "AJAX_LOGIN"
export const AJAX_LOGOUT = "AJAX_LOGOUT"
export const AJAX_FETCH_RESERVATIONS_BY_DAY = "AJAX_FETCH_RESERVATIONS_BY_DAY"
// Ajax reponse statusMsg
export const AJAX_LOGIN_SUCCESS = "AJAX_LOGIN_SUCCESS"
export const AJAX_LOGIN_FAIL = "AJAX_LOGIN_FAIL"
export const AJAX_LOGOUT_SUCCESS = "AJAX_LOGOUT_SUCCESS"
export const AJAX_FETCH_RESERVATIONS_BY_DAY_SUCCESS =
  "AJAX_FETCH_RESERVATIONS_BY_DAY_SUCCESS"

/**
 * Others
 */
export const RESET_APP = "RESET_APP"
export const SWITCH_OUTLET = "SWITCH_OUTLET"
export const CHOOSE_DEFAULT_OUTLET = "CHOOSE_DEFAULT_OUTLET"
export const LOCATION_CHANGE = "@@router/LOCATION_CHANGE"
export const TOGGLE_POPUP = "TOGGLE_POPUP"
