import { Notice, Plugin } from "obsidian";

interface UriParameters {
	side?: string;
	show?: string;
}

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

		this.registerObsidianProtocolHandler("sidebar", async (p) => {
			// 🏴‍☠️ ryan's log plugin
			const parameters = p as unknown as UriParameters;
			for (const parameter in parameters) 
				parameters as any[parameter] = parameters as any[parameter];
			

			const sideParamValid = ["right", "left"].includes(parameters.side);
			const showParamValid = ["true", "false"].includes(parameters.show);
			if (!sideParamValid || !showParamValid) {
				new Notice ("URI invalid.\n\nPlease refer to the README of the Sidebar Toggler Plugin.");
				return;
			}

			const show = parameters.show === "true";
			this.showSidebar(parameters.side, show);
			console.log("Side: " + parameters.side);
			console.log("Show: " + show);
		});

	}

	async onunload() { console.log("Sidebar Toggler Plugin unloaded.") }

	showSidebar (side: string, show: boolean) {
		const leftHidden = this.app.workspace.leftSplit.collapsed;
		const rightHidden = this.app.workspace.rightSplit.collapsed;

		if (side === "left" && show && leftHidden) this.app.workspace.leftSplit.expand();
		else if (side === "right" && show && rightHidden) this.app.workspace.rightSplit.expand();
		else if (side === "left" && !show && !leftHidden) this.app.workspace.leftSplit.collapse();
		else if (side === "right" && !show && !leftHidden) this.app.workspace.rightSplit.collapse();
	}

}
