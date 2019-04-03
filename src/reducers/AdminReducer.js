import { FETCHING_ADMIN_STUDENTS_START, FETCHING_ADMIN_STUDENTS_SUCCESS, FETCHING_ADMIN_STUDENTS_FAILURE
} from '../actions/admin';

const initialState = {
    isFetchingStudents: false
}

export const AdminReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case FETCHING_ADMIN_STUDENTS_START:
            return {
                ...state,
                isFetchingStudents: true
            }
        case FETCHING_ADMIN_STUDENTS_SUCCESS:
            return {
                ...state,
                isFetchingStudents: false,
                students: action.payload
            }
        case FETCHING_ADMIN_STUDENTS_FAILURE:
        return {
            ...state,
            isFetchingStudents: false,
            error: action.payload
        }
        default:
            return state
    }
}