import "./about.css";
function About() {
    return (
        <div className="container total-about">
            <div className="jumbotron">
                <h1 className="display-4">About</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4"></hr>
                    <p className="lead">O desafio deverá ser feito com React, pode ser utilizado o React puro, ou Next.JS, isso fica a critério seu, a aplicação tem o foco em listar os livros apresentados
pela API, caso queira colocar alguns bônus como responsividade ou qualquer coisa que você julgue necessário na aplicação.</p>
            </div>
        </div>
    )
}

export default About;