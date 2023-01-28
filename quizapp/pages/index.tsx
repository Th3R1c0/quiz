import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Mainapp from '../components/mainapp'
import Stats from '../components/stats'
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <Stats />
      <Mainapp />

    </>
  )
}

export default Home
