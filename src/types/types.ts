import type { CollectionEntry } from "astro:content";

export interface GlobalSettingsProps {
    site_name: string,
    site_meta_title: string,
    site_meta_description: string,
    site_meta_image_source: string,
    twitter_username: string,
    language: string,
    background_color: string,
    text_color: string,
    overlay_text_color: string,
    overlay_button_text_color: string,
    dark_overlay_opacity: number,
    primary_font: string,
    secondary_font: string,
    logo_scale: number,
    heading_font_scale: number,
    heading_font_line_height_scale: number,
    pagination_posts_number: number,
    use_page_load_animations: boolean,
    scrolling_type: ScrollingType,
    use_image_zoom: boolean,
    content_length_on_background_media: ContentLength,
    button_style_on_background_media: ButtonStyle,
    content_position_on_home_hero: ContentPosition,
    content_position_on_author_hero: ContentPosition,
    text_style: TextStyle,
    post_card_image_aspect_ratio: PostCardImageAspectRatio,
    show_post_card_extra_info: boolean,
    show_featured_post_preview: boolean,
    homepage_post_card_style: HomePostCardStyle,
    footer_type: FooterType,
    post_template: PostTemplate,
    post_header_type: PostHeaderType
}

export type ScrollingType = "None" | "Subtle" | "Moderate" | "Intense"
export type ContentLength = "Narrow" | "Wide" | "Full Width"
export type ButtonStyle = "Bracket" | "Solid" | "Bracket Desktop/Solid Mobile" | "None"
export type ContentPosition = "Bottom Left" | "Center"
export type TextStyle = "uppercase" | "capitalize" | "lowercase" | "none"
export type PostCardImageAspectRatio = "1/1" | "16/9" | "5/4" | "4/3" | "3/2" | "4/5" | "3/4" | "2/3" 
export type HomePostCardStyle = "Default" | "Creative"
export type FooterType = "Creative" | "Normal"
export type PostTemplate = "Right Aligned" | "Default"
export type PostHeaderType = "Wide" | "Wide Centered" | "Narrow" | "Narrow Centered" | "Background Media" | "Background Media Centered"
export type PostHeaderTypeLimited = "Wide" | "Wide Centered" | "Narrow" | "Narrow Centered"

export interface NavbarLink {
	text: string,
	link: string,
	new_tab?: boolean // adds target="_blank" rel="noopener noreferrer" to link
}

export interface NavbarDropdown {
	text: string,
	dropdown: NavbarLink[]
}

export type Navbar = NavbarLink | NavbarDropdown;

export interface FooterLink {
	text: string,
	link: string,
	new_tab?: boolean // adds target="_blank" rel="noopener noreferrer" to link
}

export interface FooterDropdown {
	text: string,
	dropdown: FooterLink[]
}

export type Footer = FooterLink | FooterDropdown;

export interface GalleryImage {
    src: string,
    alt: string
}

export interface ImageCardProps {
    image_slug: string,
    alt: string,
    size: ImageSize
}

export type ImageSize = "Auto" | "Wide" | "Full Width"

export interface SocialProps {
    is_share_social?: boolean,
    text: string,
    url: string,
    icon: string // svg string
}

export interface ImageGalleryItem {
  slug: string;
  alt?: string;
}

export interface ImageGalleryProps {
    image_slugs: ImageGalleryItem[],
    images_per_row?: number
}

export interface CalloutProps {
    text: string,
    emoji?: string,
    text_color?: string,
    background_color?: string
}

export interface ToggleCard {
    title: string,
    text: string
}

export interface ToggleCardsProps {
    toggle_cards: ToggleCard[]
}

export interface MediaEmbedProps {
    media_iframe_src: string,
    title?: string
}

export interface SeoProps {
    type?: "image" | "no_image";
	title: string;
	description: string;
	image?: CollectionEntry<"blog">["data"]["feature_image"];
	noindex?: boolean;
}

export interface ButtonProps {
    text: string,
    url?: string,
    new_tab?: boolean,
    button_style?: ButtonStyle
}

export interface FeaturedPostsProps {
    posts: CollectionEntry<"blog">[],
    show_featured_post_preview?: boolean
}

export interface SliderProps {
    posts: CollectionEntry<"blog">[]
}

export interface SliderPostCardProps {
    content_position?: ContentPosition,
    content_length?: ContentLength,
    button_style?: ButtonStyle,
    post: CollectionEntry<"blog">,
    index: number,
    total_posts: number
}

export interface CirclesProps {
    heading?: string,
    circles_content: CircleContent[],
    loop_content: number
}

export interface CircleContent {
    title?: string,
    text?: string,
    image_slug?: string
}

export interface PostProps {
	post: CollectionEntry<"blog">,
    previous_post?: CollectionEntry<"blog">,
    next_post?: CollectionEntry<"blog">,
    minutes_read?: string
}

export interface PostCardProps {
    post: CollectionEntry<"blog">,
    index?: number
}

export interface BackgroundMediaPostHeaderProps {
    content_position?: ContentPosition,
    content_length?: ContentLength,
    button_style?: ButtonStyle,
    post: CollectionEntry<"blog">,
    is_for_end_page?: boolean,
    minutes_read?: string,
    hide_post_links?: boolean
}

export interface DefaultPostHeaderProps {
    post: CollectionEntry<"blog">,
    minutes_read?: string,
    post_template?: PostTemplate,
    post_header?: PostHeaderTypeLimited
}

export interface PaginationProps {
    posts_per_page: number,
    total_posts: number,
    url: string,
    is_archivepage?: boolean,
    text: string
}

export interface PostAuthorsProps {
    post: CollectionEntry<"blog">,
    minutes_read: string
}

export interface TagCardProps {
    name: string,
    url: string,
    post_count?: number
}

export interface TagProps {
    slug: string,
    description?: string
}

export interface AuthorCardProps {
    name: string,
    url: string,
    post_count?: number
}

export interface AuthorProps {
    slug: string,
    bio?: string,
    location?: string,
    socials?: SocialProps[]
}

export interface MembershipCardProps {
    name: string,
    description?: string,
    yearly_price: string,
    monthly_price: string,
    benefits?: string[]
}

export interface ContactProps {
    email?: string,
    phone_number?: string,
    address_url?: string,
    text_content_1?: string,
    display_content_image?: boolean,
    content_image_alt_text?: string,
    text_content_2?: string
}

export interface FormHeroProps {
    type: FormHeroType,
    has_link?: boolean,
    title: string,
    description?: string
}

export type FormHeroType = "Contact" | "Signin" | "Signup" | "Subscribe"