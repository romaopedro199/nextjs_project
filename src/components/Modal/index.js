import Image from 'next/image'
import * as S from './styles'

export default function Modal ({
  children,
  active,
  'data-cy': dataCy,
  handleClose
}) {
  return (
    <S.Overlay
      active={active}
      data-cy={dataCy}
    >
      <S.Modal>
        <S.CloseButton
          data-cy='button-close-modal'
          onClick={() => handleClose(false)}
        >
          <Image
            src='/assets/svg/hamburger-close.svg'
            alt='...'
            width={23}
            height={23}
          />
        </S.CloseButton>
        {children}
      </S.Modal>
    </S.Overlay>
  )
}
