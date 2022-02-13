import React from 'react';
import { Avatar, Button, Card as MUICard, CardActions, CardContent, Typography } from '@mui/material';
import { Draggable } from 'react-beautiful-dnd';


interface Props {
    id: number;
    index: number;
}

const Card = ({ id, index }: Props) => {
    return (
        <Draggable draggableId={id.toString()} index={index}>
            {(provided) => (
                <MUICard className="mb-2.5 mx-3 w-[250px]"
                         {...provided.draggableProps}
                         {...provided.dragHandleProps} ref={provided.innerRef}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions className="flex justify-between">
                        <div>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </div>
                        <Avatar className="bg-gradient-to-tl from-blue-700 to-blue-300" sx={{ width: 24, height: 24 }}>
                            A
                        </Avatar>
                    </CardActions>
                </MUICard>
            )}
        </Draggable>
    );
};


export { Card };