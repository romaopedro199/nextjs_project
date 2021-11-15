import { useCallback, useEffect, useRef, useState } from 'react'
import api from '../../../services/api'
import Button from '../../../components/Button'
import Course from './Course'
import * as S from './styles'

export default function Courses () {
  const isMounted = useRef(true)
  const [loading, setLoading] = useState(true)
  const [coursesData, setCoursesData] = useState([])

  const loadCourses = useCallback(async () => {
    setLoading(true)
    try {
      const response = await api.get('courses')
      const newCoursesData = coursesData

      response.data.forEach(item => newCoursesData.push(item))

      setCoursesData(newCoursesData)
    } catch (error) {
      console.log('Get courses error')
    } finally {
      setLoading(false)
    }
  })

  useEffect(() => {
    isMounted.current && loadCourses()
    return () => { isMounted.current = false }
  }, [loadCourses])

  return (
    <>
      <S.Row>
        {coursesData.map((course, index) => (
          <S.Col key={index}>
            <Course data={course} />
          </S.Col>
        ))}
      </S.Row>
      <S.Paginate>
        {!loading
          ? (
            <S.Button>
              <Button
                data-cy='button-paginate'
                large
                secondary
                onClick={() => loadCourses()}
              >
                LOAD MORE
              </Button>
            </S.Button>)
          : (
            <S.Loading>
              <S.LoadingItem />
              <S.LoadingItem />
              <S.LoadingItem />
            </S.Loading>)}
      </S.Paginate>
    </>
  )
}
