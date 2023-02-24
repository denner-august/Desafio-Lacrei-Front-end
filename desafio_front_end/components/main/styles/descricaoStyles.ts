import styled from "styled-components";

export const Container = styled.div`
  h1 {
    width: 453px;
    margin-bottom: 32px;

    font-size: 48px;
  }

  p {
  
     font-size: 24px;
    
    width: 403px;
    margin-bottom: 60px;
    color: #515151;
    font-weight: 400; 
    

    text-align: left;
  }

  div {
    display: flex;
    justify-content: space-between;

    width: 453px;

    margin-bottom: 3rem;

    button {
      height: 48px;
      width: 192px;
      border-radius: 8px;

      font-size: 18px;

      color: #ffff;
      background: #018762;

      cursor: pointer;
    }

    button:nth-child(2) {
      color: #018762;
      background: white;

      border: 2px solid #018762;
    }
  }

  @media screen and (max-width: 520px) {
    div{

      flex-direction: column;
      justify-content: center;
      align-items: center;


      width:100%;

      button{
        margin:10px 0px;
      }
    }

    h1 {
      font-size:1.3rem;
      width:auto;
      
    }

    p {
      width:auto;
      text-align:center;
      font-size: 0.875rem;
    }
}
  }
`;
