import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { Cabecalho } from "@/components/shared/Cabecalho"

export const metadata: Metadata = {
	title: "Gt3Folio Digital",
	description: "Meu portfolio pessoal digital. Projetos e informações do desenvolvedor.",
}

const fonte = Montserrat({
	subsets: ["latin"],
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR">
			<body className={`${fonte.className} antialiased`}>{children}</body>
		</html>
	)
}
