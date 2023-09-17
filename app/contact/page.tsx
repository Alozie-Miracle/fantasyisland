import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <Navbar />
        <Contact />
        <Footer />
    </div>
  )
}

export default page