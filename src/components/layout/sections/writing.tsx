import { useFetch } from "../../../hooks/useFetch";

type Post = {
    title: string;
}

function Writing() {
    const endPoint = 'https://wiki-api-robmacav.fly.dev/posts'
    const { data: repositories, isFetching } = useFetch<Post[]>(endPoint, {});

    return (
        <section id="Writing">
            <h3 className="my-4">Blog</h3>

            { isFetching && <p className="mt-3">Loading...</p> }
            { repositories?.slice(0, 3)?.map(project => {
                return (
                    <div className="row mb-5">
                        <div className="col-12 col-sm-3 mb-1 mb-sm-0">
                            <img src="" alt="" className="img-fluid rounded" />
                        </div>
                        <div className="col-12 col-sm-9">
                            <small className="text-secondary">2023</small>
                            <h5 className="mb-0 fw-bold">{project.title}</h5>
                        </div>
                    </div>
                )
            })}

            <a href="/posts" className="text-decoration-none">View Full Project Archive <i className="fa fa-arrow-right-long ms-1"></i></a>
        </section>
    )
}

export default Writing;
