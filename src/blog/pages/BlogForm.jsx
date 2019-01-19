import React from 'react'
import TextArea from '../components/TextArea'
import { savePost, fieldChange } from '../actions/blogActions'
import { connect } from 'react-redux'
import Select from 'react-select'
import { TAGS } from '../data/tags';

const BlogForm = (props) => (
    <div>
        <h2><p>New post</p></h2>

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

        <div>
            <button className="btn btn-primary" 
                    onClick={props.onSaveClick}>
                Save
            </button>{' '}
            <button className="btn btn-secondary">Cancel</button>
        </div>
    </div>
)

const mapStateToProps = (state) => {
    return {
        tempPost: state.blog.tempPost
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