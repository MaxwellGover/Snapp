const GET_IMAGE_FRONT = 'GET_IMAGE_FRONT'
const GET_IMAGE_BACK = 'GET_IMAGE_BACK'

const initialState = {
	imageFront: '',
	imageBack: ''
}

export function getImageFront (image) {
	return {
		type: GET_IMAGE_FRONT,
		image
	}
}


export function getImageBack (image) {
	return {
		type: GET_IMAGE_BACK,
		image
	}
}

export default function camera (state = initialState, action) {
	switch (action.type) {
		case GET_IMAGE_FRONT : 
			return {
				...state,
				imageFront: action.image
			}
		default : 
			return state
	}
}