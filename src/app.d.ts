declare global {
	namespace App {
		// interface Locals {}
		// interface PageData {}
		// interface Error {}
		// interface Platform {}
		interface PageData {
			flash?: { type: 'success' | 'error'; message: string };
		}
	}
}
export {};
