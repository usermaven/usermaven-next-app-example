// Import your Client Component
import Stats from './stats'
 
async function getRandomData() {
  const res = await fetch('http://localhost:3000/api/hello')
  const data = await res.json()
  console.log("data api call page", data);
  
  return data
}
 
export default async function Page() {
  // Fetch data directly in a Server Component
  const response = await getRandomData()
  // Forward fetched data to your Client Component
  return <Stats data={response} />
}
