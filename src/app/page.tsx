import Introduction from "./components/introduction"
import Tools from './components/tools'
import ShowRoom from "./components/showRoom"
import Connect from "./components/connect"


export default function Home() {
  return (
    <main className="overflow-y-auto  ">
     <Introduction />
     <Tools />
    <ShowRoom />
    <Connect />
    
      
    </main>
  )
}
