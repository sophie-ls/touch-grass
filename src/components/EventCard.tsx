import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import { roboto } from '../app/fonts';

export default function EventCard(props: any) {
    return (
        <Card sx={{ width: 320, marginRight: 5, display:'flex', justifyContent:'space-between', flexDirection:'column'}}>
          <CardMedia
            component="img"
            alt="event"
            height="220"
            width="320"
            image={props.src}
            style={{objectFit: "cover"}}
          />
          <CardContent className={roboto.className} style={{fontWeight: "500", borderRadius: 8}}>
            <h1 style={{fontSize: 20}}>{props.name}</h1>
            <p>{props.date}</p>
            <Stack direction="row" spacing={1}>
              <Chip label={props.tag} variant="outlined"/>
              <Chip label={props.tag2} variant="outlined" />
            </Stack>
          </CardContent>
          <CardActions >
            <Button size="medium">Learn more</Button>
          </CardActions>
        </Card>
      );
}