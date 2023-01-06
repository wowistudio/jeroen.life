import React, { FC, ReactNode, useState } from 'react'
import BlockLine from './block-line'

type Props = {
    children?: ReactNode
}

type InputBlockActiveProps = {
    onEnter: (command: string) => void
}

const InputBlock: FC<Props> = ({ children }) => {
    return (
        <div className="text-sm mb-2 opacity-60">
            <BlockLine>$ {children}</BlockLine>
        </div>
    )
}

const InputBlockActive: FC<InputBlockActiveProps> = ({ onEnter }) => {

    return (
        <div className="text-sm mb-2 opacity-60">
            <BlockLine>
                $
                <span className='ml-[0.5rem]' />
                <input
                    className='bg-[transparent] caret-w-2 w-full border-none focus:border-none bg-opacity-0 outline-0'
                    onKeyUp={(e) => {
                        if (e.key !== "Enter")
                            return
                        onEnter((e.target as HTMLInputElement).value as string)
                    }}
                />
            </BlockLine>
        </div>
    )
}

export {
    InputBlockActive
}

export default InputBlock