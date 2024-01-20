import '../styles/Header-Footer.css'


function Footer(){
    return(
        <div className="footer" style={{background: 'blue'}}>
            <a href="http://https://github.com/rtrevill"><img src="/github-9-128.png" alt="GitLogo" className="footerLogo" /></a>
            <a href="https://stackexchange.com/users/30366917/rtrevill"><img src="/stackoverflow-128.png" alt="StackOverflow Logo" className="footerLogo"/></a>
            <a href="https://www.linkedin.com/in/richard-trevillian-5a636820/"><img src="/linkedin-2-128.png" alt="linkedIn Logo" className="footerLogo"/></a>
        </div>
    )
}

export default Footer;