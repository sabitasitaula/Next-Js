import Link from 'next/link'


function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/home">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/product">
                <a>Product</a>
              </Link>
            </li>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
