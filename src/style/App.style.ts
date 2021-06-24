import styled , {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html{
    height:100%;
  }

  body{
    background: linear-gradient(90deg, rgba(143,58,158,1) 26%, rgba(212,71,237,1) 52%, rgba(180,19,203,1) 100%);
    padding: 0 20 px;
    display: flex;
    justify-content: center;
    font-family: 'Catamaran' , sans-serif;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  >p {
    color: #fff;
  }

  .score{
    color: #fff;
    font-size: 32px;
  }

  h1{
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }

  .start , .next{
    cursor: pointer;
    border: 2px solid black;
    box-shadow: 0 5px 10px rgba(0 , 0 , 0, 0.5);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    text-transform: uppercase;
    background-color: white;
  }
`
