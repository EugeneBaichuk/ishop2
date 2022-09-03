import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import "./card-item.css" 

export const ShopCard = ({name, img, descr, deleteCard, makeActive, id, active, price, storeQuantity}) => {
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
            <Typography style={{minHeight: 130, textAlign: "left"}} variant="body2" color="text.secondary">
              {descr}
              <p style={{textAlign: "left"}}>Цена: {price} руб.</p>
              <p style={{textAlign: "left"}}>На складе: {storeQuantity} шт.</p>
            </Typography>
          </CardContent>
          <CardActions className='cards__group'>
            <Button size="small">Share</Button>
            <Button onClick={deleteCard(id)} size="small">
              <DeleteOutlinedIcon />
            </Button>
          </CardActions>
        </Card>
      </div>
    );
}
