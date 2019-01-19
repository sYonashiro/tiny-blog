import React from 'react'
import TextArea from '../components/TextArea'
import { savePost, fieldChange } from '../actions/blogActions'
import { connect } from 'react-redux'

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
            <select name="tags" id="tags" className="form-control"
                    value={props.tempPost.tags}
                    onChange={props.onFieldChange}
            >
                <option value="">-- Select --</option>
                <option value="food">Food</option>
                <option value="sports">Sports</option>
                <option value="variety">Variety</option>
            </select>
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