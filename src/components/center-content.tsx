import React, { FC, ReactNode } from 'react'

type Props = {
    children?: ReactNode
}

const CenterContent: FC<Props> = ({ children }) => {
    return (
        <div className='w-full flex justify-center'>
            {children}
        </div>
    )
}

export default CenterContent