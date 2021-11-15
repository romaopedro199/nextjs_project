import { useState } from 'react'
import Image from 'next/image'
import Button from '../../../components/Button'
import Header from '../../../components/Header'
import * as S from './styles'

export default function Nav () {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <>
      <Header fixed thin>
        <S.Dots>
          <Image
            src='/assets/svg/header-dots.svg'
            alt='Eduick'
            width={67.62}
            height={33.7}
          />
        </S.Dots>
        <S.FlexBetween>
          <S.Flex>
            <Image
              src='/assets/svg/logo.svg'
              alt='Eduick'
              width={109}
              height={18}
            />
            <S.Link href='#' data-cy='link-my-classes'>MyClasses</S.Link>
          </S.Flex>

          <S.Flex>
            <S.Button>
              <Button secondary>
                CHANGE TO TEACHER MODE
              </Button>
            </S.Button>

            <S.Flex>
              <S.Arrow
                active={showMobileMenu}
                data-cy='arrow-dropdown'
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <Image
                  src='/assets/svg/arrow-down.svg'
                  alt='...'
                  width={24}
                  height={24}
                />
              </S.Arrow>

              <S.User>
                <Image
                  src='/assets/png/user.png'
                  alt='...'
                  width={34}
                  height={34}
                />
                <S.Notification />
              </S.User>
            </S.Flex>
          </S.Flex>

        </S.FlexBetween>
      </Header>

      <S.MobileMenu
        data-cy='mobile-menu'
        show={showMobileMenu}
      >
        <S.Item>
          CHANGE TO TEACHER MODE
          <Image
            src='/assets/svg/arrow-right.svg'
            alt='...'
            width={24}
            height={24}
          />
        </S.Item>
      </S.MobileMenu>
    </>
  )
}
