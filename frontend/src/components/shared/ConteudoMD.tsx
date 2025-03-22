import Markdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"

interface ConteudoMDProps {
	markdown: string
}

export function ConteudoMD({ markdown }: ConteudoMDProps) {
	return (
		<Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} skipHtml={false}>
			{markdown}
		</Markdown>
	)
}
