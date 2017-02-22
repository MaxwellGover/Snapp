const GET_IMAGE_FRONT = 'GET_IMAGE_FRONT'
const GET_IMAGE_BACK = 'GET_IMAGE_BACK'
const REMOVE_IMAGE_FRONT = 'REMOVE_IMAGE_FRONT'

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

export function removeImageFront () {
	return {
		type: REMOVE_IMAGE_FRONT
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
		case REMOVE_IMAGE_FRONT : 
			return {
				...state,
				imageFront: ''
			}
		default : 
			return state
	}
}