import React, { FC, ReactNode } from 'react'
import BlockLine from './block-line'

type Props = {
    children?: ReactNode
}

type InputBlockActiveProps = {
    onEnter: (command: string) => void
    ref?: React.Ref<HTMLInputElement>
}

const InputBlock: FC<Props> = ({ children }) => {
    return (
        <div className="text-sm mb-2 opacity-60">
            <BlockLine>$ {children}</BlockLine>
        </div>
    )
}

const InputBlockActive: FC<InputBlockActiveProps> = React.forwardRef(({ onEnter }, ref) => {
    return (
        <div className="text-sm mb-2 opacity-60">
            <BlockLine>
                $
                <span className='ml-[0.5rem]' />
                <form className='w-full'>
                    <input
                        ref={ref}
                        autoCapitalize="off"
                        enterKeyHint='enter'
                        className='bg-[transparent] caret-w-2 w-full border-none focus:border-none bg-opacity-0 outline-0'
                        onKeyUp={(e) => {
                            if (e.key !== "Enter")
                                return
                            onEnter((e.target as HTMLInputElement).value as string)
                        }}
                    />
                </form>
            </BlockLine>
        </div>
    )
})

export {
    InputBlockActive
}

export default InputBlock