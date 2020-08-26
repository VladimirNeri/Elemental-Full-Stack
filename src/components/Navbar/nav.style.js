import styled from 'styled-components';

export const Nav = styled.div`
  background-color: white;
  display: grid;
  grid-template-columns: 1fr auto 1fr; 
  font-size: 12px;
  text-transform: uppercase;
  height: 4rem; 
  width: 82.5%;
  
  overflow: hidden;
  z-index: 21; 
  padding-top: .75rem;
  position: fixed;
  top: 0; 

  @media (max-width: 1029px) {
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

  h1 {
    &:hover {
      color: #1e90ff;
      text-decoration: none;
    }
  }

  .links {
    grid-column: 2/3; 
    
    @media (max-width: 1029px) {
      grid-column: 3/3;
      margin: auto;
    }

    @media (max-width: 487px) {
      display: none;
    }
  }

  .icons {
    grid-column: 3/3;
    justify-self: end;
    
    @media (max-width: 1029px) {
      display: none; 
    }
  }

  ul {
    padding: 5px; 
    align-content: center;
    font-size: 16px; 

    a {
      color: inherit; 
      text-decoration: none; 
    }
    
  li {
    display: inline-block;
    margin-right: 20px; 
    transition: opacity 0.5s ease; 
    cursor: pointer; 
    
    :last-of-type {
      margin-right: 0px; 
    }
  }
`;
