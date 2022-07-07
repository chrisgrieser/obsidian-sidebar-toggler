import { Plugin } from "obsidian";

export default class SidebarToggler extends Plugin {

	async onload() {
		console.log("Sidebar Toggler Plugin loaded.");

		this.addCommand({
			id: "show-left-sidebar",
			name: "Show Left Sidebar",
			callback: () => this.showSidebar("left", true),
		});
		this.addCommand({
			id: "show-right-sidebar",
			name: "Show Right Sidebar",
			callback: () => this.showSidebar("right", true),
		});
		this.addCommand({
			id: "hide-left-sidebar",
			name: "Hide Left Sidebar",
			callback: () => this.showSidebar("left", false),
		});
		this.addCommand({
			id: "hide-right-sidebar",
			name: "Hide Right Sidebar",
			callback: () => this.showSidebar("right", false),
		});

	}

	async onunload() { console.log("Sidebar Toggler Plugin unloaded.") }

	showSidebar (side: string, show: boolean) {
		if (side === "left") {
			if (show) this.app.workspace.leftSplit.expand();
			else this.app.workspace.leftSplit.collapse();
		} else if (side === "right") {
			if (show) this.app.workspace.rightSplit.expand();
			else this.app.workspace.rightSplit.collapse();
		}
	}

}
