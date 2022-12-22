import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import s from '../styles/Home.module.css'
import HomeHero from '../components/HomeHero/HomeHero'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>
          rid-of
        </title>
      </Head>
      
      <div className={s.container}>
      <HomeHero/>
      </div>
    
    </>
  )
}
