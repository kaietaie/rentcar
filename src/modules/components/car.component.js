import React, { Component } from 'react';
import axios from 'axios';

export default class car extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name:"",
            properties: {
                isavailable: false,
                popular: true,
                class: [],
                engine: "",
                transmission: "",
                fuel: "",
                consumption: 0,
                pasangers: 5,
                trunk: 0,
                options: {
                  clima: true,
                  cruiseControle: false
                },
            }
        }
    }

    findCar(findingCar) {
        axios.get('http://localhost:5000/car')
        .find({name: findingCar})
        .then(res => {
            if(res.data.length > 0) {
                this.setState({
                    name: res.data.name,
                    properties: {
                        isavailable: false,
                        popular: true,
                        class: [],
                        engine: "",
                        transmission: "",
                        fuel: "",
                        consumption: 0,
                        pasangers: 5,
                        trunk: 0,
                        options: {
                          clima: true,
                          cruiseControle: false
                        },
                    }
                })
            }
        })
    }
  render() {
    return (
     <>
     
     </>
    )
  }
}
