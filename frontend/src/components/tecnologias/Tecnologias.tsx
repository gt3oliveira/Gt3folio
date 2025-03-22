import { Tecnologia } from "@core"
import Image from "next/image"

export interface TecnologiasProps {
	listaTecnologias: Tecnologia[]
}

export function Tecnologias(props: TecnologiasProps) {
	return props.listaTecnologias ? (
		<div className="flex justify-center gap-4 flex-wrap">
			{props.listaTecnologias.map((t) => (
				<div
					key={t.id}
					className="flex flex-col items-center gap-1 hover:scale-125 transition-all duration-300"
				>
					<span className="relative w-11 h-11 rounded-xl overflow-hidden">
						<Image src={t.imagem} alt={t.nome} fill className="object-contain" />
					</span>
					<span className="text-xs text-zinc-400">{t.nome}</span>
				</div>
			))}
		</div>
	) : null
}
