import React, { Component } from 'react'

export default class Image extends Component {
    render() {
        let {url, id} = this.props.data;
        return (
            <div key={this.props.index} className="col-4">
                <img src={url} alt="" onClick={() => {
                    this.props.click(id);
                }}/>
            </div>
        )
    }
}
