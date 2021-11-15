import * as S from './styles'

export default function Nav ({
  children,
  fixed,
  thin,
  transparent
}) {
  return (
    <S.MainContainer fixed={fixed} thin={thin} transparent={transparent}>
      <S.Actions>
        {children}
      </S.Actions>
    </S.MainContainer>
  )
}
