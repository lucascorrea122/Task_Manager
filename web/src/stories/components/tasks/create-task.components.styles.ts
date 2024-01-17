import styled from "styled-components";

interface checkedProps {
  checked: any;
}

export const ContainerTasks = styled.div`
  border-radius: 4px;
  margin-top: 20px;
  background-color: hsl(235, 24%, 19%);
`;

export const TextFieldStyled = styled.input`
  background-color: transparent;
  width:80%;
  margin-left: 15px;
  border: none;
  background: none;
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
  color: white;
  font-size: 18px
  `;

export const ContainerCreateTaskStyled = styled.div`
  display: flex;
  align-items: center;
  background-color: hsl(235, 24%, 19%);
  height: 50px;
  border-radius: 4px;
  
  `;
export const ButtonDelete = styled.button`
  overflow: hidden;
  width: 20px;
  height: 20px;
  padding: 0;
  margin-left: auto;
  margin-right: 15px;
  visibility: hidden;
  background: none;
  box-shadow: 0 0 0 0;
  border: 0 none;
 outline: 0;
`;

export const NodeWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  &:hover ${ButtonDelete}{
        visibility: visible;
    }
`;

export const ButtonCheck = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background-color:  hsl(235, 24%, 19%);
  border-color: hsl(234, 39%, 85%);
  border-style: solid;
  border-width: 1px;
  margin-left: 10px;
  &:hover {
      background: linear-gradient(135deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
      border-style: solid;
      border-width: 1px;
    }
    `;

export const TextNode = styled.span`
    font-size: 18px;
    margin-left: 15px;
    text-decoration: ${(props: checkedProps) => props.checked ? 'line-through' : 'none'};
    color:  ${(props: checkedProps) => props.checked ? 'hsl(233, 14%, 35%)' : 'hsl(234, 39%, 85%)'};
`;

export const CheckboxContainer = styled.div`
  width: 30px;
  height: 35px;
  padding-left: 5px;
  margin: 0px 4px;
  border-radius: 5px;
  background-color: transparent;
  display: flex;
  align-items: center;
  
`;
export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    overflow: hidden;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    z-index: -1;
`;


export const Text = styled.label`
    color: ${(props: checkedProps) => props.checked ? '#FFF' : '#555'};
`;

export const StyledCheckbox = styled.label`
  background: ${(props: checkedProps) => props.checked ? 'linear-gradient(135deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))' : 'hsl(235, 24%, 19%)'};;
  margin-left : 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    display: ${(props: checkedProps) => props.checked ? 'flex' : 'none'};
    filter: invert(75%) sepia(11%) saturate(6042%) hue-rotate(30deg) brightness(105%) contrast(68%);
  }
  width: 20px;
  height: 20px;
  border-radius: 50px;
  border-color: hsl(234, 39%, 85%);
  border-style: solid;
  border-width: 1px;
  &:hover {
      border-color: linear-gradient(135deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
      border-style: solid;
      border-width: 1px;
    }
`;

