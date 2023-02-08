function Footer() {
return (
<footer>
<div className="footer">Developed by ZicBusiness | Copyright &copy; {new Date().getFullYear()}</div>
</footer>
);
}

ReactDOM.render(<Footer />, document.getElementById("footer_js"));
