import React, { Component } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Car from './CarCardComponent.jsx';



export default class ShowCard extends Component  {
  constructor(props) {
    super(props)

    this.state = {
      search: {},
      image: ""
    }
    //this.param = this.props.
    this.search = { name: this.props.showCar };
    this.image = `/images/${this.search.name}.png`;
    
  }
  render() {
    
  return (
    <Card className="cardStyle" >
      <CardMedia
        component="img"
        height="140"
        image={this.image}
        alt="car rent"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {this.search.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <Car car={this.search}/>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="midle" variant="contained">ЗАБРОНЮВАТИ</Button>
      </CardActions>
      
    </Card>
  );
  }
}
