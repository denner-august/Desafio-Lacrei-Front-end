import styled from "styled-components";

export const Container = styled.div.attrs((props: { linkActive: number }) => {
  props.linkActive;
})`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 60px;
  padding: var(--Container-pading);

  background: var(--color-header-background);

  p {
    font-size: 32px;

    color: var(--color-green);
  }

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 327px;

    a {
      cursor: pointer;

      font-size: 16px;
    }

    a:nth-child(${(props) => props.linkActive}) {
      color: var(--color-green);
    }
  }

  @media screen and (max-width: 550px) {
    flex-direction: column;
    padding: 0px;
    height: auto;

    ul {
      justify-content: center;
      width: auto;
      flex-wrap: wrap;

      a {
        margin: 0px 5px;
      }
    }
  }
`;
