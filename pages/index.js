import Image from 'next/image'
import { Inter } from 'next/font/google'
import Buckets from '@/components/buckets'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Buckets />
    </>
  )
}
