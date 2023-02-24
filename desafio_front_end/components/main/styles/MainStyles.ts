import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: space-between;

  padding: var(--Container-pading);

  margin-bottom: 32px;
  margin-top: 64px;

  .Descricao,
  .renderImage {
    height: 100%;
  }

  @media screen and (max-width: 1041px) {
    flex-direction: column;
    align-items: center;

    margin-top: 34px;
  }

  @media screen and (max-width: 520px) {
    padding: 0px;
  }
`;
