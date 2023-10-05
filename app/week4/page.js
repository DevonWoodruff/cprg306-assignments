import Link from "next/link"
import NewItem from "./new-item"

export default function Page() { 
    return (
        <main>
            <h1 className="pl-5 pt-5 text-xl font-bold">New Item</h1>
            <NewItem/>
            <Link className="text-blue-400" href="/">Back To Home</Link>
        </main>
    )
}
