import React from 'react'

interface Props {
    name: string,
    index: number
}

const Options = ({name, index}: Props) => {
    return (
        <div className={` ${index % 2 === 0 ? 'text-[#4A36EC]': 'text-white'} bg-[#131313] py-3 px-5 rounded-md text-xs`}>
            <p>{name}</p>
        </div>
    )
}

export default Options
