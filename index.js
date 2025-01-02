import { restClient } from "@polygon.io/client-js";

const rest = restClient('YOUR_API_KEY', 'https://api.polygon.io');

rest.crypto.aggregates("X:BTCUSD", 1, "day", "2024-11-30", "2024-12-13").then((data) => {
	console.log(data);
}).catch((e) => {
	console.error('An error happened:', e.message);
});