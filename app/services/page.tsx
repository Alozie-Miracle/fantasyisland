import Foot from '@/components/Foot/page'
import Nav from '@/components/Nav/page'
import Services from '@/components/Services'
import React from 'react'

interface Props {
    
}

const page = (props: Props) => {
    return (
        <div>
            <Nav />
            <Services />
            <Foot />
        </div>
    )
}

export default page
