import { tours } from '../data/data'
import Title from './Title'
import Tour from './Tour'

const Tours = () => {
  return (
    <section className='section' id='tours'>
      <Title title='Eventos' subTitle='Destacados' />

      <div className='section-center featured-center'>
        {tours.map((tour) => {
          return <Tour {...tour} key={tour.id} />
        })}
      </div>
    </section>
  )
}

export default Tours