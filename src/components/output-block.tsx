import React, { FC, ReactNode } from 'react'

type Props = {
    children?: ReactNode
    stacked?: boolean
}

const OutputBlock: FC<Props> = ({ children }) => {
    return (
        <div className="text-sm mb-2">
            {children}
        </div>
    )
}

export default OutputBlock