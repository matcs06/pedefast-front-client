import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import instace from '@/api/appAPI'

const inter = Inter({ subsets: ['latin'] })

interface IUser {
  username: string;
  business_name: string;
}

export default function Home() {
  const [admUsers, setAdmUsers] = useState<IUser[]>([])

  useEffect(() => {

    async function loadUsers() {
      const response = await instace.get("/users")
      setAdmUsers(response.data)
    }

    loadUsers()

    return () => {
      setAdmUsers([])
    }

  }, [])

  function redirectToUserPage(username: string) {
    window.location.pathname = (`/StartPage/${username}`)
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <p>Bem vindo ao pedefast, escolha sua loja e veja seus produtos e servicos</p>
        {admUsers.map((user) => (
          <div key={user.username} className='w-2/3 bg-secondary-orange h-14 p-2 rounded-md cursor-pointer' onClick={() => { redirectToUserPage(user.username) }}>
            <p className='text-light-gray'>{user.business_name}</p>
          </div>
        ))}
      </main>
    </>
  )
}
