import Image from 'next/image'
import Button from '../../../../components/Button'
import * as S from './styles'

export default function Course ({
  data
}) {
  return (
    <S.Card>
      <S.Image>
        <Image
          src={data?.image}
          alt='...'
          width={335}
          height={163}
          layout='responsive'
          priority
        />
      </S.Image>

      <S.FlexBetween>
        <S.Flex>
          {data?.stars.map((star, index) => (
            <S.Star key={index}>
              <Image
                src={`/assets/svg/star-${star ? 'yellow' : 'grey'}.svg`}
                alt='...'
                width={23}
                height={23}
                layout='responsive'
              />
            </S.Star>
          ))}
        </S.Flex>

        <S.Button>
          <Button>{data?.lessons} LESSONS</Button>
        </S.Button>
      </S.FlexBetween>

      <S.Title>{data?.title}</S.Title>
    </S.Card>
  )
}
