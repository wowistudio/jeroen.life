import React, { FC, ReactNode } from 'react'

type Props = {
    children?: ReactNode
}

const SystemButton: FC<Props & React.HTMLAttributes<HTMLDivElement>> = ({ className, children, onClick }) => {
    const klass = `w-3 h-3 hover:bg-opacity-80 rounded-full relative flex items-center justify-center ${className}`
    return (
        <div className={klass} onClick={onClick}>
            <div className='cursor-default w-3 h-3 opacity-0 flex justify-center items-center hover:opacity-30'>
                {children}
            </div>
        </div>
    )
}

export default SystemButton