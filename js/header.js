function Header() {
return (
    <header>
    <nav role="navigation" className="navbar">
      <a class="home" href="https://ZicBusiness.github.io/Prof.Rodrigo/index.html" title="Voltar para a página inicial">Home</a>
      <div className="dropdown"> 
        <a title="Ir para a página Games" className="dropbtn">Games</a> 
        <div className="dropdown-content"> 
          <a title="Games Menu">Games:</a>
          <a href="https://ZicBusiness.github.io/Prof.Rodrigo/Mm_game/index.html" title="Ir para o jogo 1">"Musical Memory Game"</a>
        </div> 
      </div>
  
      <div className="dropdown"> 
        <a href="#" title="Ir para a página Vídeos" className="dropbtn">Atividades</a>
        <div className="dropdown-content"> 
          <a title="Atividades">Atividades:</a>
          <a href="#" title="Ir para o vídeo 2">"Em Breve"</a>
          <a href="#" title="Ir para o vídeo 3">"Em Breve"</a>
        </div>
      </div>
  
      <a className="float-right" href="https://ZicBusiness.github.io/Prof.Rodrigo/pages/contact.html">Feedback</a>
    </nav>
  </header>
  
);
}

ReactDOM.render(<Header />, document.getElementById("header_js"))
