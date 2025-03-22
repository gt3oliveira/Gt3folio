"use client"
import { ConteudoMD } from "@/components/shared/ConteudoMD"
import useChat from "@/hooks/useChat"
import Image from "next/image"
import { useState, KeyboardEvent } from "react"

export default function ChatPage() {
	const { chatId, mensagens, adicionarMensagem, limparMensagens, pensando } = useChat()
	const [texto, setTexto] = useState("")

	return (
		<div>
			<h1>Chat</h1>
			<h2>Chat ID: {chatId}</h2>
			<button onClick={limparMensagens} className="bg-green-500 px-4 py-2 rounded-full">
				Limpar Chat
			</button>

			<ul>
				{mensagens.map((mensagem) => (
					<li key={mensagem.id} className="flex flex-col">
						<div>
							<strong>{mensagem.autor}</strong>
						</div>
						<ConteudoMD markdown={mensagem.texto} />
					</li>
				))}
			</ul>

			{pensando && (
				<div>
					<Image src={"/pensando.gif"} alt="Pensando..." width={50} height={50} />
				</div>
			)}

			<input
				type="text"
				value={texto}
				className="border-2 border-gray-300 rounded-full py-2 px-3 mt-4 w-1/3"
				onChange={(e) => setTexto(e.target.value)}
				onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
					if (e.key === "Enter") {
						adicionarMensagem(texto)
						setTexto("")
					}
				}}
			/>
		</div>
	)
}
