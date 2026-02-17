
import type { Navbar } from "@src-types/types.ts";

/**
 * Array of navigation links and dropdowns.
 * Add links or dropdowns here to display in the navigation bar.
 * Only one level of dropdown links is supported.
 */

const navbarSettings: Navbar[] = [
	{
		text: "Applied Innovation",
		link: "/applied-innovation"
	},
	{
		text: "International Work",
		link: "/#international-work",
	},
	{
		text: "About",
		link: "/about",
	},
	{
		text: "Why work together",
		link: "#why-work-together",
	},
	{
		text: "Contact",
		link: "/contact/",
	},

]

export default navbarSettings;