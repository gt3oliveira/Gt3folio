import Mensagem from "@/model/Mensagem"
import { ConteudoMD } from "../shared/ConteudoMD"
import { LuCheckCheck } from "react-icons/lu"
import { BsRobot } from "react-icons/bs"

interface BalaoMensagemProps {
	mensagem: Mensagem
	omitirAutor?: boolean
}

export function BalaoMensagem({ mensagem, omitirAutor }: BalaoMensagemProps) {
	return mensagem.lado === "esquerdo" ? (
		<BalaoEsquerdo mensagem={mensagem} omitirAutor={omitirAutor} />
	) : (
		<BalaoDireito mensagem={mensagem} omitirAutor={omitirAutor} />
	)
}

function BalaoEsquerdo({ mensagem, omitirAutor }: BalaoMensagemProps) {
	return (
		<div className="flex flex-col py-2 px-4 w-fit max-w-[80%] bg-green-700 rounded-r-3xl rounded-bl-3xl">
			<span className={`text-xs text-zinc-300 ${omitirAutor ? "hidden" : ""}`}>
				🤖 {mensagem.autor}
			</span>
			<div className="text-white">
				<ConteudoMD markdown={mensagem.texto} />
			</div>
		</div>
	)
}

function BalaoDireito({ mensagem, omitirAutor }: BalaoMensagemProps) {
	return (
		<div className="flex flex-col self-end bg-green-500 py-2 px-4 rounded-l-3xl rounded-br-3xl w-fit max-w-[80%]">
			<div className={`flex items-center gap-1 ${omitirAutor ? "hidden" : ""}`}>
				<span className={`text-xs text-zinc-200 self-end`}>{mensagem.autor}</span>
				<LuCheckCheck size={16} className="text-blue-500" />
			</div>
			<div className="text-white">
				<ConteudoMD markdown={mensagem.texto} />
			</div>
		</div>
	)
}
