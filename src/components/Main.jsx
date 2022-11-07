import React, { Component } from 'react';
import Image from './Image';
import Product from '../product.json';

export default class Main extends Component {
    state = {
        display: "none",
        button: "none"
    }

    beforeButton = () => {
        this.setState({
            display: "none"
        });
    }

    afterButton = () => {
        this.setState({
            display: "block"
        });
    }

    makeChange = id => {
        let {price, name, desc, url} = Product.find(i => i.id === id);
        this.setState({
            id,
            price,
            name,
            desc,
            url,
            display: "block",
            button: "inline-block"
        });
    }

    button = () => {
        if(this.state.name) {
            let data = [
                <button className='btn btn-warning' onClick={() => {
                    this.beforeButton();
                }}>Before</button>,
                <button className='btn btn-warning' onClick={() => {
                    this.afterButton();
                }}>After</button>
            ];
            return data;
        }
    }
    // return <Image data={item} key={index} click={this.makeChange} active={this.state.current.id}/>

    render() {
        return (
            <div className="container vglasses py-3">
                <div className="row  justify-content-between">
                    <div className="col-6 vglasses__left">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="mb-2">Virtual Glasses</h1>
                            </div>
                            {
                                Product.map((item, index) => {
                                    return <Image data={item} key={index} click={this.makeChange} active={this.state.id}/>;
                                })
                            }
                        </div>
                        <div className="row" id="vglassesList">
                        </div>
                    </div>
                    <div className="col-5 vglasses__right p-0">
                        <div className="vglasses__card">
                            <div className="mb-2 text-right mt-2 mr-2">
                                {this.button()}
                            </div>
                            <div className="vglasses__model" id="avatar">
                                <img src={this.state.url} alt="" style={{display: this.state.display}} />
                            </div>
                            <div id="glassesInfo" className="vglasses__info" style={{"display" : this.state.button}}>
                                <h3>{this.state.name}</h3>
                                <span>${this.state.price}</span>
                                <p>{this.state.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
