import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./card-item.css" 

export const ShopCard = (props) => {
    const {name, img, descr, deleteCard, makeActive, id, active, price, storeQuantity} = props;
    const trashImg = "https://w7.pngwing.com/pngs/582/502/png-transparent-rubbish-bins-waste-paper-baskets-computer-icons-trash-miscellaneous-rectangle-recycling-thumbnail.png"
    const cardClass = active ? "cards__item cards__item_type_active": "cards__item";



    return (
      <div onClick={makeActive(id)} className={cardClass}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="img"
            height="180"
            image={img}
          />
          <CardContent>
            <Typography style={{minHeight: 60}} gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography style={{minHeight: 80, textAlign: "left"}} variant="body2" color="text.secondary">
              {descr}
              <p style={{textAlign: "left"}}>Цена: {price} руб.</p>
              <p style={{textAlign: "left"}}>На складе: {storeQuantity} шт.</p>
            </Typography>
          </CardContent>
          <CardActions className='cards__group'>
            <Button size="small">Share</Button>
            <Button onClick={deleteCard(id)} size="small">
              <img style={{width: 35}} src={trashImg} alt="img"></img>
            </Button>
          </CardActions>
        </Card>
      </div>

    );
}
