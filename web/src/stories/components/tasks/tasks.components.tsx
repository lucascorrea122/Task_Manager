import React, { useState, useEffect } from 'react';
import { ContainerTasks } from './create-task.components.styles';
import api from '../../../services/api';
import TaskNode from '../tasks/mol.task.component.tsx/task-node.component'
import TaskCreate from '../../components/tasks/create-task.components';
import FilterNode from './mol.filter.tasks/filter.tasks.components';

interface Task {
    id: number;
    state: boolean;
    description: string;
}

const Tasks = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    useEffect(() => {
        api.get('tasks/').then(response => {
            setTasks(response.data);
            console.log(response.data);
        });
    }, [])

    const handleAddTask = (taskName: string) => {
        let newList = [...tasks];
        newList.push({
            id: tasks.length + 1,
            state: false,
            description: taskName
        });
        setTasks(newList);
        handlerCreateItem(taskName, tasks.length + 1);
    }

    const handDeleteTask = (taskId: number) => {
        let newList = [...tasks];
        console.log(taskId);
        for (var i = 0; i < newList.length; i++) {
            if (newList.hasOwnProperty(i)) {
                if (newList[i].id === taskId) {
                    newList.splice(i, 1);
                    setTasks(newList);
                    handlerDeleteItem(taskId);
                    break;
                }
            }
        }
    }

    const handleUpdate = (taskId: number, taskStatus: boolean, taskDescription: string) => {
        handlerUpdateItem(taskId, taskStatus, taskDescription);
    }

    const [filtro, setFiltro] = useState(0);
    
    let [listTasks] = [tasks];
    if(filtro === 1){
        listTasks = tasks.filter(taskCompleted => taskCompleted.state === false);
    }else if(filtro === 2){
        listTasks = tasks.filter(taskCompleted => taskCompleted.state === true);
    }else{
        listTasks = tasks;
    }

    const handlerFilter =(itemSelectd: number) =>{
        setFiltro(itemSelectd)
    }

    return (
        <>
            <TaskCreate onEnter={handleAddTask} />
            <ContainerTasks>
                {listTasks.map((item) => (
                    <TaskNode key={item.id} item={item} onDelete={handDeleteTask} onUpdate={handleUpdate} />
                ))}
                <FilterNode filter={handlerFilter} />
            </ContainerTasks>
        </>
    )
}


/**
 * method that creates a task in the API
 * 
 * @param description 
 * @param id 
 */
function handlerCreateItem(description: string, id: number) {
    api.post(`tasks/`, {
        description: description,
        state: false,
        id: id
    })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });

}

/**
 * Method that delete a task;
 * 
 * @param id 
 */
function handlerDeleteItem(id: number) {
    api.delete(`tasks/${id}`, {
    })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
}

/**
 * Method that update a task;
 * 
 * @param id 
 * @param status 
 * @param description 
 */
function handlerUpdateItem(id: number, status: boolean, description: string) {

    api.put(`tasks/${id}`, {
        description: description,
        state: !status,
        id: id
    })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });

}





export default Tasks;
