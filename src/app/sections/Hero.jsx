import Button from "@/components-react-nex/Button/Button";
import Image from "next/image";

const Hero = () => {
	return (
		<div className="flex max-xl:flex-col-reverse max-xl:justify-center max-xl:items-center justify-between gap-40 max-xl:gap-20 w-full font-inter min-h-screen max-container my-20 max-xl:m-auto">
			<div className="flex flex-col ">
				<h1 className="font-bold text-7xl leading-[90px] max-xl:items-center">
					We're here to Increase your Productivity
				</h1>
				<Image
					src="/assets/images/vector.png"
					alt="vector"
					width={479}
					height={26}
					className="pt-5"
				/>
				<p className="font-medium leading-7 text-lg pt-11 w-[450px] max-xl:w-auto">
					Let's make your work more organize and easily using the Taskio
					Dashboard with many of the latest featuresin managing work every day.
				</p>
				<div className="flex gap-5 font-medium text-lg pt-16">
					<Button className="rounded-full py-5 px-7 bg-custom-green text-[#FFFFFF] ">
						Try free trial
					</Button>
					<Button className="flex justify-center items-center gap-3">
						<Image
							src="/assets/icons/play.png"
							alt="play"
							width={40}
							height={40}
						/>
						View Demo
					</Button>
				</div>
			</div>

      <div className="flex items-start justify-end max-xl:justify-center w-[700px]">
      <Image
					src="/assets/images/hero.png"
					alt="vector"
					width={410}
					height={526}
					className=""
				/>
      </div>
		</div>
	);
};

export default Hero;
