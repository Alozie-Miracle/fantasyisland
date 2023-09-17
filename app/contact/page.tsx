import Contact from '@/components/Contact'
import Foot from '@/components/Foot/page'
import Nav from '@/components/Nav/page'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <Nav />
        <Contact />
        <Foot />
    </div>
  )
}

export default page