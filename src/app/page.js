import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Header from '@/components/Header'

export default function Home() {
  return (<>
    <Header />
    <main>
      <Intro />
      <Projects />
    </main>
  </>)
}
