import type { GlobalSettingsProps } from "@src-types/types.ts";

const globalSettings: GlobalSettingsProps = {
    site_name: "PMC DA VINCI",
    site_meta_title: "PMC DA VINCI",
    site_meta_description: "PMC - Project Management Center represents operational execution: the discipline required to move from ideas to implementation.",
    site_meta_image_source: "/images/kusa-projects-logo.jpg",
    twitter_username: "@Your_Username",
    language: "en", // Default language and static texts file (en.json)
    background_color: "rgb(255, 255, 255)", // Background color in rgb format
    text_color: "rgb(30, 30, 30)", // Text color in rgb format
    overlay_text_color: "rgb(255, 255, 255)", // Overlay text color in rgt format
    overlay_button_text_color: "rgb(30, 30, 30)", // Overlay button text color in rgt format
    dark_overlay_opacity: 0.3, // Black overlay opacity that covers background media
    primary_font: "Thunder", // Google Fonts name (use the exact name as listed on Google Fonts embed link). Example: "Roboto Mono" should be "Roboto+Mono"
    secondary_font: "Roboto", // Google Fonts name (use the exact name as listed on Google Fonts embed link). Example: "Roboto Mono" should be "Roboto+Mono"
    logo_scale: 1, // Default logo scale (use a number for scaling)
    heading_font_scale: 1, // Default scale for primary font elements (use a number for scaling)
    heading_font_line_height_scale: 1, // Default scale for primary font elements (use a number for scaling)
    pagination_posts_number: 6,
    use_page_load_animations: true,
    scrolling_type: "Moderate", // "None" | "Subtle" | "Intense" -> Using Lenis library: https://lenis.darkroom.engineering/
    use_image_zoom: true, // Use image zoom on post page,
    content_length_on_background_media: "Narrow", // "Narrow" | "Wide" | "Full Width"
    button_style_on_background_media: "Bracket Desktop/Solid Mobile", // "Bracket" | "Solid" | "Bracket Desktop/Solid Mobile" | "None"
    content_position_on_home_hero: "Bottom Left", // "Bottom Left" | "Center"
    content_position_on_author_hero: "Bottom Left", // "Bottom Left" | "Center"
    text_style: "uppercase", // "uppercase" | "capitalize" | "lowercase" | "none" -> Text style for primary font elements
    post_card_image_aspect_ratio: "4/3", // "1/1" | "16/9" | "5/4" | "4/3" | "3/2" | "4/5" | "3/4" | "2/3" -> Aspect ratio for images in post cards
    show_post_card_extra_info: false, // Shows post author and date
    show_featured_post_preview: false, // Show a featured post preview on mobile devices, or navigate directly to the featured post on the first click
    homepage_post_card_style: "Creative", // "Default" | "Creative" -> Post card style for latest posts on homepage
    footer_type: "Normal", // "Creative" | "Normal"
    post_template: "Right Aligned", // "Right Aligned" | "Default"
    post_header_type: "Wide" // "Wide" | "Wide Centered" | "Narrow" | "Narrow Centered" | "Background Media" | "Background Media Centered" -> Narrow and Narrow Centered options only work on Default post template
}

export default globalSettings;
