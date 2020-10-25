import styled from 'styled-components';

export const LoginStyl = styled.div`
  font-size: 14px;
  height: 240px;

  .loginEmail, 
  .loginInputPassword {
    margin-top: 10px;
  }
  
  .form-control {
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 40px;
    font-size: 12px; 
    
  }

  .login-buttons {
    margin-top: 29px;
    
    .login {
      background-color: #4caf50;
      float: left;
      width: 80px;
      height: 40px; 
      font-size: 12px;
    }

    .register {
      float: right;
    }
  }
`;
