import React from 'react'
import Typewriter from './Typewriter'
import styleGn from '../styles/StyleGr.module.css'

function Welcome() {
  return (
    <Typewriter className={styleGn.bannerText}
        text="Welcome Dev! 💚🔥 @iamcasse 🔥"
        speed={80}
        loop={true}
      />
  )
}

export default Welcome