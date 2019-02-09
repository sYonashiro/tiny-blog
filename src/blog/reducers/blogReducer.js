import { INITIAL_STATE, INITIAL_TEMP_STATE } from "../data/initialState"
import { SAVE_POST, FIELD_CHANGE, DELETE_POST, EDIT_POST } from "../actions/blogActions"

export const blogReducer = (state=INITIAL_STATE, action) => {
    let posts = []
    switch(action.type) {
        case FIELD_CHANGE:
            console.log('blogReducer FIELD_CHANGE called')
            return {
                ...state,
                tempPost: {
                    ...state.tempPost,
                    [action.payload.name]: action.payload.value
                }
            }

        case SAVE_POST:
            console.log('blogReducer SAVE_POST called')

            if (action.payload.posts === undefined) {
                return {
                    ...state,
                    errors: [...action.payload.errors]
                }
            }

            return {
                ...state,
                posts: [...action.payload.posts],
                tempPost: { ...INITIAL_TEMP_STATE },
                errors: []
            }
            
        case DELETE_POST:
            console.log('blogReducer DELETE_POST called')
            return {
                ...state,
                posts: state.posts.filter(x => x.id !== action.postId),
                tempPost: {...INITIAL_TEMP_STATE},
                errors: []
            }

        case EDIT_POST:
            console.log('blogReducer EDIT_POST called')

            let tagsWithLabel = action.payload.tags.map(x => ({
                value: x, 
                label: state.tags.find(y => y.value === x).label
            }))

            return {
                ...state,
                tempPost: {
                    ...action.payload,
                    tags: tagsWithLabel
                }
            }

        default:
            console.log('blogReducer default called')
            return state        
    }
}