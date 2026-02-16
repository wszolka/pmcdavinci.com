
import type { Navbar } from "@src-types/types.ts";

/**
 * Array of navigation links and dropdowns.
 * Add links or dropdowns here to display in the navigation bar.
 * Only one level of dropdown links is supported.
 */

const navbarSettings: Navbar[] = [
    {
		text: "Style Guide",
		link: "/style-guide/",
	},
	{
		text: "Features",
		dropdown: [
			{
				text: "Features",
				link: "/features/",
			},
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
			},
			{
				text: "Account",
				link: "/account/",
			},
			{
				text: "Subscribe",
				link: "/subscribe/",
			},
			{
				text: "Sign in",
				link: "/signin/",
			},
			{
				text: "Sign up",
				link: "/signup/",
			},
			{
				text: "FAQ",
				link: "/faq/",
			},
			{
				text: "404",
				link: "/404/",
			},
			{
				text: "RSS Feed",
				link: "/rss.xml/",
			},
			{
				text: "Get Theme",
				link: "https://kusa-projects.lemonsqueezy.com/checkout/buy/999a9b97-d79e-4ecb-aaf2-b8e14ef4feda",
				new_tab: true
			},
			{
				text: "KUSA Projects",
				link: "https://www.kusa-projects.com/",
				new_tab: true
			},
		],
	},
	{
		text: "Documentation",
		link: "https://www.kusa-projects.com/astro-documentation",
		new_tab: true
	},
	{
		text: "Post Templates",
		dropdown: [
			{
				text: "Right Aligned",
				link: "/blog/unleash-your-creativity/",
			},
			{
				text: "Default",
				link: "/blog/increase-inner-happiness/",
			},
		],
	},
	{
		text: "Post Headers",
		dropdown: [
			{
				text: "Wide",
				link: "/blog/unleash-your-creativity/",
			},
			{
				text: "Wide Centered",
				link: "/blog/interior-design-trends/",
			},
			{
				text: "Narrow",
				link: "/blog/must-have-tech-gadgets/",
			},
			{
				text: "Narrow Centered",
				link: "/blog/balancing-work-life/",
			},
			{
				text: "Background Media",
				link: "/blog/exploring-creative-spirit/",
			},
			{
				text: "Background Media Centered",
				link: "/blog/exploring-our-boundaries/",
			},
		],
	},
]

export default navbarSettings;