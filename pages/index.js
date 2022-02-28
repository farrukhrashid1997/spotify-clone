import Center from '../components/Center'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <div className="h-screen overflow-hidden bg-black">
      <main className='flex'>
        <Sidebar />
        <Center />
      </main>
      <div>{/**Player */}</div>
    </div>
  )
}

export default Home
