import {
    CustomerReviews,
    Footer,
    Hero,
    PopularProducts,
    Services,
    SpecialOffers,
    Subscribe,
    SuperQuality
} from './sections/index';
import Nav from './components/Nav';

const App = () => (
	<main className="relative">
		<Nav />
		<section className="xl:padding-l wide:padding-r padding-b" id="home">
			<Hero />
		</section>
		<section className="padding" id="products">
			<PopularProducts />
		</section>
		<section className="padding" id="about-us">
			<SuperQuality />
		</section>
		<section className="padding-x py-10">
			<Services />
		</section>
		<section className="padding">
			<SpecialOffers />
		</section>
		<section className="padding bg-pale-blue">
			<CustomerReviews />
		</section>
		<section className="padding-x sm:py-32 py-16 w-full">
			<Subscribe />
		</section>
		<section className="padding-x bg-black padding-t pb-8">
			<Footer />
		</section>
	</main>
);

export default App;