import React from 'react';
import { useDrop } from 'react-dnd';


interface Props {
    statuses: any;
    status: any;
    onDrop: Function;
    children: any;
}

const DropWrapper = ({ onDrop, statuses, status, children }: Props) => {

    const [ { isOver }, drop ] = useDrop({
        accept: 'Card',
        canDrop: (item: any, monitor) => {
            const cardPosition = statuses.findIndex((index: any) => index.status === item.status);
            const statusPosition = statuses.findIndex((index: any) => index === status);
            return [ cardPosition + 1, cardPosition - 1, cardPosition ].includes(statusPosition);
        },
        drop: (item, monitor) => {
            onDrop(item, monitor, status);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    });

    return (
        <div ref={drop}>
            {React.cloneElement(children, { isOver })}
        </div>
    );
};


export { DropWrapper };