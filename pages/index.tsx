import Head from 'next/head'
import { Source_Code_Pro } from '@next/font/google'
import BackdropGradient from '../src/layouts/gradient'
import FakeTerminal from '../src/components/fake-terminal'
import CenterContent from '../src/components/center-content'

export default function Home() {
  return (
    <>
      <Head>
        <title>jeroen.life</title>
        <meta name="description" content="It is my life. It is now or never" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <BackdropGradient>
          <CenterContent>
            <FakeTerminal></FakeTerminal>
          </CenterContent>
        </BackdropGradient>
      </main>
    </>
  )
}
