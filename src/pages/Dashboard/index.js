import Courses from './Courses'
import Footer from './Footer'
import Nav from './Nav'
import Warning from './Warning'
import * as S from './styles'

export default function Home () {
  return (
    <>
      <Nav />
      <S.MainContainer>
        <S.Content>
          <Warning />
          <Courses />
        </S.Content>
      </S.MainContainer>
      <Footer />
    </>
  )
}
