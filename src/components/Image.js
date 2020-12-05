import React from 'react'

import img from '../assets/images/desarrollo-web1.png'
import { TitleHero } from './TitleHero'

export const Image = () => {
    return (
        <>
            <img className="image_hero" src={ img } alt="imagen-Hero" />
            <TitleHero />
        </>
    )
}
