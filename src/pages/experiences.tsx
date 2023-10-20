import experiences from '../../data/experiences.json';

function Experiences() {
    return (
        <main className="container mt-5">
            <a href="/" className="text-decoration-none">
                <i className="fa-solid fa-arrow-left me-1"></i> Back to homepage
            </a>

            <h3 className="my-4">Experiences</h3>

            {experiences.map((item, index) => {
                return (
                    <div className="row mb-5" key={index}>
                        <div className="col-12 col-sm-3 mb-2 mb-sm-0">
                            <small className="text-secondary">2021 - Present</small>
                        </div>
                        <div className="col-12 col-sm-9">
                            <h5 className="mb-0 fw-bold">{item.company}</h5>
                            <span className="text-secondary">{item.title}</span>

                            {item.description.map((p, index) => {
                                return (
                                    <p key={index}>{p}</p>
                                )
                            })}

                            <div>
                                {item.tags.map((tag, index) => {
                                    return (
                                        <div className="badge bg-primary rounded-pill p-2 me-1 mb-1" key={index}>{tag}</div>
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

export default Experiences;
