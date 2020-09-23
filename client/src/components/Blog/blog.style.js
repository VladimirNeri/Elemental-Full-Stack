import styled from 'styled-components';

export const Pagstyl = styled.div`
  margin-top: 1em;
  text-align: center;
  font-size: 12px;
  
  @media (max-width: 764px) {
    font-size: 10px; 
    }
  h3 {
    margin-top: 2em;
    display: block;
  }

  p {
    width: 700px;
    display: block;
    margin-top: 1em;
    margin-left: auto;
    margin-right: auto;
    font-size: 14px;

    @media (max-width: 764px) {
    width: 80%;
    font-size: 10px; 
    }
  }

  .image,
  .image2 {
    display: block;
    margin-top: 2em;
    margin-left: auto;
    margin-right: auto;
    width: 750px; 

    @media (max-width: 678px) {
      width: 480px;
    }
    @media (max-width: 498px) {
      width: 280px;
    }

  }

  .fall-image {
    display: inline-block;
    margin-top: 2em;
    padding: 10px;
    height: 725px;
    width: 550px; 

    @media (max-width: 764px) {
      height: 580px;
      width: 440px;
    }

    @media (max-width: 498px) {
      height: 370px;
      width: 280px;
    }

  }

  .video {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 750px;

    @media (max-width: 800px) {
      width: 80%;
    }
  }

  .disqus {
    display: block;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    width: 80%;

    @media (max-width: 498px) {
    margin-top: 15px;
  }
`;
