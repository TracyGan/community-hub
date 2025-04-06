import { BrowseItems } from "./browse-items";
import { Introduction } from "./introduction";
import { SuccessStories } from "./success-stories";

export function HomePage() {
	return (
		<div>
			<Introduction />
			<BrowseItems />
			<SuccessStories />
		</div>
	);
}
