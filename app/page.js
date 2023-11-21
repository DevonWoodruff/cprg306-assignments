import Link from "next/link"
import StudentInfo from './StudentInfo'

export default function Page() {
  return (
    <main className="bg-blue-900">
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <Link className="text-green-400" href="/week2">Week 2</Link>
      <Link className="pl-2 text-red-500" href="/week3">Week 3</Link>
      <Link className="pl-2 text-blue-400" href="/week4">Week 4</Link>
      <Link className="pl-2 text-yellow-400" href="/week5">Week 5</Link>
      <Link className="pl-2 text-orange-400" href="/week6">Week 6</Link>
      <Link className="pl-2 text-purple-600" href="/week7">Week 7</Link>
      <Link className="pl-2 text-pink-600" href="/week8">Week 8</Link>
      <Link className="pl-2 text-green-700" href="/week8">Week 10</Link>
    </main>
  )
}
