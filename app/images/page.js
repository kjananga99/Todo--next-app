import React from 'react'
import sample_image from '../../assets/sample_image.jpg'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      We will show the image here
      <Image src={sample_image} alt='Sample Image'/>
    </div>
  )
}

export default page
