import styled from 'styled-components';

interface ButtonCheck{
    selected?: boolean;
}


export const ItemsLeft = styled.span`
    font-size: 12px;
    color: hsl(237, 14%, 26%);
    align-items: center;
`;

export const ItemsOrder = styled.button`
    font-size: 14px;
    color: ${(props: ButtonCheck) => props.selected ? 'hsl(220, 98%, 61%)' : 'hsl(237, 14%, 26%)'};
    border: none;
    background: none;
    align-items: center;
    &:hover{
        color: white;
    }
`;

export const ItemsClear = styled.button`
    font-size: 14px;
    color: hsl(233, 14%, 35%);
    
    border: none;
    background: none;
    align-items: center;
    &:hover{
        color: white;
    }
`;

export const ContainerInfos = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    margin: 0 15px 0 15px;
`;

export const ContainerInfosOrder = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;