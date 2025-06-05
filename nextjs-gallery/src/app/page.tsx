import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home',
  description: 'My gallery home page'
}

const Home = () => {
  return (
    <div className="p-4">
      <h1>Home</h1>
      <p>Welcome to my gallery! you can see my pretty photos from the link at header.</p>
    </div>
  )
}

export default Home