import { useFetch } from "../hooks/useFetch";

type Repository = {
    name: string;
    description: string;
    topics: Array<null>;
}

function Projects() {
    const endPoint = 'https://api.github.com/users/robmacav/repos'
    const headers = {
        headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_GITHUB_API_SECRET_KEY}`,
            'X-GitHub-Api-Version': '2022-11-28'
        }
    }

    const { data: repositories, isFetching } = useFetch<Repository[]>(endPoint, headers);
    return (
        <main className="container mt-5">
            <a href="/" className="text-decoration-none">
                <i className="fa-solid fa-arrow-left me-1"></i> Back to homepage
            </a>

            <h3 className="mt-3">Projects</h3>

            { isFetching && <p className="mt-3">Loading...</p> }
            { repositories?.map(project => {
                return (
                    <div className="row mb-5">
                        <div className="col-12 col-sm-3 mb-1 mb-sm-0">
                        </div>
                        <div className="col-12 col-sm-9">
                            <h5 className="mb-0 fw-bold">{project.name}</h5>

                            <p>{project.description}</p>

                            <div>
                                { project.topics.map(topic => {
                                    return (
                                        <div className="badge bg-primary rounded-pill p-2 me-1 mb-1">{ topic }</div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                )
            })}
        </main>
    )
}

export default Projects;