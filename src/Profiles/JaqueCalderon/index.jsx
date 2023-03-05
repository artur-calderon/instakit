import { Profile } from '../../components/Profile'
import profilePhoto from './assets/JaqueCello.jfif'
export function JaqueProfile() {
  return (
    <Profile
      capaUrl="https://scontent.foal2-1.fna.fbcdn.net/v/t1.18169-9/2145_436907019689731_1678426062_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeErz0KJvzxlD9P--QwDRB-ZG_Us1EUbU1wb9SzURRtTXHHhBx8gRdu730JMkmYkpqEkjOyMDYCsA5sj80sfiJxL&_nc_ohc=x3h9MuReiHMAX8K-yzz&_nc_ht=scontent.foal2-1.fna&oh=00_AfD1w5TO0BNhmipMi4iNWaBpTpJrocm0UA0JrGRDMqtcNw&oe=642C63E2"
      perfilUrl={profilePhoto}
      name="Jaqueline Calderon"
      profissao="Violoncelista|Professora de Música"
      aboutME="Gosto de Tocar, ler livros e ver a natureza"
      instaLink="https://www.instagram.com/jaquecalder0n/"
      whatsLink='https://wa.me/5569993736910?text=Ola%2C+vim+pelo+instaKit'
      colorBtn='#581d22'
    />
  )
}
