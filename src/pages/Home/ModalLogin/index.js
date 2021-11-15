import Button from '../../../components/Button'
import Input from '../../../components/Input'
import Modal from '../../../components/Modal'
import * as S from './styles'

export default function ModalLogin ({
  active,
  setModalActive
}) {
  return (
    <Modal
      active={active}
      data-cy='modal-login'
      handleClose={setModalActive}
    >
      <S.Title>
        Get Started
        <strong>JUST LOGIN</strong>
      </S.Title>

      <Input
        data-cy='input-username'
        label='Username:'
        type='text'
      />

      <S.Space />

      <Input
        data-cy='input-password'
        label='Password:'
        type='password'
      />

      <S.FlexEnd>
        <S.ButtonContainer>
          <Button large primary>LOGIN</Button>
        </S.ButtonContainer>
      </S.FlexEnd>
    </Modal>
  )
}
