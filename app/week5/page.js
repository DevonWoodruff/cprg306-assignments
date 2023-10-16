import Link from "next/link"
import ItemList from "./item-list"

function Page() {
    return (
        <main>
            <h1 className="pl-5 pt-5 text-xl font-bold">Shopping List</h1>
            <ItemList/>
            <Link className="text-blue-400" href="/">Back To Home</Link>
        </main>
    )
}
export default Page;