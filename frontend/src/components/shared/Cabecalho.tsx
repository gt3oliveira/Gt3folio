import React from "react"
import { Container } from "./Container"
import Image from "next/image"
import Link from "next/link"
import { GrGithub } from "react-icons/gr"
import { Menu } from "./Menu"
import { VscGithub } from "react-icons/vsc"

export function Cabecalho() {
	return (
		<header className="flex w-full items-center h-16 bg-black/50">
			<Container className="flex-1 flex justify-between items-center">
				<div className="flex items-center w-full">
					<Link href="/" className="hidden sm:block">
						<Image src="/logo.svg" alt="Logo" width={80} height={0} />
					</Link>
					<Menu />
				</div>
				<Link
					className="hidden sm:block group"
					href="https://github.com/gt3oliveira"
					target="_blank"
				>
					<div className="group-hover:hidden">
						<GrGithub size={24} />
					</div>
					<div className="hidden group-hover:flex w-full items-center gap-2">
						<VscGithub size={24} />
						<span className="text-sm text-white">gt3oliveira</span>
					</div>
				</Link>
			</Container>
		</header>
	)
}
