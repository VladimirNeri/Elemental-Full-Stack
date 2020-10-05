import styled from 'styled-components';

export const FormStyl = styled.div`
  input[type='text'],
  select {
    border: 1px solid #ccc;
    border-radius: 4px;
 
  }

  input[type='submit'] {
    width: 100%;
    background-color: #4caf50;
    color: white;

    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  input[type='submit']:hover {
    background-color: orangered;
  }
`;
