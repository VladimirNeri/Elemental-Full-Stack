import styled from 'styled-components';

export const FootStyl = styled.div`
  .footer {
    z-index: 21;
    padding-right: 0.25em;
    position: fixed;
    bottom: 0;
    width: 99%;

    @media (max-width: 1016px) {
      padding-right: 1.25em;
    }

    @media (max-width: 698px) {
      padding-right: 1.5em;
    }

    .btn_Class {
      float: right;
      z-index: 1;
      width: 120px;
      height: 40px;
      color: white;
      border: none;
      border-radius: 5px;
      outline: none;
      cursor: pointer;
      transition: background-color 350ms;

      @media (max-width: 610px) {
        width: 50px;
        heigth: 20px;
      }
    }

    .list-body {
      top: 45px;
      z-index: 1;
      box-sizing: border-box;
      width: 100%;
      padding: 0 20px;
      overflow: hidden;
      background-color: powderblue;
      border-radius: 5px 5px 0 0;
      height: 250px;

      display: grid;
      align-content: center;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;

      @media screen and (max-width: 610px) {
        display: inline-block;
        text-align: center;
        height: 350px;
      }

      .signup {
        grid-column: 1/2;
        padding: 3em;
        text-align: center;
        margin: auto;

        .firstName {
          height: 30px;
          width: 270px;
          margin-right: 10px;
          margin-top: 10px;
          padding-left: 5px;

          @media (max-width: 1265px) {
            margin-right: 0px;
          }
        }

        .lastName {
          height: 30px;
          width: 270px;
          margin-top: 10px;
          padding-left: 5px;
          /* margin-right: 10px;  */
        }

        .email {
          height: 30px;
          width: 270px;
          padding-left: 5px;
          display: block;
          margin: auto;

          margin-top: 10px;
        }

        .submit {
          height: 30px;
          width: 200px;
          /* margin-right: 10px; */
          margin-top: 10px;
        }
      }

      .exclusive {
        grid-column: 2/2;
        justify-self: center;
        padding: 3em;
      }

      .copyright {
        grid-column: 1 / span 2;
        justify-self: center;
        height: 3em;
        font-size: 15px;
      }

      .list-item--active {
        color: orangered;
        transition: 500ms;
      }
    }
    /* This fires as soon as the element enters the dorm */
    .list-transition-enter,
    .list-transition-appear {
      /*We give the list the initial dimension of the list button*/
      top: 0;
      width: auto;
      max-height: 40px;
      color: transparent;
      background-color: powderblue;
    }
    /* This is where we can add the transition*/
    .list-transition-enter-active,
    .list-transition-appear-active {
      top: 45px;
      width: 100%;
      max-height: 250px;
      background-color: powderblue;
      transition: all 400ms;

      @media screen and (max-width: 610px) {
        max-height: 350px;
      }
    }

    /* This fires as soon as the this.state.showList is false */
    .list-transition-exit {
      top: 45px;
      width: 100%;
      max-height: 250px;
      background-color: powderblue;

      @media screen and (max-width: 610px) {
        max-height: 350px;
      }
    }
    /* fires as element leaves the DOM*/
    .list-transition-exit-active {
      top: 0;
      width: 100%;
      max-height: 0px;
      color: transparent;
      background-color: powderblue;
      transition: all 400ms;
    }
  }
`;
