import { StagewiseToolbar } from "@stagewise/toolbar-next";
import ReactPlugin from "@stagewise-plugins/react";

export default function StagewiseToolbarWrapper() {
	return <StagewiseToolbar config={{ plugins: [ReactPlugin()] }} />;
}
