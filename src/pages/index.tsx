import { usePostsQuery } from "../graphql/generated/schema"

export default function Home() {
  const { loading, error, data } = usePostsQuery()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  if (!data) return <p>No data...</p>

  return data.posts.map(({ id, title }) => (
    <div key={id}>
      <h1 className="text-3xl font-bold underline w3">{title}</h1>
      <br />
    </div>
  ))
}
