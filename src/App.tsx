import React from 'react';
import { Board } from './components/Board';
import { DragDropContext } from 'react-beautiful-dnd';


const App = () => {
    return (
        <DragDropContext onDragEnd={() => {}}>
            <Board/>
        </DragDropContext>
    );
};

export default App;
