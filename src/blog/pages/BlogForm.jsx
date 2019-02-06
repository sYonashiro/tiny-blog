import React from 'react'
import TextArea from '../components/TextArea'
import { savePost, fieldChange } from '../actions/blogActions'
import { connect } from 'react-redux'
import Select from 'react-select'
import { TAGS } from '../data/tags'

const BlogForm = (props) => {

    return (
        <div>
            <h2><p>{props.tempPost.id === 0 ? 'Add' : 'Edit'} post</p></h2>

            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" className="form-control"
                    value={props.tempPost.title}
                    onChange={props.onFieldChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="tags">Tag</label>
                <Select 
                    isMulti
                    closeMenuOnSelect={false}
                    name="tags"
                    options={TAGS}
                    className="basic multi-select"
                    value={props.tempPost.tags}
                    onChange={(value, obj) => props.onFieldChange({
                        target: {
                            name: obj.name,
                            value
                        }
                    })
                }  />
            </div>

            <TextArea name="content" id="content" rows="5" content={props.tempPost.content} onFieldChange={props.onFieldChange} />
            
            {props.errors.length === 0 ? null : (
                <ul className="alert alert-danger"> 
                    {props.errors.map(error => (<li key={0}>{error}</li>))}
                </ul>
            )}

            <div>
                <button className="btn btn-primary" 
                        onClick={props.onSaveClick}>
                    Save
                </button>{' '}
                <button className="btn btn-secondary" onClick={() => { props.history.push('/') }}>Cancel</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    console.log('errors', state.blog.errors)
    
    return {
        tempPost: state.blog.tempPost,
        posts: state.blog.posts,
        errors: state.blog.errors,
        ...ownProps
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFieldChange:  (event) => dispatch(
            fieldChange(event)
        ), 
        onSaveClick: () => dispatch(
            savePost()
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogForm)