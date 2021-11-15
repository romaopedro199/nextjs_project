import { useState } from 'react'
import Form from './Form'
import LeftShapeBox from './LeftShapeBox'
import ModalLogin from './ModalLogin'
import Nav from './Nav'
import RightShapeBox from './RightShapeBox'
import * as S from './styles'

export default function Home () {
  const [modalActive, setModalActive] = useState(false)

  return (
    <>
      <S.MainContainer>
        <Nav setModalActive={setModalActive} />

        <S.Content>
          <S.Row>
            <LeftShapeBox />
            <Form />
          </S.Row>
        </S.Content>
        <S.Footer />
        <RightShapeBox />
      </S.MainContainer>
      <ModalLogin active={modalActive} setModalActive={setModalActive} />
    </>
  )
}
