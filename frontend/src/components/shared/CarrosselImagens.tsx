import Image from "next/image"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../ui/carousel"

interface CarrosselImagensProps {
	imagens: string[]
}

export function CarrosselImagens({ imagens }: CarrosselImagensProps) {
	return (
		<Carousel opts={{ loop: true }} className="w-7/10 md:w-11/12 xl:w-full">
			<CarouselContent className="flex">
				{imagens.map((imagem, index) => (
					<CarouselItem key={index} className="relative w-full h-96">
						<Image
							src={imagem}
							alt={`Imagem ${index + 1}`}
							fill
							className="object-cover"
						/>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	)
}
