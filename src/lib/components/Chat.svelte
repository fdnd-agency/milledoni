<script>
	import { onMount } from "svelte";
	import { createEventDispatcher } from "svelte";

	export let tags = [];

	let userInput = "";
	let isTyping = false;

	const dispatch = createEventDispatcher();

	const systemPrompt = {
		role: "system",
		content: `Je bent een behulpzame en vriendelijke cadeaugids van Milledoni. Je helpt gebruikers cadeaus te vinden op basis van voorkeuren, interesses en personen. Kies passende tags uit deze lijst: [${tags}]. Geef elk antwoord als JSON-object met een "reply" (normale tekst voor gebruiker) en een array "tags" (interne data voor filtering). Zet de tags nooit in de tekst van "reply", alleen in het JSON-object. Begin nu door te vragen waar de gebruiker hulp bij nodig heeft.`,
	};

	let messages = [];

	onMount(async () => {
		isTyping = true;
		const res = await fetch("/api/chat", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ messages: [systemPrompt] }),
		});
		const { reply, tags } = await res.json();
		console.log("AI tags (init):", tags);
		messages = [...messages, { role: "assistant", content: reply }];
		dispatch("updateFilters", tags);
		isTyping = false;
	});

	async function sendMessage() {
		if (!userInput.trim()) return;
		messages = [...messages, { role: "user", content: userInput }];
		isTyping = true;

		const res = await fetch("/api/chat", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ messages: [systemPrompt, ...messages] }),
		});

		const { reply, tags } = await res.json();
		console.log("AI tags (init):", tags);
		messages = [...messages, { role: "assistant", content: reply }];
		dispatch("updateFilters", tags);
		userInput = "";
		isTyping = false;
	}
</script>

<article class="chat-box">
	<h2>Chat met AI</h2>
	<div class="messages">
		{#each messages as msg (msg.content)}
			{#if msg.role !== "system"}
				<p class={msg.role === "user" ? "user-msg" : "assistant-msg"}>
					<strong>{msg.role === "user" ? "Jij" : "AI"}:</strong>
					{msg.content}
				</p>
			{/if}
		{/each}

		{#if isTyping}
			<p class="typing-indicator">
				<strong>AI:</strong>
				<span class="dot dot1"></span><span class="dot dot2"
				></span><span class="dot dot3"></span>
			</p>
		{/if}
	</div>

	<input
		type="text"
		bind:value={userInput}
		placeholder="Typ je vraag..."
		on:keydown={(e) => e.key === "Enter" && sendMessage()}
	/>
	<button on:click={sendMessage}>Stuur</button>
</article>

<style>
	.chat-box {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		background-color: #f5f5f5;
		padding: 1rem;
		border-radius: 10px;
	}

	.messages {
		flex-grow: 1;
		max-height: 300px;
		overflow-y: auto;
	}

	.user-msg {
		background-color: #e0f7fa;
		padding: 0.5rem;
		border-radius: 5px;
		margin-bottom: 0.5rem;
	}

	.assistant-msg {
		background-color: #ede7f6;
		padding: 0.5rem;
		border-radius: 5px;
		margin-bottom: 0.5rem;
	}

	.typing-indicator {
		display: flex;
		align-items: center;
		gap: 4px;
		margin-bottom: 0.5rem;
		padding: 0.5rem;
		background-color: #ede7f6;
		border-radius: 5px;
	}

	.dot {
		width: 8px;
		height: 8px;
		background-color: #555;
		border-radius: 50%;
		animation: bounce 1.4s infinite;
	}

	.dot1 {
		animation-delay: 0s;
	}
	.dot2 {
		animation-delay: 0.2s;
	}
	.dot3 {
		animation-delay: 0.4s;
	}

	@keyframes bounce {
		0%,
		80%,
		100% {
			transform: translateY(0);
		}
		40% {
			transform: translateY(-6px);
		}
	}

	input {
		padding: 0.5rem;
		border-radius: 5px;
		border: 1px solid #ccc;
	}

	button {
		padding: 0.5rem 1rem;
		background-color: #0070f3;
		color: white;
		border: none;
		border-radius: 5px;
		cursor: pointer;
	}
</style>
