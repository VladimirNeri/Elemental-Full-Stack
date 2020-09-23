import styled from 'styled-components';

export const HeroStyl = styled.div`
  margin: auto;
  width: 70%;
  padding-bottom: 10px;

  @media (max-width: 450px) {
    width: 100%;
  }

  h3 {
    font-size: 5em;

    @media (max-width: 750px) {
      font-size: 4em;
    }

    @media (max-width: 450px) {
      font-size: 3em;
    }
  }

  p {
    font-size: 2em;

    @media (max-width: 750px) {
      font-size: 2em;
    }

    @media (max-width: 450px) {
      font-size: 1em;
    }

  }

  /* Should be on the markup */
  img {
    width: 900px;
    height: auto;
  }
`;
