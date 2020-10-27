import styled from 'styled-components';

export const AboutStyl = styled.div`
  font-family: 'Courier New', Courier, monospace;
  font-weight: 500; 
  display: block;
  margin-top: 2em;
  margin-left: auto;
  margin-right: auto;
  width: 850px;
  font-size: 35px; 

  @media (max-width: 950px) {
    font-size: 25px;
    width: 650px
  }

  @media (max-width: 720px) {
    width: 450px;
    font-size: 20px; 
  }

  @media (max-width: 487px) {
    width: 250px;
    font-size: 12px; 
  }

` 