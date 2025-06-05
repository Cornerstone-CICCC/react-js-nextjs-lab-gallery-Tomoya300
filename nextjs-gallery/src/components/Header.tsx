import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between p-4 bg-gray-700">
      <h1>LOGO</h1>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/gallery'>Gallery</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header