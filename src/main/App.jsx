import React, { Component } from 'react'
import BlogIndex from '../blog/pages/IndexPage'
import BlogForm from '../blog/pages/BlogForm'
import BlogPostFull from '../blog/pages/BlogPostFull'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

// class App extends Component {
//     constructor(props) {
//         super(props);
//     }
    
//     render() {
//         return (
//             <h1>{this.props.title}</h1>
//         )
//     }
// }

// const App = (props) => {
//     let greetings = `Hello ${props.name}!`
    
//     return (
//         <div>
//             <h1>{props.title}</h1>
//             <h3>{greetings}</h3>
//         </div>
//     )
// }

// export default App

export default (props) => (
    <BrowserRouter>
        <div className="container">
            <h1>{props.title}</h1>
            <h2 className="small">{props.subtitle}</h2>
            <hr/>
            
            <Link to="/">[Home]</Link> {' '}
            <Link to="/post/add">[Add Post]</Link>
            <hr/>

            <Switch>
                <Route exact path="/" component={BlogIndex} />
                <Route exact path="/post/add" component={BlogForm} />
                <Route exact path="/post/:id" component={BlogPostFull} />
                <Route component={() => (<div>404 - Not Found</div>)} />
            </Switch>
        </div>
    </BrowserRouter>
)