import React from 'react';
import { Column } from './Column';
import { v4 as uuidv4 } from 'uuid';


const Board = () => {

    const array1 = [ { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 } ];
    const array2 = [ { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }, { id: 11 }, { id: 12 } ];


    return (
        <div className="flex gap-2.5 p-5">
            <Column uniqueId={uuidv4()} header="Заблокированные" cardArray={array1}/>
            <Column uniqueId={uuidv4()} header="Текущие" cardArray={array2}/>
            <Column uniqueId={uuidv4()} header="Выполнено"/>

            <div className="pr-5"/>
        </div>
    );
};


export { Board };