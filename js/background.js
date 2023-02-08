function Background() {
return (
  <section>
    <div className="background"> 
        <div className="bgcircle"></div>
        <div className="bgcircle2"></div>
        <div className="bgcircle3"></div>
		      <div className="minirobg"><img src="img/tiwi1.png" alt="Imagem do golfinho" loading="lazy"></img></div>
	       <div className="front-name">
	            <h1>Rodrigo</h1>
	       </div>
	   </div>
	 </section>    
);    
}

ReactDOM.render(<Background />, document.getElementById("bg_js"))
