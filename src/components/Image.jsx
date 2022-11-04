import React, { Component } from 'react'

export default class Image extends Component {
    render() {
        let {url, id} = this.props.data;
        return (
            <div className={`col-4 text-center ${id === this.props.active && 'active'}`} onClick={() => {
                this.props.click(id);
            }}>
                <img src={url} alt=""/>
            </div>
        )
    }
}
