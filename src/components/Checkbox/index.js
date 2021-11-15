import Image from 'next/image'
import * as S from './styles'

export default function Input ({
  checked,
  'data-cy': dataCy,
  label,
  onClick
}) {
  return (
    <S.Checkbox
      checked={checked}
      data-cy={dataCy}
      onClick={onClick}
    >
      <S.Circle checked={checked}>
        <S.Check checked={checked}>
          <Image
            src='/assets/svg/check.svg'
            alt='...'
            width={10.41}
            height={8.12}
          />
        </S.Check>
      </S.Circle>
      <S.Label>{label}</S.Label>
    </S.Checkbox>
  )
}
