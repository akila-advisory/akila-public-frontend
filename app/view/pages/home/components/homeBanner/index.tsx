import { EarthImage, EarthVideo } from '~/view/assets'
import { useEffect, useState } from 'react'
import { BookDemo } from '~/view/components'
import ShootingStar from './ShootingStar'
import ShootingStars from './ShootingStar'

export default function HomeBanner() {
  const texts = [
    'Data Science',
    'Machine Learning',
    'Business Analytics',
    'Data Exploration'
  ]
  const [animateOut, setAnimateOut] = useState(false)
  const [currentText, setCurrentText] = useState('Business Analytics')

  let currentIndex = 0
  const changeText = () => {
    setAnimateOut(true)

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % texts.length
      setCurrentText(texts[currentIndex])
      setAnimateOut(false)
    }, 300)
  }

  useEffect(() => {
    const intervalId = setInterval(changeText, 3000) // Change text every 3 seconds

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="flex h-[80vh] flex-col items-center md:h-[90vh]">
      <video
        autoPlay
        loop
        muted
        className="hiden absolute inset-0 z-10 h-[80vh] w-full overflow-hidden object-fill md:block md:h-full"
      >
        <source src={EarthVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <img
        src={EarthImage}
        alt="Earth from outer space"
        className="absolute inset-0 z-10 h-[80vh] w-full overflow-hidden object-fill md:hidden"
      />
      <div className="z-50 mt-[15vh] w-full">
        <div className="text-center">
          <div className={`rollingText ${animateOut ? 'rollOut' : 'rollIn'}`}>
            <h1 className="text-gradient whitespace-nowrap text-4xl md:text-6xl">
              {currentText}
            </h1>
          </div>
          <h2 className="text-2xl">Made Easy</h2>
        </div>
        <p className="mt-8 px-5 text-center text-sm text-white md:text-lg">
          Simplify and automate your data analytics workflows with an intuitive
          and easy-to-use interface.
        </p>
      </div>
      <BookDemo />
      <ShootingStars count={10} />
    </div>
  )
}
