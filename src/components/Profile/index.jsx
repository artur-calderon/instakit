import { NavLink } from "react-router-dom";
import { Header, InfoProfile, SocialLinks, Main, Container, Button } from "./styles";



export function Profile({ capaUrl, perfilUrl, name, profissao, aboutME, instaLink, faceLink, whatsLink, colorBtn }) {
  return (
    <Container>
      <Header>
        <img src={capaUrl} alt="" className="capa" />
      </Header>
      <Main>
        <img src={perfilUrl} alt="" />
        <InfoProfile>
          <h1>{name}</h1>
          <span>{profissao}</span>
          <p>{aboutME}</p>
        </InfoProfile>
        <SocialLinks>
          <h1>Links</h1>
          <NavLink to={instaLink} target='_blank'><Button color={colorBtn}>Instagram</Button></NavLink>

          <NavLink to={faceLink} target='_blank'><Button color={colorBtn}>Facebook</Button></NavLink>

          <NavLink to={whatsLink} target='_blank'><Button color={colorBtn}>Whatsapp</Button></NavLink>
        </SocialLinks>
      </Main>
    </Container>
  )
}
