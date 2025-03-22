import { Projeto } from "@core"
import Image from "next/image"
import Link from "next/link"

interface ItemProjetoProps {
	projeto: Projeto
}

export function ItemProjeto({ projeto }: ItemProjetoProps) {
	return (
		<Link href={`/projeto/${projeto.id}`}>
			<div className="relative rounded-2xl overflow-hidden border border-zinc-800 min-w-64 min-h-64">
				<Image
					src={projeto.imagens[0]}
					alt={projeto.nome}
					fill
					className="object-cover hover:scale-110 transition-all duration-300"
				/>
				<div className="absolute bottom-0 left-0 bg-black/60 py-2 w-full text-center">
					<span className="font-extralight tracking-wider">{projeto.nome}</span>
				</div>
			</div>
		</Link>
	)
}
