/*
 |--------------------------------------------------------------------------
 | Fetch data
 |--------------------------------------------------------------------------
 |
 | Add hooks 'beforeReq', 'receiveRes' to track what happen on hoiFetch
 | These hooks really useful for later use to history ajax_call or show dialog
 |
 */
// Hook before send request
const BEFORE_SEND_REQ = 'BEFORE_SEND_REQ';
const beforeReq = (ajax_options) => {
	return {
		type: BEFORE_SEND_REQ, ajax_options
	};
}

// Support post type
export const POST_FORM = 'POST_FORM';
export const POST_JSON = 'POST_JSON';
const checkType = (type) => {
	if(![POST_FORM, POST_JSON].includes(type)) {
		throw `hoiFetch not support fetch type: ${type}`;
	}

	return;
}

// Hook receive response
const RECEIVE_RES = 'RECEIVE_RES';
const receiveRes = (reponse) => {
	return {
		type: RECEIVE_RES, reponse
	}
}

// Wrap whatwg_fetch
// Bcs we always use 'POST', 'credentials' and 'auto format body' before send
const hoiFetch = (ajax_options) => {
	let {url, data, type} = ajax_options;

	// Should break app here
	// If hoiFetch options is useless
	checkType(type);

	let body;

	switch(type) {
		case POST_FORM:
		{
			let formData = new FormData();
			Object.keys(data).forEach(key => {
				formData.append(key, data[key]);
			});

			body = formData;
			break;
		}
		case POST_JSON:
		{
			body = JSON.stringify(data);
			break;
		}
	}

	return fetch(url, {
		method: 'POST', body, credentials: 'same-origin'
	});
}

export const fetchData = (ajax_options) => {
	return (dispatch) => {
		dispatch(beforeReq(ajax_options));

		return hoiFetch(ajax_options)
					.then(res => {
						dispatch(receiveRes(res));

						let {type} = ajax_options;

						switch(type) {
							case POST_FORM:
							{
								return res.text();
							}
							case POST_JSON:
							{
								return res.json();
							}
						}
					})
					.then(data => Promise.resolve(data));
	}
}