import React, { useState } from 'react';
import { ContainerInfos, ContainerInfosOrder, ItemsClear, ItemsLeft, ItemsOrder} from './filter.tasks.components.styled';

type Props = {
    filter: (itemNumber: number) => void;
    
}

const FilterTask = ({filter} : Props) => {
    const filters = ['All', "Active", "Completed"];
    const [selectetedItem, setselectetedItem] = useState<number[]>([0]);
    
    const handlerItemSelected = (filterSelected: number) =>{
        setselectetedItem([filterSelected]);
        filter(filterSelected);
    }

    return (
        <ContainerInfos>
            <ItemsLeft>5 itens Left</ItemsLeft>
            <ContainerInfosOrder>
                {filters.map((item, index) =>(
                    <ItemsOrder 
                        onClick={() => {handlerItemSelected(index)}} 
                        selected={selectetedItem.includes(index)}>{item}
                    </ItemsOrder>
                ))}
            </ContainerInfosOrder>
            <ItemsClear>Clear Completed</ItemsClear>
        </ContainerInfos>
    )
}

export default FilterTask;
