import { FETCHING_ADMIN_STUDENTS_START, FETCHING_ADMIN_STUDENTS_SUCCESS, FETCHING_ADMIN_STUDENTS_FAILURE,
    FETCHING_SCHOOL_VISITS_START,
    FETCHING_SCHOOL_VISITS_SUCCESS,
    FETCHING_SCHOOL_VISITS_FAILURE
} from '../actions/admin';
import { CardActions } from '@material-ui/core';

const initialState = {
    isFetchingStudents: false,
    visits: [],
    students: []
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
        case
        FETCHING_SCHOOL_VISITS_START:
        return {
            ...state,
            isFetchingSchoolVisits: true
        }
        case
        FETCHING_SCHOOL_VISITS_SUCCESS:
        return {
            ...state,
            isFetchingSchoolVisits: false,
            visits: action.payload
        }
        case
        FETCHING_SCHOOL_VISITS_FAILURE:
        return {
            ...state,
            error: action.payload
        }
        default:
            return state
    }
}

