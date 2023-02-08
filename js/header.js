function Header() {
return (
    <header>
    <nav role="navigation" className="navbar">
    <a href="index.html" title="Voltar para a página inicial">Home</a>
        <div className="dropdown">
            <a title="Ir para a página Games" className="dropbtn">Games</a> 
            <div className="dropdown-content">
                <a  title="Games Menu">Games:</a>
                <a href="../Mm_game/index.html" title="Ir para o jogo 1">Musical Memory Game</a>
            </div> 
        </div>

    <div className="dropdown">
    <a href="#" title="Ir para a página Vídeos" className="dropbtn">Vídeos</a>
        <div className="dropdown-content">
            <a href="#" title="Ir para o vídeo 1">Vídeo 1</a>
            <a href="#" title="Ir para o vídeo 2">Vídeo 2</a>
            <a href="#" title="Ir para o vídeo 3">Vídeo 3</a>
        </div>
    </div>
    <a className="float-right" href="pages/contact.html">Contato</a>
  </nav>
</header>
);
}

ReactDOM.render(<Header />, document.getElementById("header_js"))
