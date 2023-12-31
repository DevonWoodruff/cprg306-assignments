import Link from "next/link"
import EventList from "./event-list"
import StudentInfo from "../StudentInfo"

export default function Page() {
    return (
        <main>
            <h1>Hello Week 2</h1>
            <EventList />
            <Link className="text-blue-400" href="/">Back To Home</Link>
            <StudentInfo />
        </main>
    )
}
