export default function handler (req, res) {
  setTimeout(() => {
    res.status(200).json([
      {
        image: '/assets/png/course.png',
        lessons: 10,
        stars: [true, true, true, false, false],
        title: 'Master English: Improve Your Speaking'
      },
      {
        image: '/assets/png/course.png',
        lessons: 10,
        stars: [true, true, true, true, false],
        title: 'Master English: Improve Your Speaking'
      },
      {
        image: '/assets/png/course.png',
        lessons: 10,
        stars: [true, true, false, false, false],
        title: 'Master English: Improve Your Speaking'
      },
      {
        image: '/assets/png/course.png',
        lessons: 10,
        stars: [true, true, true, true, true],
        title: 'Master English: Improve Your Speaking'
      },
      {
        image: '/assets/png/course.png',
        lessons: 10,
        stars: [true, true, true, true, false],
        title: 'Master English: Improve Your Speaking'
      },
      {
        image: '/assets/png/course.png',
        lessons: 10,
        stars: [true, false, false, false, false],
        title: 'Master English: Improve Your Speaking'
      }
    ])
  }, [2000])
}
