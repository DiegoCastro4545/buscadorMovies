import React, { Component } from 'react'

export class SearchForm extends Component{
    state = {
        inputMovie:''
    }

    _handleChange = (e) => {
         this.setState({ inputMovie: e.target.value })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <div className="field has-addons">
                <div className="control">
                    <input 
                    className="input" 
                    onChange={this.handleChange}
                    type="text" 
                    placeholder="Movie to search..." />
                </div>
                <div className="control">
                    <button className="button is-info">
                        Search
                    </button>
                </div>
            </div>
            </form>
        )
    }
}