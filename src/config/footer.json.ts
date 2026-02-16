
import type { Footer } from "@src-types/types.ts";

/**
 * Array of navigation links and dropdowns.
 * Add links or dropdowns here to display in the footer.
 * Only one level of dropdown links is supported.
 * The Creative footer layout supports only 2 dropdowns. First one is left aligned, the second one is right aligned.
 */

const footerSettings: Footer[] = [
	{
		text: "(Navigation)",
		dropdown: [
			{
				text: "Archive",
				link: "/archive/",
			},
			{
				text: "All posts",
				link: "/all-posts/",
			},
			{
				text: "Tags",
				link: "/tags/",
			},
			{
				text: "Authors",
				link: "/authors/",
			},
			{
				text: "Membership",
				link: "/membership/",
			},
			{
				text: "Contact",
				link: "/contact/",
			}
		],
	},
	{
		text: "(Features)",
		dropdown: [
			{
				text: "Features",
				link: "/features/",
			},
			{
				text: "Style Guide",
				link: "/style-guide/",
			},
			{
				text: "Documentation",
				link: "https://www.kusa-projects.com/astro-documentation",
				new_tab: true
			},
			{
				text: "Changelog",
				link: "/changelog/",
			},
			{
				text: "Get Theme",
				link: "https://kusa-projects.lemonsqueezy.com/checkout/buy/999a9b97-d79e-4ecb-aaf2-b8e14ef4feda",
				new_tab: true
			}
		],
	},
]

export default footerSettings;