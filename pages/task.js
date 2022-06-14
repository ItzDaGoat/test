import { Navbar, Tasks, Debug } from "../components"
import styles from "../styles/Home.module.css"

function Task() {
    return (
        <div>
            <Navbar />
            {/* <Debug /> */}
            <Tasks />
        </div>
    )
}

export default Task
