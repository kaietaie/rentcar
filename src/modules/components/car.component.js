import React, { Component } from "react";
import axios from "axios";

export default class Car extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: {},
      name: "",
      properties: {
        isavailable: false,
        popular: true,
        class: [],
        engine: "",
        transmission: "",
        fuel: "",
        consumption: 0,
        pasangers: 0,
        trunk: 0,
        options: {
          clima: true,
          cruiseControle: false,
        },
      },
    };
    this.search = this.props.car

  }

  findCar() {

    axios
      .get("http://localhost:5000/car", this.search)
      .then((res) => {
        if (res) {
          this.setState({
            name: res.data.name,
            
          });
        }
      })
      .then((e) => console.log(e));
  }
  render() {
      
    this.findCar()


    return (
      <>
        Мест {this.state.properties.pasangers} <br />
        Кондиционер <br />
        Объем багажника {this.state.properties.trunk} л.
        <br />
        Расход {this.state.properties.consumption} л./100 км
        <br />
      </>
    );
  }
}
    

// properties: {
//     isavailable: res.data.properties.isavailable,
//     popular: res.data.properties.popular,
//     class: res.data.properties.class,
//     engine: res.data.properties.engine,
//     transmission: res.data.properties.transmission,
//     fuel: res.data.properties.fuel,
//     consumption: res.data.properties.consumption,
//     pasangers: res.data.properties.pasangers,
//     trunk: res.data.properties.trunk,
//     options: {
//       clima: res.data.properties.options.clima,
//       cruiseControle: res.data.properties.options.cruiseControle,
//     },
//   },