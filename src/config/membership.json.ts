import type { MembershipCardProps } from "@src-types/types.ts";

/**
 * Array of membership cards for Membership page.
 */

const membershipSettings: MembershipCardProps[] = [
    {
        name: "Free",
        description: "Free preview of Snook",
        yearly_price: "$0",
        monthly_price: "$0",
        benefits: [
            "Access to public posts",
            "Receive weekly email newsletter"
        ]
    },
    {
        name: "Premium",
        description: "Full access to premium content",
        yearly_price: "$49",
        monthly_price: "$5",
        benefits: [
            "Full access to Premium posts",
            "Receive weekly email newsletter",
            "Support indie publishing",
            "Simple secure card payment"
        ]
    },
    {
        name: "Premium plus",
        description: "Full access to everything",
        yearly_price: "$89",
        monthly_price: "$9",
        benefits: [
            "Full access to Premium plus posts",
            "Receive weekly email newsletter",
            "Support indie publishing",
            "Simple secure card payment",
            "Access to exclusive deals"
        ]
    }
]

export default membershipSettings;