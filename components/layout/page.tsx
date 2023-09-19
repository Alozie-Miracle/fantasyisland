import React from 'react'
import Nav from '../Nav/page'
import Foot from '../Foot/page'

interface Layoutprops {
     children : React.ReactNode
}
export function PageLayout({ children }: Layoutprops) {
  return (
    <>
      <Nav />

        <div className=''>
          {children}
        </div>

      <Foot />
    </>
  )
}
