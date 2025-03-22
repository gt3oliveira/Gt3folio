import { Projeto, Tipo } from "@core"
import { httpGet } from "./api"

export async function obterProjetos() {
	const projetos: Projeto[] = await httpGet("/projetos")

	return {
		todos: projetos,
		get mobile() {
			return projetos.filter((p) => p.tipo === Tipo.MOBILE)
		},
		get web() {
			return projetos.filter((p) => p.tipo === Tipo.WEB)
		},
		get jogos() {
			return projetos.filter((p) => p.tipo === Tipo.JOGO)
		},
		get destaques() {
			return projetos.filter((p) => p.destaque)
		},
	}
}

export async function obterProjeto(id: string): Promise<Projeto | null> {
	return await httpGet(`/projetos/${id}`)
}
