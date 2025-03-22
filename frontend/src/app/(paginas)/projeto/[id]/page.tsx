import { Readme } from "@/components/projetos/Readme"
import { Cabecalho } from "@/components/shared/Cabecalho"
import { CarrosselImagens } from "@/components/shared/CarrosselImagens"
import { Container } from "@/components/shared/Container"
import { Tecnologias } from "@/components/tecnologias/Tecnologias"
import { obterReadme } from "@/functions/github"
import { obterProjeto } from "@/functions/projetos"
import React from "react"

interface ProjetoPageProps {
	params: Promise<{ id: string }>
}

export default async function ProjetoPage({ params }: ProjetoPageProps) {
	const { id } = await params
	const projetos = await obterProjeto(id)

	if (!projetos) {
		return <div>Projeto não encontrado</div>
	}
	const readme = await obterReadme(projetos.repositorio)

	return (
		<div>
			<Cabecalho />
			<Container className="flex flex-col items-center gap-10 py-7">
				<h3 className="text-3xl font-bold self-start">{projetos.nome}</h3>
				<CarrosselImagens imagens={projetos.imagens.slice(1)} />
				<Tecnologias listaTecnologias={projetos.tecnologias} />
				<Readme markdown={readme} />
			</Container>
		</div>
	)
}
