import styled from 'styled-components';

export const Nav = styled.div`
  background-color: white;
  display: grid;
  grid-template-columns: repeat(7, auto); 
  font-size: 12px;
  text-transform: uppercase;
  height: 4rem; 
  
  overflow: hidden;
  padding-top: .25rem;
  position: fixed;
  top: 0; 
  width: 83%;

  @media (max-width: 1029px) {
    grid-template-columns: repeat(5, auto);
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

  .searchbar {
    grid-column: 2/3
    margin: auto;
    margin-top: .75rem;
    

    input {
      width: 20rem;
      outline: none; 
      text-indent: 2px;
    }

    @media (max-width: 1031px) {
      display: none; 
    }
  }

  .links {
    grid-column: 4/6; 
    
    @media (max-width: 1029px) {
      grid-column: 3/5;
      margin: auto;
    }

    @media (max-width: 583px) {
      grid-column: 7/7;
      margin-right: 0px;
    }

    @media (max-width: 487px) {
      display: none;
    }
  }

  .icons {
    grid-column: 7/7;
    justify-self: end;
    
    @media (max-width: 1029px) {
      grid-column: 5/5;
    }

    @media (max-width: 583px) {
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
