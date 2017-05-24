import * as c from "./const-name";
/*
 |--------------------------------------------------------------------------
 | Fetch data
 |--------------------------------------------------------------------------
 |
 | Add hooks 'beforeReq', 'receiveRes' to track what happen on hoiFetch
 | These hooks really useful for later use to history ajax_call or show dialog
 |
 */
const actionReforeReq = ajax_options => {
  return {
    type: c.BEFORE_SEND_REQ,
    ajax_options
  };
};

// Support post type
const checkType = type => {
  if (![c.POST_FORM, c.POST_JSON].includes(type)) {
    throw new Error(`hoiFetch not support fetch type: ${type}`);
  }

  return;
};

// Hook receive response
const actionReceiveRes = reponse => {
  return {
    type: c.RECEIVE_RES,
    reponse
  };
};

// Wrap whatwg_fetch
// Bcs we always use 'POST', 'credentials' and 'auto format body' before send
const hoiFetch = ajax_options => {
  let { url, data, type } = ajax_options;
  // Build full url from END_POINT
  let full_url = c.END_POINT + "/" + url;

  // Should break app here
  // If hoiFetch options is useless
  checkType(type);

  let body;

  switch (type) {
    case c.POST_FORM: {
      let formData = new FormData();
      Object.keys(data).forEach(key => {
        formData.append(key, data[key]);
      });

      body = formData;
      break;
    }
    case c.POST_JSON: {
      body = JSON.stringify(data);
      break;
    }
    default: {
      body = null;
      break;
    }
  }

  return fetch(full_url, {
    method: "POST",
    body,
    // credentials: 'same-origin',
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    credentials: "include"
    // mode: 'cors',
  });
};

export const fetchData = ajax_options => {
  return dispatch => {
    // Tell state that when have a hook here
    // For ajax call before send request
    dispatch(actionReforeReq(ajax_options));

    return hoiFetch(ajax_options)
      .then(res => {
        // Tell state that when have a hook here
        // For ajax call when receive response
        dispatch(actionReceiveRes(res));

        let { type } = ajax_options;

        switch (type) {
          case c.POST_FORM: {
            //return res.text();
            return res.json();
          }
          case c.POST_JSON: {
            return res.json();
          }
          default: {
            // Don't know how to parse it
            // Just let it go through
            return Promise.resolve(res);
          }
        }
      })
      .catch(res => {
        console.log(res);

        dispatch({ type: c.FETCH_FAIL });

        return Promise.reject(res);
      });
  };
};
