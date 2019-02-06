import React, { Component } from 'react'
import BlogIndex from '../blog/pages/IndexPage'
import BlogForm from '../blog/pages/BlogForm'
import BlogPostFull from '../blog/pages/BlogPostFull'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { blogPosts } from '../blog/data/blogPosts';

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: props.title,
            subtitle: props.subtitle,
            posts: blogPosts,
            tempPost: {}
        }
    }

    render() {
        return (            
            <BrowserRouter>
                <div className="container">
                    <h1>{this.state.title}</h1>
                    <h2 className="small">{this.state.subtitle}</h2>
                    <hr/>
                    
                    <Link to="/">[Home]</Link> {' '}
                    <Link to="/post/add">[Add Post]</Link>
                    <hr/>

                    <Switch>
                        <Route exact path="/" component={BlogIndex} />
                        <Route exact path="/post/add" component={BlogForm} />
                        <Route exact path="/post/edit" component={BlogForm} />
                        <Route exact path="/post/:id" component={
                            ({ match, history }) => (
                                <BlogPostFull id={parseInt(match.params.id)} history={history} />
                            )
                        } />
                        <Route component={() => (<div>404 - Not Found</div>)} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}