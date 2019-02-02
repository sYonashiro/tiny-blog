import React from 'react'
import BlogPostHeader from './BlogPostHeader'
import { connect } from 'react-redux'
import { deletePost, editPost } from '../actions/blogActions'
import { Link } from 'react-router-dom'

const BlogPostFull = ({ id, posts, onDeleteClick, onEditClick }) => {
    const post = posts.find(post => post.id === id)

    if (post === undefined) {
        return (
            <div className="text-danger">
                <h3>404 - Not found</h3>
            </div>
        )
    }
    
    let i = 0
    
    return (
        <div>
            <BlogPostHeader {...post} />

            {post.content
                .split('\r\n')
                .map(
                    text => (<p key={i++}>{text}</p>)
                )}

            <Link to="/post/edit/" onClick={(e) => onEditClick(post)}>[edit]</Link>{' '}
            <a href={"/post/delete/" + post.id} onClick={(e) => onDeleteClick(e, post.id)}>[delete]</a>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)

    return {
        posts: state.blog.posts,
        ...ownProps
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteClick: (event, id) => {
            event.preventDefault()
            return dispatch(
                deletePost(id)
            )
        },
        onEditClick: (post) => {
            return dispatch(
                editPost(post)
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostFull)