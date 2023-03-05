import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  max-width: 31.25rem;
  margin: 0 auto;
  width: 100%;
`

export const Header = styled.header`
  width: 100%;

  img {
    width: 100%;
    height: 14rem;
    object-fit: cover;
  }
`

export const Main = styled.main`
  position: absolute;
  top: 12.9rem;
  background-color: #fff;
  width: 100%;
  height: auto;

  -webkit-border-top-left-radius: 20px;
  -webkit-border-top-right-radius: 20px;
  -moz-border-radius-topleft: 20px;
  -moz-border-radius-topright: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    position: absolute;
    top: -4.375rem;
    width: 10rem;
    height: 10rem;
    border-radius: 100%;
    border: 5px solid #fff;
  }
`
export const InfoProfile = styled.div`
  margin-top: 6rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding: 0 1rem;

  h1 {
    font-weight: 700;
    font-size: 1.5rem;
    color: #01154a;
  }
  span {
    font-weight: 400;
    color: #01154a;
  }
  p {
    text-align: justify;
    color: #01154a;
  }
`
export const SocialLinks = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 0 1rem;

  h1 {
    font-weight: 700;
    font-size: 1rem;
  }
`
export const Button = styled.button`
  width: 100%;
  background-color: ${props => props.color || '#DD2A7B'};
  color: #fff;

  padding: 0.6875rem 3.75rem;
  border-radius: 10px;

  cursor: pointer;
`
