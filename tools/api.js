const baseURL ='http://localhost:9000/'
const header = {}
const api = {}
api.post = (url, data, successCallback, failCallback) => {
	uni.request({
		url:baseURL + url,
		data:data,
		method:"POST",
		header:header,
		success:successCallback,
		fail:failCallback
	})
}

api.get = (url, data, successCallback, failCallback) => {
	uni.request({
		url:baseURL + url,
		data:data,
		method:"GET",
		header:header,
		success:successCallback,
		fail:failCallback
	})
}

export {api}