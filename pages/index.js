import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <div className="h-screen overflow-hidden bg-black">
      <main>
        <Sidebar />
        {/**Center*/}
      </main>
      <div>{/**Player */}</div>
    </div>
  )
}

export default Home
