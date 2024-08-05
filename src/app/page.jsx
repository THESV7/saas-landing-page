import Nav from "./components/Nav";
import Hero from "./sections/Hero";

export default function Home() {
	return (
		<>
			<main className="relative">
				<Nav />
				<section className="py-8 pt-4 px-32 max-md:px-8">
					<Hero />
				</section>
			</main>
		</>
	);
}
