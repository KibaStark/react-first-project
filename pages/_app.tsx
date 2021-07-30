import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'


function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter()
 
  const handleNoSession = (route: string) => {
      router.push(`/${route}`)
    }

  useEffect(()=>{
    var localSession = localStorage.getItem('session')
    if(localSession !=null) {
      let sessionObject = JSON.parse(localSession)
      console.log(sessionObject)
     if (sessionObject){
       console.log(sessionObject)
      setSession(sessionObject)
     } 
  } else {
    console.log('test') 
    handleNoSession('')}
}, []);

  const [session, setSession ] = useState();

  return <Component {...pageProps} />
}
export default MyApp
