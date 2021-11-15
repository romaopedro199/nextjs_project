import * as S from './styles'

export default function Button ({
  children,
  'data-cy': dataCy,
  extraLarge,
  large,
  primary,
  secondary,
  onClick
}) {
  return (
    <S.Button
      data-cy={dataCy}
      extraLarge={extraLarge}
      large={large}
      primary={primary}
      secondary={secondary}
      onClick={onClick}
    >
      {children}
    </S.Button>
  )
}
