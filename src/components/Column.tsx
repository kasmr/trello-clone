import React from 'react';
import { Card } from './Card';
import { Button, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Droppable } from 'react-beautiful-dnd';


interface Props {
    uniqueId: string;
    header?: string;
    cardArray?: { id: number }[];
}

const Column = React.memo(({ cardArray, header = 'Задачи к выполнению',uniqueId }: Props) => {
    return (
        <div className="rounded-[4px] min-w-[276px] h-[780px] border bg-gray-100">
            <Typography className="p-3 !font-medium h-[65px]" component="p">
                {header}
            </Typography>

            <Droppable droppableId={uniqueId}>
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps} className="h-[650px] overflow-auto">
                        {cardArray?.map((card, index) => (
                            <div key={card.id}>
                                <Card index={index} id={card.id}/>

                                <div className='h-0'>
                                    {provided.placeholder}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </Droppable>

            <div className="flex items-center justify-center mt-2.5">
                <Button className="!lowercase w-full h-[46px] !rounded-none" startIcon={<AddCircleOutlineIcon/>}>
                    add card
                </Button>
            </div>
        </div>
    );
});


export { Column };