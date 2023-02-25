import styled from "styled-components";

export const Container = styled.div`
  .Descricao {
    p {
      border-left: 4px solid #018762;
      padding-left: 1rem;
      width: 521px;
      font-size: 24px;
      color: #515151;
    }
  }

  @media screen and (max-width: 555px) {
    .Descricao {
      p {
        width: auto;
      }
    }
  }
`;
