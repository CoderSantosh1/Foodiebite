import type categoryData from "../data/category.json";

export type CategoryData = typeof categoryData;
export type SiteInfo = CategoryData["common"]["site"];
export type NavigationItem = CategoryData["Navigation"][number];
export type MenuCategory = CategoryData["menu"]["categories"][number];
export type Dish = CategoryData["popularDishes"]["dishes"][number];
export type StatItem = CategoryData["stats"]["items"][number];
export type Benefit = CategoryData["whyUs"]["benefits"][number];
export type Chef = CategoryData["team"]["chefs"][number];
export type GalleryImage = CategoryData["gallery"]["images"][number];
export type Testimonial = CategoryData["testimonials"]["items"][number];
export type FaqItem = CategoryData["faq"]["items"][number];
export type SocialIconName = "Facebook" | "Instagram" | "X" | "YouTube";
export type DataIconName =
  | "Bike"
  | "ChefHat"
  | "ForkKnife"
  | "Leaf"
  | "Sandwich"
  | "Store"
  | "Utensils"
  | "Users";
