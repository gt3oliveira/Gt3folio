import { ConteudoMD } from "../shared/ConteudoMD"

interface ReadmeProps {
	markdown: string
}

export function Readme({ markdown }: ReadmeProps) {
	return (
		<div className="flex flex-col items-stretch p-6 bg-black border border-zinc-800 rounded-2xl">
			<div className="prose prose-zinc prose-invert max-w-full">
				<ConteudoMD markdown={markdown} />
			</div>
		</div>
	)
}
