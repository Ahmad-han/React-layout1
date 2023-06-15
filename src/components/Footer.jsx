import facebook from "../assets/Facebook.svg"
import twitter from "../assets/Twitter.svg"
import instagram from "../assets/Instagram.svg"
import youtube from "../assets/Youtube.svg"
import neponyal from "../assets/neponyal.png"
import footLogo from "../assets/logo-2.png"



export const Footer = () => {

    return (
        <footer>
		<div class="navbar-end">
		<nav>
			<ul>
				<li>Home</li>
				<li>About</li>
				<li><img src={footLogo}/></li>
				<li>Service</li>
				<li>Blog</li>
			</ul>
		</nav>
		</div>
		<hr/>
		<div class="social">
				<img src={facebook}/>
				<img src={twitter}/>
				<img src={instagram}/>
				<img src={youtube}/>
				<img src={neponyal}/>
		</div>
	</footer>
    )
}