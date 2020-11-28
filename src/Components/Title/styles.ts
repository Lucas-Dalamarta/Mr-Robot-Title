import styled, {keyframes} from 'styled-components'


export const Container = styled.div`
  height: 100vh;
  
  display: flex;
  justify-content: center;
  align-items: center;
`

const glitch = keyframes`
  0% {
    transform: translateX(-2px);
  }

  10% {
    transform: translateY(1px);
  }

  50% {
    transform: translateY(-1px);
  }

  90% {
    transform: translateX(1px);
  }

  100% {
    transform: translateY(3px);
  }
`

export const Text = styled.img`
  width: 70rem;
  margin-bottom: 15rem;

  @media (max-width: 800px) {
    width: 25rem;
  }

  animation: ${glitch} 5s ease-in infinite;
`