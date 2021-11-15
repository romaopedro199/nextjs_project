import { useState } from 'react'
import Image from 'next/image'
import * as S from './styles'

export default function Input ({
  'data-cy': dataCy,
  label,
  placeholder,
  type
}) {
  const [forceText, setForceText] = useState(false)

  return (
    <S.Container>
      {label && <S.Label>{label}</S.Label>}
      <S.Input
        data-cy={dataCy}
        placeholder={placeholder}
        type={forceText ? 'text' : type}
      />
      {type === 'password' &&
        <S.RevealPassword
          data-cy='button-show-password'
          forceText={forceText}
          onClick={() => setForceText(!forceText)}
        >
          <Image
            src={`/assets/svg/${forceText ? 'eye-block' : 'eye'}.svg`}
            alt='...'
            width={24}
            height={24}
          />
        </S.RevealPassword>}
    </S.Container>
  )
}
