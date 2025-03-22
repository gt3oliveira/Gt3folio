import useChat from "@/hooks/useChat"
import React from "react"
import { IoMdSend } from "react-icons/io"
import { IoReload } from "react-icons/io5"
import { LuMessagesSquare } from "react-icons/lu"
import { BalaoMensagem } from "./BalaoMensagem"
import Image from "next/image"

export function JanelaChat() {
	const { limparMensagens, mensagens, adicionarMensagem, pensando } = useChat()
	const [texto, setTexto] = React.useState("")
	const fimChatRef = React.useRef<HTMLDivElement>(null)

	React.useEffect(() => {
		fimChatRef.current?.scrollIntoView({ behavior: "smooth" })
	}, [mensagens])

	return (
		<div className="flex flex-col bg-zinc-300 rounded-2xl text-black overflow-hidden">
			<div className="flex items-center justify-between bg-white p-4">
				<h2 className="text-xl font-bold">Olá Visitante!</h2>
				<IoReload
					size={24}
					className="text-black cursor-pointer"
					onClick={limparMensagens}
				/>
			</div>
			{mensagens.length === 0 ? (
				<div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
					<LuMessagesSquare strokeWidth={0.2} size={230} className="text-black/30" />
					<span>Vamos conversar?</span>
				</div>
			) : (
				<div className="flex flex-col px-2 gap-2 overflow-y-auto min-h-[400px] max-h-[400px]">
					{mensagens.map((mensagem, i) => {
						const mesmoAutor = i > 0 && mensagens[i - 1].autor === mensagem.autor
						return (
							<BalaoMensagem
								key={mensagem.id}
								mensagem={mensagem}
								omitirAutor={mesmoAutor}
							/>
						)
					})}
					{pensando && (
						<Image src={"/pensando.gif"} alt="Pensando..." width={50} height={50} />
					)}
					<div ref={fimChatRef}></div>
				</div>
			)}
			<div className="h-px bg-zinc-400 mt-4" />
			<div className="flex w-full items-center justify-center gap-1 px-2 py-2">
				<input
					type="text"
					value={texto}
					placeholder="Digite e pressione enter para enviar..."
					className="flex-1 border-2 border-gray-300 rounded-full bg-white py-2 px-5 w-1/3 placeholder:text-white md:placeholder:text-gray-400"
					onChange={(e) => setTexto(e.target.value)}
					onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
						if (e.key === "Enter") {
							adicionarMensagem(texto)
							setTexto("")
						}
					}}
				/>
				<button
					className="bg-green-500 p-2 self-center rounded-full cursor-pointer md:hidden"
					onClick={() => {
						adicionarMensagem(texto)
						setTexto("")
					}}
				>
					<IoMdSend size={20} />
				</button>
			</div>
		</div>
	)
}
