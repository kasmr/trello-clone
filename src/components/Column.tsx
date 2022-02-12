import React, { ReactElement } from 'react';


interface Props {
    isOver: boolean;
    children: ReactElement | ReactElement[];
}

const Column = ({ isOver, children }: Props) => {

    const className = isOver ? 'highlighted' : '';

    return (
        <div className={className}>
            {children}
        </div>
    );
};


export { Column };