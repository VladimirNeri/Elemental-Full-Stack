import styled from 'styled-components';

export const Nav = styled.div`
  background-color: white;
  display: grid;
  grid-template-columns: 1fr auto 1fr; 
  text-transform: uppercase;
  height: 5rem; 
  width: 99%;
  
  /* fix navbar to top */
  z-index: 21; 
  padding-top: 1.25em;
  position: fixed;
  top: 0; 

  @media (max-width: 950px) {
    grid-template-columns: 1fr 1fr; 
    margin: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    color: #1e90ff;
    text-decoration: none;
    transform: translateY(-3px);
  }

  .title {
    padding-top: 0.5rem; 

    &:hover {
      color: #1e90ff;
      text-decoration: none;
    }
  }

  .links {
    grid-column: 2/3; 
    
    @media (max-width: 950px) {
      grid-column: 3/3;
      margin: auto;
    }

    @media (max-width: 660px) {
      display: none;
    }
  }

  .button {
    min-width: 70px; 
  }

  .icons {
    grid-column: 3/3;
    justify-self: end;
    
    @media (max-width: 950px) {
      display: none; 
    }
  }

  ul {
    padding: 5px; 
    align-content: center;
    font-size: 17px; 

    a {
      color: inherit; 
      text-decoration: none; 
    }
    
  li {
    display: inline-block;
    margin-right: 30px; 
    transition: opacity 0.5s ease; 
    cursor: pointer; 
    
    :last-of-type {
      margin-right: 0px; 
    }
  }
}
`
