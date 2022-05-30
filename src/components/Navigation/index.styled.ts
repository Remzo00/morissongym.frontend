import styled from 'styled-components'

export const Wrapper = styled.div`
 background: rgba(0, 0, 0, 0.3);
  width: max-content;
  display: block;
  padding: 0.75rem 1.7rem;
  z-index: 2;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2rem;
  display: flex;
  gap: 0.8rem;
  border-radius: 3rem;
  backdrop-filter: blur(15px);

`

export const Icon = styled.a`
background: transparent;
  padding: 0.9rem;
  border-radius: 50%;
  display: flex;
  color: black;
  font-size: 1.1rem;

  &:hover{
    background: rgba(0, 0, 0, 0.3);
  }
`



