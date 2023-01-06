import React, { FC, useState } from 'react';

import InputBlock from "./input-block";
import OutputBlock from "./output-block";
import BlockLine from "./block-line";
import { InputBlockActive } from './input-block'

type ManagerProps = {
    activeTab: number
}

type SessionTabProps = {
    activeTab?: number
}

type OnEnter = (value: string) => void

const SessionCareer: FC<SessionTabProps> = () => {
    return (
        <>
            <InputBlock>cd ~/Documents/career</InputBlock>

            <InputBlock>ls -l</InputBlock>

            <OutputBlock>
                <BlockLine>
                    <span className="font-bold">educations</span>
                </BlockLine>
                <BlockLine>
                    <span className="font-bold">experiences</span>
                </BlockLine>
                <BlockLine>general.txt</BlockLine>
                <BlockLine>
                    <span className="font-bold">skills</span>
                </BlockLine>
            </OutputBlock>

            <InputBlock>cat basics.txt</InputBlock>

            <OutputBlock>
                <BlockLine>Jeroen Huisman</BlockLine>
                <BlockLine>Software Engineer | Infrastructure Automation</BlockLine>
                <BlockLine>Amsterdam, NL</BlockLine>
                <BlockLine>
                    <a href="https://www.linkedin.com/in/jeroen-huisman/" className='underline text-[blue]'>
                        https://www.linkedin.com/in/jeroen-huisman/
                    </a>
                </BlockLine>
                <BlockLine>
                    <a href="https://github.com/wowistudio" className='underline text-[blue]'>
                        https://github.com/wowistudio
                    </a>
                </BlockLine>
            </OutputBlock>

            <InputBlock>ls -1 experiences</InputBlock>

            <OutputBlock>
                <BlockLine>nov2021_current_Biller.txt</BlockLine>
                <BlockLine>oct2021_feb2018_Ikbenfrits.txt</BlockLine>
                <BlockLine>jun2017_jan2017_Accenture.txt</BlockLine>
                <BlockLine>mar2015_mar2016_DeKleineConsultant.txt</BlockLine>
            </OutputBlock>

            <InputBlock>ls -1 skills</InputBlock>
            <OutputBlock>
                <BlockLine>frontend__react__vue.txt</BlockLine>
                <BlockLine>backend__python__ruby.txt</BlockLine>
                <BlockLine>infrastructure__terraform__aws.txt</BlockLine>
            </OutputBlock>

            <InputBlock>ls -1 educations</InputBlock>
            <OutputBlock>
                <BlockLine>jan2018_oct2017_CodingAcadamy_NYCDA</BlockLine>
                <BlockLine>sep2016_sep2014_IndustrialEcologyMaster_TUDelft.txt</BlockLine>
                <BlockLine>sep2014_sep2010_ScienceBusiness&Innovation_VUAmsterdam.txt</BlockLine>
            </OutputBlock>
            <InputBlockActive onEnter={(v) => console.log(v)} />
        </>
    )
}

const SessionCode: FC<SessionTabProps> = () => {
    return (
        <>
            <InputBlock>cd ~/Documents/code</InputBlock>

            <InputBlock>cat README.txt</InputBlock>

            <OutputBlock>
                <BlockLine># JEROEN.LIFE</BlockLine>
                <BlockLine></BlockLine>
                <BlockLine noMargin><span className='whitespace-pre'> __         __     ______   ______ </span></BlockLine>
                <BlockLine noMargin><span className='whitespace-pre'>/\ \       /\ \   /\  ___\ /\  ___\</span></BlockLine>
                <BlockLine noMargin><span className='whitespace-pre'>\ \ \____  \ \ \  \ \  __\ \ \  __\</span></BlockLine>
                <BlockLine noMargin><span className='whitespace-pre'> \ \_____\  \ \_\  \ \_\    \ \_____\</span></BlockLine>
                <BlockLine><span className='whitespace-pre'>  \/_____/   \/_/   \/_/     \/_____/ </span></BlockLine>
                <BlockLine></BlockLine>
                <BlockLine>
                    <a href="https://github.com/wowistudio/jeroen.life" className='underline text-[blue]'>
                        https://github.com/wowistudio/jeroen.life
                    </a>
                </BlockLine>
            </OutputBlock>

            <InputBlock>cat .git/config | grep url | xargs</InputBlock>

            <OutputBlock>
                <BlockLine>url = git@github-wowi:wowistudio/jeroen.life.git</BlockLine>
            </OutputBlock>

            <InputBlockActive onEnter={(v) => console.log(v)} />
        </>
    )
}

const SessionTabPlayground: FC<SessionTabProps> = () => {
    const onEnter = (value: string) => {
        const value_original = value
        const newChildren = [
            (key: number) => <InputBlock key={key}>{value_original}</InputBlock>,
        ]

        if (!value.startsWith("echo "))
            value = "Sorry, I only know how to echo"
        else
            value = value.split("echo ")[1]

        newChildren.push((key: number) => (
            <OutputBlock key={key}>
                <BlockLine>{value}</BlockLine>
            </OutputBlock>
        ))

        setChildren([
            ...children.slice(0, children.length - 1),
            ...newChildren,
            (key: number, onEnter: OnEnter) => <InputBlockActive key={key} onEnter={onEnter} />
        ])
    }

    const [children, setChildren] = useState([
        (key: number) => <InputBlock key={key}>echo "Everything is possible!"</InputBlock>,
        (key: number) => (
            <OutputBlock key={key}>
                <BlockLine>Everything is possible!</BlockLine>
            </OutputBlock>
        ),
        (key: number) => <InputBlock key={key}>echo "Try it yourself!"</InputBlock>,
        (key: number) => (
            <OutputBlock key={key}>
                <BlockLine>Try it yourself!</BlockLine>
            </OutputBlock>
        ),
        (key: number, onEnter: OnEnter) => <InputBlockActive key={key} onEnter={onEnter} />
    ])


    return <>{children.map((child, i) => child(i, onEnter))}</>
}

const SessionManager: FC<ManagerProps> = ({ activeTab }) => {
    if (activeTab == 1)
        return <SessionCareer />
    if (activeTab == 2)
        return <SessionCode />
    return <SessionTabPlayground />
}



export default SessionManager