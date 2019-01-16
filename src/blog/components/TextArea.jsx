import React, {Component} from 'react'

let count = 0

export default class TextArea extends Component {
    
    constructor(props) {
        super(props)
    }

    setCharactersCount(e) {
        if (e.target.value === undefined)
            return
        
        count = e.target.value.length
    }

    render() {
        return(
            <div className="form-group">
                <label htmlFor="content">Content</label>
                <textarea name={this.props.name} id={this.props.id} className="form-control" rows="5"
                          value={this.props.content}
                          onChange={this.props.onFieldChange}
                          onKeyPress={this.setCharactersCount}>
                </textarea>
                <small>{count} characters</small>
            </div>
        )
    }
}