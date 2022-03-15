import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function ShowCard() {
  return (
    <Card className="cardStyle" >
      <CardMedia
        component="img"
        height="140"
        image="/images/fabia.png"
        alt="car rent"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Skoda Fabia
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Мест 5<br/>
        Кондиционер<br/>
        Объем багажника 225 л.<br/>
        Расход 4,5 л./100 км
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="midle" variant="contained">ЗАБРОНИРОВАТЬ</Button>
      </CardActions>
      
    </Card>
  );
}
