import Image from 'next/image'
import * as S from './styles'

export default function Warning () {
  return (
    <S.Warning>
      <S.Shape />

      <div>
        <S.Title>
          Hello <strong>Student<span>.</span></strong>
        </S.Title>
        <S.Description>
          Whether you are a student trying to find your ideal private language teachers/tutors
        </S.Description>
      </div>

      <S.Illustration>
        <Image
          src='/assets/svg/illustration.svg'
          alt='Eduick'
          width={332}
          height={182}
        />
      </S.Illustration>
    </S.Warning>
  )
}
