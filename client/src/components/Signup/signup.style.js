import styled from 'styled-components';

export const SignupStyl = styled.div`
  .card {
    background-color: powderblue;
    width: 500px;
    margin: auto;
    margin-top: 10px;
  }

  #registration-title {
    font-size: 17px;
  }

  .card-body {
    font-size: 12px;
  }

  .form-control {
    margin-bottom: 15px;
  }

  input[type='text'],
  input[type='email'],
  input[type='password'],
  select {
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 499px auto;
    height: 40px;
    font-size: 12px;
  }

  .btn,
  .btn:link,
  .btn:visited {
    text-transform: uppercase;
    color: white;
    margin: auto;
    margin-top: 25px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    text-decoration: none;
    border-radius: 10rem;
    border: none;
    -webkit-transition: all 0.4s;
    transition: all 0.4s;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;

    cursor: pointer;
    align-items: center;
    font-size: 1.6rem;
    height: 40px;
    width: 124px;
    background-color: #4caf50;
  }

  .btn:hover {
    -webkit-transform: translateY(-3px);
    transform: translateY(-3px);
    background-color: orangered; 
  }

  .btn:active {
    -webkit-transform: translateY(-1px);
    transform: translateY(-1px);
    -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }
  
  .btn:focus {
    outline: none;
    background-color: #4caf50;
  }
`;
