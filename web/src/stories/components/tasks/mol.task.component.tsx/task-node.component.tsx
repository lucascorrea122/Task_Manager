import React, { useState } from 'react';
import { ButtonDelete, HiddenCheckbox, NodeWrapper, StyledCheckbox, TextNode } from '../create-task.components.styles';
import check from '../../../../assets/icon-check.svg';
import iconX from '../../../../assets/icon-cross.svg';

interface Task {
    id: number;
    state: boolean;
    description: string;
}

type Props = {
    item: Task;
    onDelete: (taskId: number) => void;
    onUpdate: (taskId: number, taskStatus: boolean, taskDescription: string) => void;
}

const TaskNode = ({ item, onDelete, onUpdate }: Props) => {
    const [checked, setChecked] = useState(item.state);

    const handleButtonDelete = (id: number) => {
        onDelete(id);
    }
    const handlerButtonUpdate = (taskId: number, taskStatus: boolean, taskDescription: string) => {
        onUpdate(taskId, taskStatus, taskDescription);
    }
    return (
        <NodeWrapper>
            <StyledCheckbox checked={checked}>
                <HiddenCheckbox
                    onChange={e => setChecked(e.target.checked)}
                    checked={checked}
                    type="checkbox"
                    onClick={() => handlerButtonUpdate(item.id, checked, item.description)}
                />
                <img
                    alt="tick icon"
                    style={{ width: '15px' }}
                    src={check}
                />
            </StyledCheckbox>
            <TextNode checked={checked}>{item.description}</TextNode>
            <ButtonDelete onClick={() => handleButtonDelete(item.id)}>
                <img
                    alt="tick icon"
                    style={{ width: '15px' }}
                    src={iconX}
                />

            </ButtonDelete>
        </NodeWrapper>
    )
}
export default TaskNode;
