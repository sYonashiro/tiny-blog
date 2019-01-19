import { INITIAL_STATE, INITIAL_TEMP_STATE } from "../data/initialState"
import { SAVE_POST, FIELD_CHANGE } from "../actions/blogActions"

const isValidPost = (post) => {
    if (post.title !== undefined && post.title !== '' &&
        post.tags !== undefined && post.tags.length > 0 &&
        post.content !== undefined && post.content !== '') {
        
        return true
    }

    return false
}

export const blogReducer = (state=INITIAL_STATE, action) => {
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
            let post = {
                ...state.tempPost,
                tags: [...state.tempPost.tags.map(tag => (tag.value))],
                date: new Date().toLocaleString('en-US'),
                id: state.posts.length + 1
            }

            if (!isValidPost(post)) {
                return {
                    ...state,
                    posts: [
                        ...state.posts
                    ],
                    tempPost: {...INITIAL_TEMP_STATE},
                    errors: ["Erro ao adicionar post."]
                }
            }

            return {
                ...state,
                posts: [
                    ...state.posts,
                    post
                ],
                tempPost: {...INITIAL_TEMP_STATE},
                errors: {...state.errors}
            }
            
        default:
            console.log('blogReducer default called')
            return state        
    }
}