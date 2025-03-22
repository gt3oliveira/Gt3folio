import Image from "next/image"
import React from "react"

export function MiniCV() {
	return (
		<div className="flex flex-col-reverse md:flex-row lg:flex-col-reverse xl:flex-row h-full rounded-2xl border-2 border-zinc-800 overflow-hidden">
			<div className="relative min-w-32 min-h-52 md:min-w-64 lg:h-full lg:min-w-64">
				<Image src="/minha-foto.png" alt="Foto de perfil" fill className="object-cover" />
			</div>
			<div className="flex flex-col gap-4 justify-center p-6 bg-black">
				<div className="flex flex-col">
					<span className="font-bold text-2xl bg-gradient-to-r from-red-500 via-white to-white bg-clip-text text-transparent">
						Gustavo Tavares
					</span>
					<span className="font-light text-zinc-400">Engenheiro da Computação</span>
				</div>
				<p className="text-sm font-light leading-6">
					Desenvolvedor Fullstack com experiência em criação de aplicações web modernas e
					escaláveis. Especialista em tecnologias como React, Node.js e TypeScript, com
					foco em boas práticas, performance e experiência do usuário. Apaixonado por
					resolver problemas complexos e aprender novas tecnologias.
				</p>
			</div>
		</div>
	)
}
