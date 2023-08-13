import React from "react"
import Image from "next/image"
import Link from "next/link"

// TODO Update wording with siteMetaData content
const Logo = () => {
  return (
    <Link href="/" aria-label={"Christopher Cardoso"}>
      <div className="flex items-center justify-between">
        <div className="mr-3">
          <Image
            src="/data/logo.jpg"
            alt="Christopher Cardoso"
            width={50}
            height={50}
          />
        </div>
      </div>
    </Link>
  )
}

export default Logo
