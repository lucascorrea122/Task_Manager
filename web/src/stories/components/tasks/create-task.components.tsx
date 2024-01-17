import React, { useState, KeyboardEvent } from 'react';
import { ButtonCheck, ContainerCreateTaskStyled, TextFieldStyled } from './create-task.components.styles';

type Props = {
    onEnter: (taskName: string) => void
}

const TaskCreate = ({ onEnter }: Props) => {
    const [inputText, setInputText] = useState('');

    const handleKeyUp = (event: KeyboardEvent) => {
        if (event.code === 'Enter' && inputText !== '') {
            onEnter(inputText);
            setInputText('');
        }
    }

    return (
        <>
            <ContainerCreateTaskStyled>
                <ButtonCheck />
                <TextFieldStyled
                    autoComplete='off'
                    id='createTask'
                    name={'nextPageParam'}
                    type='search'
                    placeholder={'Create a New Todo'}
                    value={inputText}
                    onChange={e => setInputText(e.target.value)}
                    onKeyUp={handleKeyUp}
                />
            </ContainerCreateTaskStyled>
        </>
    )
}
export default TaskCreate;
