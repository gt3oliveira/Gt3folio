"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
import { FaWhatsapp } from "react-icons/fa"
import { GoProject } from "react-icons/go"
import { HiOutlineHome } from "react-icons/hi"

export function Menu() {
	const caminho = usePathname()

	return (
		<nav className="flex justify-center sm:justify-start w-full px-12 gap-6">
			<MenuItem
				href="/"
				selecionado={caminho === "/"}
				label="Início"
				icon={<HiOutlineHome className="size-6 min-[410px]:size-3" />}
			/>
			<MenuItem
				href="/projeto/1"
				selecionado={caminho.startsWith("/projeto")}
				label="Projetos"
				icon={<GoProject className="size-6 min-[410px]:size-3" />}
			/>
			<MenuItem
				href="https://api.whatsapp.com/send/?phone=5524999530275&text&type=phone_number"
				novaAba={true}
				selecionado={false}
				label="Contato"
				icon={<FaWhatsapp className="text-green-400 size-6 min-[410px]:size-3" />}
			/>
		</nav>
	)
}

interface MenuItemProps {
	href: string
	selecionado: boolean
	novaAba?: boolean
	label: string
	icon?: React.ReactNode
}

function MenuItem(props: MenuItemProps) {
	return (
		<Link
			href={props.href}
			target={props.novaAba ? "_blank" : "_self"}
			className={`
                flex items-center gap-2 text-sm border-red-600 hover:text-white
                ${
					props.selecionado
						? "font-bold border-b-4 text-white"
						: "text-zinc-400 border-b-4 border-transparent"
				}
            `}
		>
			<span>{props.icon}</span>
			<span className="max-[410px]:hidden">{props.label}</span>
		</Link>
	)
}
