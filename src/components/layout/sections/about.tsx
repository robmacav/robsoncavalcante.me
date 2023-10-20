import about from '../../../../data/about.json';

function About() {
    return (
        <section className="">
            <h3 className="d-lg-none mb-4">About</h3>

            {about.map((p, index) => {
                return (
                    <p key={index}>{p}</p>
                )
            })}
        </section>
    )
}

export default About;
