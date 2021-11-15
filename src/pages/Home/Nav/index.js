import { useState } from 'react'
import Image from 'next/image'
import Button from '../../../components/Button'
import Header from '../../../components/Header'
import * as S from './styles'

export default function Nav ({
  setModalActive
}) {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <Header transparent>
      <S.Flex>
        <S.OpenMenu
          data-cy='button-open-menu'
          onClick={() => setShowMenu(true)}
        >
          <Image
            src='/assets/svg/hamburger.svg'
            alt='...'
            width={24}
            height={24}
          />
        </S.OpenMenu>

        <Image
          src='/assets/svg/logo.svg'
          alt='Eduick'
          width={109}
          height={18}
        />

        <S.Menu
          data-cy='menu'
          show={showMenu}
        >
          <S.MenuLogo>
            <Image
              src='/assets/svg/logo.svg'
              alt='Eduick'
              width={109}
              height={18}
            />
          </S.MenuLogo>
          <S.CloseMenu
            data-cy='button-close-menu'
            onClick={() => setShowMenu(false)}
          >
            <Image
              src='/assets/svg/hamburger-close.svg'
              alt='...'
              width={24}
              height={24}
            />
          </S.CloseMenu>

          <S.Links>
            <S.Link href='#'>How it works</S.Link>
            <S.Link href='#'>About Us</S.Link>
          </S.Links>

          <S.Button>
            <Button
              large
              primary
              data-cy='button-open-modal'
              onClick={() => setModalActive(true)}
            >
              Get Started
            </Button>
          </S.Button>
        </S.Menu>

      </S.Flex>
    </Header>
  )
}
