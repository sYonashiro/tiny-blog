import { INITIAL_STATE, INITIAL_TEMP_STATE } from "../data/initialState"
import { SAVE_POST, FIELD_CHANGE, DELETE_POST, EDIT_POST } from "../actions/blogActions"

const isValidPost = (post) => {
    if (post.title !== undefined && post.title !== '' &&
        post.tags !== undefined && post.tags.length > 0 &&
        post.content !== undefined && post.content !== '') {
        
        return true
    }

    return false
}

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
            
            let post = {
                ...state.tempPost,
                tags: state.tempPost.tags === undefined ? [] : 
                    [...state.tempPost.tags.map(tag => (tag.value))],
                date: new Date().toLocaleString('en-US')
            }

            if (!isValidPost(post)) {
                return {
                    ...state,
                    errors: ["Erro ao adicionar post."]
                }
            }

            if (post.id === 0) {
                const newId = 1 + state.posts.reduce(
                    (id, post) => (id > post.id ? id : post.id), 0
                )
                posts = [...state.posts, { ...post, id: newId }]
            } else {
                posts = [...state.posts.map(postAtual =>
                    postAtual.id === post.id ? { ...post } : { ...postAtual }
                )]
            }

            // posts = [...state.posts, post]
            //     .map(
            //         (postAtual, index) => ({
            //             ...postAtual,
            //             id: index + 1
            //         })
            //     )

            return {
                ...state,
                posts: [...posts],
                tempPost: {...INITIAL_TEMP_STATE},
                errors: {...state.errors}
            }
            
        case DELETE_POST:
            console.log('blogReducer DELETE_POST called')
            return {
                ...state,
                posts: state.posts.filter(x => x.id !== action.postId),
                tempPost: {...INITIAL_TEMP_STATE},
                errors: {...state.errors}
            }

        case EDIT_POST:
            console.log('blogReducer EDIT_POST called')
            
            // let editPost = state.posts.find(x => x.id === action.postId)
            // console.log(editPost)

            return {
                ...state,
                tempPost: {
                    ...action.payload
                }
            }

        default:
            console.log('blogReducer default called')
            return state        
    }
}