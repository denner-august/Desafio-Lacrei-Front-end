import styled from "styled-components";

export const Container = styled.footer.attrs(
  (props: { linkActive: number }) => {
    props.linkActive;
  }
)`
  height: 151px;
  padding-top: 32px;
  margin: var(--Container-pading);

  border-top: 1px solid var(--color-green);

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  ul {
    display: flex;
    flex-direction: row;

    a {
      font-size: 16px;

      margin: 0px 40px 0px 0px;

      cursor: pointer;
    }

    a:nth-child(${(props) => props.linkActive}) {
      font-weight: bold;
    }
  }

  p {
    font-size: 12px;
  }

  .Social {
    margin-right: 2rem;
  }

  @media screen and (max-width: 520px) {
    padding-top: 0px;
    margin: 0 1rem;

    .ContainerSocial {
      margin-bottom: 1rem;
    }

    .links {
      flex-direction: column;
      margin: 10px 0px;

      a {
        margin: 0.2rem;
      }
    }
  }
`;
