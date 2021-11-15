import { useState } from 'react'
import Button from '../../../components/Button'
import Checkbox from '../../../components/Checkbox'
import Input from '../../../components/Input'
import * as S from './styles'

export default function Form () {
  const [checkboxOption, setCheckboxOption] = useState(0)

  return (
    <S.Container>
      <S.Title>
        Find your
        <strong>BEST TEACHER</strong>
      </S.Title>
      <S.Description>
        Whether you are a student trying to find your ideal private language teachers/tutors or a teacher trying to find great students for your customised private lessons!
      </S.Description>

      <Input
        data-cy='input-search'
        placeholder='Type here what are you looking for'
        type='text'
      />

      <S.Row>
        <S.Flex>
          <S.CheckContainer>
            <Checkbox
              checked={checkboxOption === 0}
              data-cy='checkbox-teacher'
              label="I'M A TEACHER"
              onClick={() => setCheckboxOption(0)}
            />
          </S.CheckContainer>
          <S.CheckContainer>
            <Checkbox
              checked={checkboxOption === 1}
              data-cy='checkbox-student'
              label="I'M A STUDENT"
              onClick={() => setCheckboxOption(1)}
            />
          </S.CheckContainer>
        </S.Flex>

        <S.ButtonContainer>
          <Button extraLarge primary>SEARCH</Button>
        </S.ButtonContainer>
      </S.Row>
    </S.Container>
  )
}
