<script>
  import { onMount } from "svelte";
  import { Icons } from "$lib/index.js";
  import { createEventDispatcher } from "svelte";

  export let tags = [];

  let userInput = "";
  let isTyping = false;

  const dispatch = createEventDispatcher();

  const systemPrompt = {
    role: "system",
    content: `Je bent een behulpzame en vriendelijke cadeaugids van Milledoni. Je helpt gebruikers cadeaus te vinden op basis van voorkeuren, interesses en personen. Kies passende tags uit deze lijst: [${tags}]. 

		Geef elk antwoord terug als een JSON-object met:
		- "reply" (alleen de tekst die aan de gebruiker getoond wordt, je moet de tags die je gefilterd hebt gebruiken om een goede reply te schrijven)
		- "tags" (interne data voor filtering)

		Zet de tags nooit in de tekst van "reply", en voeg GEEN markdown, geen codeblokken en geen extra uitleg toe. Geef alleen het JSON-object terug aan het systeem. 
		Vanaf nu begin je altijd met de vraag: "Hallo! Kan ik je helpen om een cadeau te zoeken?"
		
		Begin hier nooit mee: Je moet ook alle ongepaste woorden in elke taal kunnen filteren, en zeg hierbij 'Sorry, dit bericht bevat woorden die we liever vermijden in dit gesprek. Kun je je vraag anders formuleren? Dan helpen we je graag verder'. Gebruik deze woorden in de taal die de woorden bevatten.
		De tekst kan Engels bevatten, verander dan de tekst in het Engels. `,
  };

  let messages = [];

  onMount(async () => {
    isTyping = true;
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: [systemPrompt, { role: "user", content: "start" }],
      }),
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
  <div class="messages">
    {#each messages as msg (msg.content)}
      {#if msg.role !== "system"}
        <p class={msg.role === "user" ? "user-msg" : "assistant-msg"}>
          {#if msg.role === "user"}
            <Icons name="profile" width="25px" height="25px"></Icons>
          {:else}
            <Icons name="logo-small" width="23.5px" height="25px"></Icons>
          {/if}
          {msg.content}
        </p>
      {/if}
    {/each}

    {#if isTyping}
      <p class="typing-indicator" aria-live="polite">
        <span class="dot dot1"></span><span class="dot dot2"></span><span
          class="dot dot3"
        ></span>
      </p>
    {/if}
  </div>

  <form
    class="search-container"
    method="GET"
    role="search"
    aria-label="Search for a gift"
  >
    <label for="chat-search" class="visually-hidden">Zoek</label>
    <button type="button" class="icon-button" aria-label="Add">
      <Icons name="plus" width="20px" height="20px"></Icons>
    </button>
    <button type="button" class="icon-button" aria-label="Voice Search">
      <Icons name="mic" width="20px" height="20px"></Icons>
    </button>
    <input
      id="chat-search"
      type="text"
      bind:value={userInput}
      placeholder="I search a gift for a ..."
      on:keydown={(e) => {
        if (e.key === "Enter") {
          sendMessage();
          userInput = "";
        }
      }}
    />
    <button
      type="submit"
      class="icon-button search-button"
      aria-label="Search"
      on:click={() => {
        sendMessage();
        userInput = "";
      }}
    >
      <Icons name="search" width="20px" height="20px"></Icons>
    </button>
  </form>
</article>

<style>
  .chat-box {
    display: none;
  }

  @media (min-width: 1024px) {
    .chat-box {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      background-color: #ffffff;
      padding: 1rem;
      border-radius: 10px;
      height: 100%;
      width: 30.61vw;
      max-width: 30.61vw;
      margin-left: auto;
      margin-top: 6.98vh;
      height: 77.8vh;
      max-height: 77.8vh;
    }

    .messages {
      flex-grow: 1;
      max-height: 100svh;
      overflow-y: auto;
    }

    .user-msg {
      background-color: var(--bg-color);
      padding: 0.5rem;
      border-radius: 5px;
      margin-bottom: 0.5rem;
      margin-left: 25%;
    }

    .assistant-msg {
      background-color: var(--bg-color);
      padding: 0.5rem;
      border-radius: 5px;
      margin-bottom: 0.5rem;
      width: 75%;
    }

    .typing-indicator {
      display: flex;
      align-items: center;
      gap: 4px;
      margin-bottom: 0.5rem;
      padding: 0.5rem;
      background-color: var(--bg-color);
      border-radius: 5px;
      height: 3em;
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

    .search-container {
      border: 1px solid #a3a3a3;
      width: auto;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      border-radius: 9999px;
      background: white;

      .icon-button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.25rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--icon-color);
      }

      .search-button {
        width: 3em;
        height: 3em;
        background: black;
        border-radius: 100%;
      }

      input[type="text"] {
        border: none;
        outline: none;
        flex: 1;
        font-size: 1rem;
        color: var(--icon-color);
        background: transparent;
      }

      input::placeholder {
        color: var(--txt-ph-color);
      }
    }
  }
</style>
