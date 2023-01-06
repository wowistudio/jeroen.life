import React, { FC, ReactNode } from 'react'

type Props = {
    children?: ReactNode
    noMargin?: boolean
}

const BlockLine: FC<Props> = ({ children, noMargin }) => {
    const klass = ["flex break-all", noMargin ? "" : "mb-2"].join(" ")
    return (
        <div className={klass}>
            {children}
        </div>
    )
}

export default BlockLine