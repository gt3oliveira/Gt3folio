import { Tecnologia } from "@core"
import Link from "next/link"

export interface TecnologiasTrabalhadasProps {
	tecnologias: Tecnologia[]
}

export function TecnologiasTrabalhadas(props: TecnologiasTrabalhadasProps) {
	return props.tecnologias ? (
		<div className="flex justify-center items-center p-6 w-full lg:w-72 bg-black border-2 border-zinc-800 rounded-2xl">
			<div className="flex justify-center gap-x-3 flex-wrap">
				{props.tecnologias.map((t) => (
					<Link href={""} className="group" key={t.id}>
						<span className="text-red-500 font-bold group-hover:text-white">#</span>
						<span className="group-hover:text-red-500">{t.nome}</span>
					</Link>
				))}
			</div>
		</div>
	) : null
}
