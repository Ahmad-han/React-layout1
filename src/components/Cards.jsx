import img1 from "../assets/Media.png"
import img2 from "../assets/Rectangle.png"
import img3 from "../assets/Valentines.png"
import img4 from "../assets/Christmas.png"



export const Cards = () => {

    return (
        <div class="gift-rod">
		<div class="gift-for">
			<h1>Gifts for all Occasions</h1>
			<p>“Try our web app to find the best gifts for all occasions”</p>
		</div>
		<div class="gift-cards">
			<div class="card-1">
				<img src={img1}/>
					<span>Birthday</span>
				<p>See More ›</p>
			</div>
			<div class="cards">
				<img src={img2}/>
				<span>Anniversary</span>
				<p>See More ›</p>
			</div>
			<div class="cards">
				<img src={img3}/>
				<span>Valentine's Day</span>
				<p>See More ›</p>
			</div>
			<div class="cards">
				<img src={img4}/>
				<span>Christmas</span>
				<p>See More ›</p>
			</div>
		</div>
	</div>
    )
}