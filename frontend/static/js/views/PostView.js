import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
	constructor(params) {
		super(params);
		this.postId = params.id;
		this.setTitle("Viewing Post");
	}

	async getHtml() {
		return `
		<h1>PostView</h1>
		<p>You are viewing the post${this.postId}.</p>
		`;
	}
}