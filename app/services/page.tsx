import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import React from 'react'

interface Props {
    
}

const page = (props: Props) => {
    return (
        <div>
            <Navbar />
            <Services />
            <Footer />
        </div>
    )
}

export default page
