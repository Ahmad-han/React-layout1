import bg1 from "../assets/Background.png"
import bg2 from "../assets/Media Background.png"



export const Section = () => {

    return (
        <section>
            <div class="block-1">
			<h1>Find a gift for your wife or girlfriend</h1>
			<p>
				Struggling to find a gift for your wife or girlfriend?
                No problem!
			</p>
			<div class="button">
				FIND GIFT NOW
			</div>
		</div>
		<div class="block-2">
			<img src={bg1} />
		</div>
		<div class="block-2">
			<img src={bg2} />
		</div>
		<div class="block-1">
			<h3>How we work</h3>
			<p>We’ve actually already asked hundreds of women what they want, and made a database with the results. All you have to do is take our short survey that only takes seconds, and our proprietary algorithm will match you with a few perfect gift options.</p>
			<div class="button-2">
				LEARN MORE
			</div>
		</div>
        </section>
    )
}