export default function StudentInfo() {
    return (
        <div>
            <MyName/>
            <CourseSection/>
            <MyGitHubRepo/>
        </div>
    )
}

function MyName() {
    return <p>Devon Woodruff</p>
}

function CourseSection() {
    return <p>CPRG 306 B</p>
}

function MyGitHubRepo() {
    return <a href="https://github.com/DevonWoodruff/cprg306-assignments">GitHub</a>
}