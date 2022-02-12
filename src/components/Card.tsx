import React, { useRef, useState } from 'react';
import { DropTargetMonitor, useDrag, useDrop } from 'react-dnd';


interface Props {
    card: any;
    cardPosition: any;
    moveCard: any;
    status: any;
}

const Card = ({ card, cardPosition, moveCard, status }: Props) => {

    const ref = useRef<any>(null);

    const [ ,drop ] = useDrop({
        accept: 'Card',
        hover(item: any, monitor: DropTargetMonitor) {

            const dragPosition = item.index;

            if (cardPosition === dragPosition) {
                return;
            }

            const hoverPosition = ref.current.getBoundingClientRect();
            const verticalCenterLine = (hoverPosition.bottom - hoverPosition.top) / 2;
            const cursorPosition = monitor.getClientOffset();
            const hoverCursorYPosition = cursorPosition && cursorPosition.y - hoverPosition.top;

            if (cardPosition < dragPosition && hoverCursorYPosition && hoverCursorYPosition < verticalCenterLine) {
                return;
            }

            if (cardPosition > dragPosition && hoverCursorYPosition && hoverCursorYPosition < verticalCenterLine) {
                return;
            }

            moveCard(cardPosition, dragPosition);
            item.index = dragPosition;
        },
    });

    const [ { isDragging }, drag ] = useDrag({
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
        type: 'Card',
        item: { type: 'Card', ...card, cardPosition },
    });

    const [ isOpen, setOpen ] = useState(false);

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    drag(drop(ref));

    return (
        <div ref={ref} style={{ opacity: isDragging ? 0 : 1 }} onClick={handleOpen}>
            {isOpen && <p>card.content</p>} Card
        </div>
    );
};


export { Card };