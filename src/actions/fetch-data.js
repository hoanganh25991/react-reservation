import * as c from "./const-name"
/*
 |--------------------------------------------------------------------------
 | Fetch data
 |--------------------------------------------------------------------------
 |
 | Add hooks 'beforeReq', 'receiveRes' to track what happen on hoiFetch
 | These hooks really useful for later use to history ajax_call or show dialog
 |
 */

// Support post type
const checkSupportType = type => {
  return
}

// Wrap whatwg_fetch
// Bcs we always use 'POST', 'credentials' and 'auto format body' before send
const hoiFetch = ajax_options => {
  let { url, data, type } = ajax_options
  // Build full url from END_POINT
  let full_url = c.END_POINT + "/" + url
  // Check supported stype
  let supportedType = [c.POST_FORM, c.POST_JSON]
  if (!supportedType.includes(type))
    return Promise.reject(`hoiFetch not support fetch type: ${type}`)

  let body

  switch (type) {
    case c.POST_FORM: {
      let formData = new FormData()
      Object.keys(data).forEach(key => {
        formData.append(key, data[key])
      })

      body = formData
      break
    }
    case c.POST_JSON: {
      body = JSON.stringify(data)
      break
    }
    default: {
      body = null
      break
    }
  }

  return fetch(full_url, {
    method: "POST",
    body,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    credentials: "include"
  })
}

// Hook before call fetch
const actionReforeReq = ajax_options => ({
  type: c.BEFORE_SEND_REQ,
  ajax_options
})
// Hook when receive response
const actionReceiveRes = reponse => ({ type: c.RECEIVE_RES, reponse })
// When calling a thunk, i want explicit tell out that
const actionThunkFetchData = () => ({ type: c.THUNK_FETCH_DATA })
// Fetch data
export const fetchData = ajax_options => {
  return dispatch => {
    // Ok tell what this thunk is
    dispatch(actionThunkFetchData())
    dispatch(actionReforeReq(ajax_options))

    return hoiFetch(ajax_options)
      .then(res => {
        dispatch(actionReceiveRes(res))
        return Promise.resolve(res.json())
      })
      .catch(res => {
        dispatch({ type: c.FETCH_FAIL })
        return Promise.reject(res)
      })
  }
}
