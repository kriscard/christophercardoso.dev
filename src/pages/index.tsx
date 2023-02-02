import Head from "next/head"

import NavBar from "../components/NavBar"
import { usePostsQuery } from "../graphql/generated/schema"

export default function Home() {
  const { loading, error, data } = usePostsQuery()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  if (!data) return <p>No data...</p>

  return (
    <div>
      <Head>
        <title>Christopher Cardoso</title>
      </Head>
      <div className="flex h-full items-center justify-center">
        <h1 className="text-6xl font-medium text-black">My Homepage</h1>
      </div>
    </div>
  )
  // return data.posts.map(({ id, title }) => (
  //   <div key={id}>
  //     <h1 className="text-3xl font-bold underline w3">{title}</h1>
  //     <br />
  //   </div>
  // ))
}
