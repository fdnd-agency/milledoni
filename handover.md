# Handover Milledoni 🎁

Dit document helpt je op weg als je verder gaat met het Milledoni project. Milledoni is een platform waar je cadeau-inspiratie kunt vinden en delen, met als doel om het toegankelijk en gebruiksvriendelijk te maken voor iedereen.

---

## 📌 Huidige status
- De basis staat: producten worden ingeladen via Directus.
- De frontend is gebouwd met SvelteKit. Meerdere pagina’s zijn af, zoals de homepage en chatpagina.
- Componenten zoals het menu en de chat werken grotendeels.
- Er wordt data geladen via server en client (`+layout.js`, `+page.server.js`).
- Ontwerp is grotendeels uitgewerkt in Figma.

---

## ✅ Wat werkt al?
- **Producten worden opgehaald uit Directus** en kunnen gefilterd worden op tags.
- **Chatfunctie** werkt met de OpenAI API en bevat al content filtering.
- **Navigatie en menu** zijn responsive.
- **Toegankelijkheid**: er is nagedacht over `prefers-reduced-motion`, ARIA, semantische HTML.
- **Formulieren** zijn voorbereid, inclusief basisvalidatie.

---

## ⚠️ Aandachtspunten & uitdagingen
### Belangrijkste punten
- Het mobiele ontwerp voor de chat is op dit moment (eind mei 2025) nog niet gemaakt. Hier wordt op dit moment aan gewerkt.
- Het design dat aangeleverd is wordt nog uitvoerig getest door @sooshva. Neem contact met haar op voor een volledig en beter uitgewerkt design

### 🔁 Algemeen
- Contacteer Joost of Justus voor een nieuwe database structuur. Deze is al geleverd door de opdrachtgever, maar nog niet geimplementeerd.
- Filtering/tagging werkt, maar kan strakker (bijv. bij rare invoer of speciale tekens).
- Login functie is slechts een true/false variabelen. Dit moet goed uitgewerkt worden.
- Chat werkt op baiss van een OpenAI API key. Deze moet geplaatst worden in de .ENV file lokaal. ``OPENAI_API_KEY=key-hier``. Contacteer de opdrachtgever voor deze key.

---

## 🚀 Wat kun je het beste als eerste doen?

1. **Check de database-structuur** - Vraag Joost of Justus naar de laatste structuur die door de opdrachtgever is aangeleverd en implementeer deze.
2. **Verken de codebase** – vooral `routes/`, `lib/` en `server/`. Begrijp hoe de data wordt geladen en verwerkt.
3. **Zet de OpenAI key goed in je `.env`** – Gebruik `OPENAI_API_KEY=...` en vraag de key op bij de opdrachtgever.
4. **Werk aan toegankelijkheid** – Denk aan formulieren, toetsenbordnavigatie en ARIA-ondersteuning.
5. **Test in meerdere browsers en apparaten** – Denk aan Chrome, Firefox, Safari, mobiel.

---

## 🧑‍💻 Technische info
- **Framework:** SvelteKit
- **CMS/API:** Directus (https://fdnd-agency.directus.app)
- **Taal:** JavaScript
- **CSS:** in aparte bestanden (`style.css`, `fonts.css`)
- **Hosting/Deployment:** [Netlify](https://milledoni.dev.fdnd.nl/)

---

## 🔗 Handige links

- [Figma design](https://www.figma.com/design/tHCHwBm3Ujv7wR28VU2BSu/Milledoni)  
- [GitHub Projectboard](https://github.com/orgs/fdnd-agency/projects/68)  
- [Leertaak – QA opdracht](https://github.com/fdnd-task/final-sprint-quality-assurance/blob/main/docs/INSTRUCTIONS.md)  

### 📂 Database / API
- [Directus Admin](https://fdnd-agency.directus.app/admin/)  
- [PRODUCTS](https://fdnd-agency.directus.app/items/milledoni_products)  
- [USERS](https://fdnd-agency.directus.app/items/milledoni_users)  
- [TAGS](https://fdnd-agency.directus.app/items/milledoni_tags)  
- [LISTS](https://fdnd-agency.directus.app/items/milledoni_lists)  
- [USERS/LISTS](https://fdnd-agency.directus.app/items/milledoni_users_lists)  
- [USERS/LIKES](https://fdnd-agency.directus.app/items/milledoni_users_milledoni_products_1)  

---

## 📅 Laatste update
Bijgewerkt op: **2 juni 2025**  
Door: **Jesse Kramer**
