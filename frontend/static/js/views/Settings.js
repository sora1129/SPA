import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
	constructor(params) {
		super(params);
		this.setTitle("Settings");
	}

	async getHtml() {
		return `
		<h1>Setting</h1>
		<p>Manage tour privacy and configuration.</p>
		`;
	}
}