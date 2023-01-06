import React, { FC, ReactElement, ReactNode } from 'react'

type TabsProps = {
    children: ReactElement[]
    activeTab: number
    setActiveTab: React.Dispatch<React.SetStateAction<number>>
}

type TabProps = {
    children?: ReactNode,
    active?: boolean
    onClick: (e: React.MouseEvent<HTMLElement>) => void
}

const TerminalTab: FC<TabProps> = ({ children, active, onClick }) => {
    const base_class = 'flex p-[0.3rem] flex-1 justify-center text-xs cursor-default'
    const inactive_class = 'bg-[#000] bg-opacity-5 hover:bg-opacity-[7%]'
    const active_class = 'bg-[#000] bg-opacity-10 font-semibold'
    const klass = [base_class, active ? active_class : inactive_class].join(' ')

    return (
        <div className={klass} onClick={onClick}>
            {children}
        </div>
    )
}

const TerminalTabs: FC<TabsProps> = (props) => (
    <>
        {React.Children.map(props.children, (child, i) => {
            return React.cloneElement(child, {
                active: i === props.activeTab,
                onClick: () => props.setActiveTab(i)
            })
        })}
    </>
);

const TabManager: FC<TabsProps> = ({ children, ...props }) => {
    return (
        <div>
            <div className='flex'>
                <TerminalTabs {...props}>
                    {children}
                </TerminalTabs>

                <div className={"flex justify-center w-[24px] bg-[#000] bg-opacity-5 hover:bg-opacity-[7%] cursor-default"}>
                    +
                </div>
            </div>
        </div>
    )
}

export {
    TerminalTab
}


export default TabManager