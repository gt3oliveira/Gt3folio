import React from "react"
import { Cabecalho } from "../shared/Cabecalho"
import { Container } from "../shared/Container"
import { Tecnologia } from "@core"
import { Tecnologias } from "../tecnologias/Tecnologias"

interface PrincipalProps {
	tecnologias: Tecnologia[]
}

export function Principal(props: PrincipalProps) {
	return (
		<div
			className="
			h-[500px] flex flex-col items-center justify-center
			bg-[url('/principal.jpg')] bg bg-cover bg-center
		"
		>
			<Cabecalho />
			<Container className="flex-1 flex flex-col gap-5 justify-center items-center">
				<div className="flex flex-col gap-1 items-center">
					<h1 className="flex gap-4 items-center">
						<span className="size-1.5 sm:size-2 bg-red-500 rounded-full" />
						<span className="text-3xl sm:text-5xl font-bold text-center">
							Gustavo Tavares
						</span>
						<span className="size-1.5 sm:size-2 bg-red-500 rounded-full" />
					</h1>
					<h2 className="font-extralight text-sm text-center sm:text-lg text-zinc-300">
						Engenheiro da computação e desenvolvedor FullStack
					</h2>
				</div>
				<Tecnologias listaTecnologias={props.tecnologias} />
			</Container>
		</div>
	)
}
