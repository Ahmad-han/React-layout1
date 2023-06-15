import fam from "../assets/family.png"



export const Article = () => {

    return (
        <article>
		<div class="title-text">
			<span>Our Best Blogs Ever</span>
			<p>“Try our blog to find the best tips and tricks to select your gift”</p>
		</div>
		<div class="slide">
			<img src={fam}/>
			<div class="slide-text">
			<p>Mr. John Doe</p>
			<h6>The best way to wish your wife</h6>
			<a>Read More</a>
			</div>
		</div>
		<div class="two-blocks">
			<div class="first-block">
				<b>Database to find the gifts for your girlfriend</b>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</p>
				<a href="">Read More</a>
			</div>
			<div class="second-block">
				<b>How Artificial Intelligence read your mind to find the best gift</b>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</p>
				<a href="">Read More</a>
			</div>
		</div>
	</article>
    )
}