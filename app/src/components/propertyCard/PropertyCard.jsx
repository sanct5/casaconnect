import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import propertyExample from '../../assets/propertyExample.png';

export default function PropertyCard({ property }) {
    const { name, description, price, img } = property;

    return (
        <Card sx={{ maxWidth: 322, boxShadow: 0, backgroundColor: '#f2f2f2' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="auto"
                    image={img ? img : propertyExample}
                    alt="Casa en la llanura"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" fontWeight={600}>
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="body2" color="text.secondary" fontWeight={400}>
                        {description}
                    </Typography>
                    <Typography variant="h5" component="div">
                        <span style={{ color: 'black', fontWeight:600}}>{`$${price}`}</span>
                        {' '}
                        <span style={{ color: '#747474', fontWeight: 300 }}>Noche</span>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}