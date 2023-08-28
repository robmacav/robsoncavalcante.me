function Projects() {
    return (
        <main className="container mt-5">
            <a href="/" className="text-decoration-none">
                <i className="fa-solid fa-arrow-left me-1"></i> Back to homepage
            </a>

            <h3 className="mt-3">Projects</h3>

            <div className="row mb-5">
                <div className="col-12 col-sm-3 mb-1 mb-sm-0">
                </div>
                <div className="col-12 col-sm-9">
                    <h5 className="mb-0 fw-bold">Finances</h5>

                    <p>An application to manage your expenses and plan.</p>

                    <div>
                        <div className="badge bg-primary rounded-pill p-2 me-1 mb-1">RubyOnRails</div>
                        <div className="badge bg-primary rounded-pill p-2 me-1 mb-1">TypeScript</div>
                        <div className="badge bg-primary rounded-pill p-2 me-1 mb-1">Flutter</div>
                        <div className="badge bg-primary rounded-pill p-2 me-1 mb-1">MySQL</div>
                    </div>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-12 col-sm-3 mb-1 mb-sm-0">
                </div>
                <div className="col-12 col-sm-9">
                    <h5 className="mb-0 fw-bold">SGE</h5>

                    <p>An application to manage the maintenance services.</p>

                    <div>
                        <div className="badge bg-primary rounded-pill p-2 me-1 mb-1">RubyOnRails</div>
                        <div className="badge bg-primary rounded-pill p-2 me-1 mb-1">TypeScript</div>
                        <div className="badge bg-primary rounded-pill p-2 me-1 mb-1">Flutter</div>
                        <div className="badge bg-primary rounded-pill p-2 me-1 mb-1">MySQL</div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Projects;