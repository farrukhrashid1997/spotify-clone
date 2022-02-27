import React, { useEffect } from 'react'
import { getProviders, signIn } from 'next-auth/react'

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: {
      providers,
    }, // will be passed to the page component as props
  }
}

function Login({ providers }) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-black">
      <img className="mb-5 w-52" src="https://i.imgur.com/fPuEa9V.png" alt="" />
      {Object.values(providers).map((provider) => (
        <div>
          <button
            className="rounded-full bg-[#18D860] p-5 text-white"
            onClick={() => signIn(provider.id, { callbackUrl: '/' })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  )
}

export default Login
