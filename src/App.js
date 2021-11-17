import "./App.css";
import initialData from "./initialData"
import Column from "./Column";
import {DragDropContext} from "react-beautiful-dnd";

const App = () => {

    const state = initialData

    const onDragEnd = (result) => {

    }
    return (
        <DragDropContext onDragEnd={onDragEnd()}>
            {state.columnOrder.map(columnId => {
                const column = state.columns[columnId]
                const tasks = column.taskIds.map(taskId => state.task[taskId])
                return <Column key={column.id} column={column} tasks={tasks}/>
            })}
        </DragDropContext>
    )
};

export default App;
