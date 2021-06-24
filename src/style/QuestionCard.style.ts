import styled from 'styled-components'

export const Wrapper = styled.div`
  p{
    color: #fff;
    font-size: 16px;
    text-align: center;
  }
`

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover{
    opacity: 0.8;
  }

  button{
    width: 100%;
    cursor: pointer;
    user-select: none;
    font-size: 12px;
    height: 40px;
    margin: 5px 0;
    background: ${({correct , userClicked}) =>
      (correct
        ? 'linear-gradient(90deg, rgba(58,158,74,1) 26%, rgba(56,204,19,1) 52%, rgba(19,203,156,1) 100%)'
        : !correct && userClicked
          ? 'linear-gradient(90deg, rgba(235,21,21,1) 26%, rgba(199,17,17,1) 52%, rgba(136,16,16,1) 100%);'
          : 'linear-gradient(90deg, rgba(210,209,209,1) 26%, rgba(180,180,180,1) 52%, rgba(186,173,173,1) 100%);'
    )};
    border-radius: 10px;
    border: 3px solid black;
    color: #fff;
  }
`
