<script>
	import { onMount } from 'svelte';

	let userInput = ''
	let messages = [
		{
			role: 'system',
			content: `Je bent een behulpzame en vriendelijke assistent van Milledoni — een website waar gebruikers door duizenden cadeaus kunnen bladeren om het perfecte cadeau te vinden voor een familielid, vriend, collega of iemand anders. Jij helpt de gebruiker altijd met het kiezen van een passend cadeau. Vanaf dit bericht ziet de gebruiker wat er gestuurd wordt. Vanaf nu begin je met een eerste bericht zoals Hallo, kan ik je helpen met het zoeken van een cadeautje? Je zou het nog iets leuker mogen maken.`
		}
	]

	onMount(async () => {
		const res = await fetch('/api/chat', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ messages })
		})
		const { reply } = await res.json()
		messages = [...messages, { role: 'assistant', content: reply }]
	})

	async function sendMessage() {
		if (!userInput.trim()) return
		messages = [...messages, { role: 'user', content: userInput }]

		const res = await fetch('/api/chat', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ messages })
		})

		const { reply } = await res.json()
		messages = [...messages, { role: 'assistant', content: reply }]
		userInput = ''
	}
</script>

<article class="chat-box">
	<h2>Chat met AI</h2>
	<div class="messages">
		{#each messages as msg (msg.content)}
			{#if msg.role !== 'system'}
				<p><strong>{msg.role}:</strong> {msg.content}</p>
			{/if}
		{/each}
	</div>

	<input
		type="text"
		bind:value={userInput}
		placeholder="Typ je vraag..."
		on:keydown={(e) => e.key === 'Enter' && sendMessage()}
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