export const blocklist = [
	// Geweld
	'moord', 'doden', 'dood', 'wapen', 'wapens', 'pistool', 'mes', 'schieten', 'bom', 'explosief',
	'kill', 'murder', 'weapon', 'gun', 'knife', 'shoot', 'bomb', 'explosive', 'assassinate',

	// Drugs
	'drugs', 'wiet', 'cocaïne', 'heroïne', 'xtc', 'lsd', 'truffels', 'verslaving',
	'drugs', 'cocaine', 'heroin', 'weed', 'marijuana', 'addiction', 'acid', 'meth', 'opioids',

	// Seksueel
	'porno', 'pornografie', 'seks', 'erotisch', 'naakt', 'volwassenen speelgoed', 'condoom',
	'porn', 'sex', 'erotic', 'nude', 'naked', 'adult toy', 'condom', 'fetish', 'orgasm',

	// Discriminatie / haat
	'neger', 'kanker', 'homo', 'jood', 'moslimhaat', 'racist', 'nazisme',
	'nigger', 'faggot', 'kike', 'retard', 'hate speech', 'racism', 'nazi', 'terrorist',

	// Misbruik / crimineel
	'hack', 'inbreken', 'phishing', 'scam', 'fraude', 'wachtwoord stelen',
	'hack', 'breach', 'phish', 'scam', 'fraud', 'steal password', 'carding', 'doxx',

	// AI Misbruik / prompt injection
	'ignore previous', 'pretend to be', 'jailbreak', 'bypass filter', 'act as', 'system prompt',
	'negeer vorige', 'doe alsof je', 'prompt injectie', 'filter omzeilen', 'systeem instructie'
];


export function containsBlockedTerm(input) {
	const lower = input.toLowerCase();
	return blocklist.some(term => lower.includes(term));
}
