import React from "react"

export function Experiencia() {
	return (
		<div className="flex flex-col gap-6 sm:flex-row lg:flex-col items-center text-center justify-around p-6 bg-black border-2 border-zinc-800 rounded-2xl">
			<Item principal="+10" label="anos de experiência" />
			<Item principal="+30" label="projetos profissionais desenvolvidos" />
			<Item principal="+15" label="projetos pessoais desenvolvidos" />
		</div>
	)
}

interface ItemProps {
	principal: string
	label: string
}

function Item(props: ItemProps) {
	return (
		<div className="flex flex-col items-center">
			<span className="text-red-500 font-bold text-3xl leading-6">{props.principal}</span>
			<span className="text-zinc-400 text-sm font-light">{props.label}</span>
		</div>
	)
}
