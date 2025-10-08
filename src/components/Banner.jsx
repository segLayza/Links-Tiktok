import React from 'react'
import styleGn from '../styles/StyleGr.module.css'
import banner from '../assets/banner.jpeg'

export default function WelcomeDev() {
  return (
    <>
    <img className={styleGn.bannerImage} src={banner} alt="banner" />
    <div className={styleGn.bannerText}>Welcome Dev! 💚🔥 @iamcasse 🔥</div>
    </>
  )
}
