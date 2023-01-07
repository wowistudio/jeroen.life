import React, { FC, ReactNode, useState } from "react";

import SystemButton from "./system-button";
import SessionManager from "./tab-session";
import TabManager, { TerminalTab } from "./terminal-tab";

type Props = {
    children?: ReactNode
}

const FakeTerminal: FC<Props> = () => {
    const [activeTab, setActiveTab] = useState(1)
    const [minimized, setMinimized] = useState(false)

    let klass = [
        "flex flex-col w-full transition-height duration-300 ease-out lg:w-[800px] rounded-md shadow-[inset_0_0px_5px_rgba(0,0,0,0.2)] overflow-hidden bottom-0 absolute left-1/2 -translate-x-1/2",
        minimized ? "h-[56px]" : "h-full"
    ].join(" ")

    return (
        <div className="relative lg:my-4 w-full">
            <div className={klass}>
                <div className="px-4 py-2 bg-[#000] bg-opacity-10">
                    <div className="flex justify-between items-center">
                        <div className="flex">
                            <SystemButton className="mr-2 bg-[#e0695f]" />
                            <SystemButton className="mr-2 bg-[#f3bd4e]" onClick={() => setMinimized(true)}>-</SystemButton>
                            <SystemButton className="bg-[#6ab557]" onClick={() => setMinimized(false)}>+</SystemButton>
                        </div>
                        <span className="text-xs">jeroen.life@macbook-pro</span>
                        <div className="w-[52px]" />
                    </div>
                </div>

                <TabManager activeTab={activeTab} setActiveTab={setActiveTab}>
                    <TerminalTab onClick={() => (null)}>playground <span className="hidden sm:block">¯\_(ツ)_/¯</span></TerminalTab>
                    <TerminalTab onClick={() => (null)}>career (zsh)</TerminalTab>
                    <TerminalTab onClick={() => (null)}>~/code</TerminalTab>
                </TabManager>

                {true && <div className="flex-1 overflow-y-scroll bg-[#e1e4e5] bg-opacity-30">
                    <div className="px-4 py-2">
                        <SessionManager activeTab={activeTab} />
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default FakeTerminal 