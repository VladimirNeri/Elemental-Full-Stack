import styled from 'styled-components';

export const Submitstyle = styled.div`
  margin-top: 1em; 
  text-align: center; 
  padding: 20px; 

  p {
    text-align: justify; 
    font-size: 2em;
    margin-top: 1em; 
    margin-bottom: 1em; 
    display: block; 
    width: 80%;
    margin-left: auto; 
    margin-right: auto; 


    @media (max-width: 690px) {
      width: 90%;
      font-size: 1.5em;
    }

    @media (max-width: 490px) {
      width: 100%;
      font-size: 1.25em;
    }

  }
`