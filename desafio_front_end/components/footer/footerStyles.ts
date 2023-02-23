import styled from "styled-components";

export const Container = styled.footer.attrs(
  (props: { linkActive: number }) => {
    props.linkActive;
  }
)`
  height: 151px;
  padding-top: 32px;
  margin: var(--Container-pading);

  border-top: solid;

  display: flex;
  flex-direction: column;

  ul {
    display: flex;
    flex-direction: row;

    width: auto;

    a {
      font-size: 16px;

      margin: 0px 40px 0px 0px;

      cursor: pointer;
    }

    a:nth-child(${(props) => props.linkActive}) {
      font-weight: bold;
    }
  }
`;
