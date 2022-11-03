import React, { Component } from 'react';

export default class Main extends Component {
    arr = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": `${require('../img/v1.png')}`,
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": `${require('../img/v2.png')}`,
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": `${require('../img/v3.png')}`,
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": `${require('../img/v4.png')}`,
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": `${require('../img/v5.png')}`,
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": `${require('../img/v6.png')}`,
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": `${require('../img/v7.png')}`,
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": `${require('../img/v8.png')}`,
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": `${require('../img/v9.png')}`,
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ];

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

    renderGlasses = () => {
        return this.arr.map((item) => {
            return <div className="col-4">
                <img src={item.url} alt="" onClick={() => {
                    this.setState({
                        price: item.price,
                        name: item.name,
                        desc: item.desc,
                        url: item.url,
                        display: "block",
                        button: "inline-block"
                    });
                }}/>
            </div>;
        });
    }

    render() {
        return (
            <div className="container vglasses py-3">
                <div className="row  justify-content-between">
                    <div className="col-6 vglasses__left">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="mb-2">Virtual Glasses</h1>
                            </div>
                            {this.renderGlasses()}
                        </div>
                        <div className="row" id="vglassesList">
                        </div>
                    </div>
                    <div className="col-5 vglasses__right p-0">
                        <div className="vglasses__card">
                            <div className="mb-2 text-right mt-2 mr-2">
                                <button className="btn btn-warning" onClick={this.beforeButton} style={{"display" : this.state.button}}>Before</button>
                                <button className="btn btn-warning" onClick={this.afterButton} style={{"display" : this.state.button}}>After</button>
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
