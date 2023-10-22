import { getAiResponse } from './openai'

export default async function Home() {
  const response = await getAiResponse()
  return (
    <main>
      <h1>Historichat</h1>
      <p>{response[0].message.content}</p>
    </main>
  )
}
