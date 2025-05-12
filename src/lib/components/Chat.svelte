<script>
	let userInput = ''
    /** @type {{ role: 'user' | 'assistant', content: string }[]} */
	let messages = []

	async function sendMessage() {
		if (!userInput.trim()) return

		messages = [...messages, { role: 'user', content: userInput }]

		const res = await fetch('/api/chat', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ message: userInput })
		})

		const { reply } = await res.json()
		messages = [...messages, { role: 'assistant', content: reply }]
		userInput = ''
	}
</script>

<article class="chat-box">
	<h2>Chat met AI</h2>
	<div class="messages">
		{#each messages as msg}
			<p><strong>{msg.role}:</strong> {msg.content}</p>
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
