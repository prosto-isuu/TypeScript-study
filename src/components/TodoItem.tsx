import React, {FC} from 'react';
import {ITodo} from "../types/types";

interface TodosItemProps {
    todos: ITodo;
}

const TodoItem:FC<TodosItemProps> = ({todos}) => {
    return (
        <div>
            <input
                checked={todos.completed}
                type="checkbox"/>
            {todos.title}, {todos.id}
        </div>
    );
};

export default TodoItem;