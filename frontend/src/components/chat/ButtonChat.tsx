"use client"
import Image from "next/image"
import React from "react"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { JanelaChat } from "./JanelaChat"

export function ButtonChat() {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<div className="fixed bottom-4 right-4 cursor-pointer w-10 h-10">
					<Image src="/chat.svg" alt="chat" fill className="object-contain" />
				</div>
			</PopoverTrigger>
			<PopoverContent
				side="top"
				align="end"
				sideOffset={10}
				className="w-[400px]"
				style={{
					backgroundColor: "transparent",
					border: "none",
				}}
			>
				<JanelaChat />
			</PopoverContent>
		</Popover>
	)
}
