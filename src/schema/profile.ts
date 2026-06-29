import { z } from "zod";

export const LocalizedSchema = z.object({
  de: z.string(),
  fr: z.string().optional(),
  it: z.string().optional(),
  en: z.string().optional(),
});
export type Localized = z.infer<typeof LocalizedSchema>;

export const ConversionTypeSchema = z.enum([
  "call",
  "whatsapp",
  "contact_form",
  "inquiry_project",
  "booking_tool",
  "first_consultation",
  "store_visit",
  "download",
  "none_presence",
]);
export type ConversionType = z.infer<typeof ConversionTypeSchema>;

export const ConversionClassSchema = z.enum(["action", "trust", "mixed"]);
export type ConversionClass = z.infer<typeof ConversionClassSchema>;

export const ProofTypeSchema = z.enum([
  "qualification",
  "certification",
  "experience_years",
  "specialization",
  "portfolio_images",
  "reviews",
  "testimonials",
  "references",
  "hygiene_seriosity",
]);
export type ProofType = z.infer<typeof ProofTypeSchema>;

export const BlockIdSchema = z.enum([
  "hero",
  "services",
  "pricing",
  "about_me",
  "team",
  "gallery_portfolio",
  "specialization",
  "contact",
  "location_map",
  "opening_hours",
  "booking",
  "legal",
  "testimonials",
  "qualifications",
]);
export type BlockId = z.infer<typeof BlockIdSchema>;

export const SemiDynamicModuleSchema = z.enum([
  "promotion",
  "news_notice",
  "job_opening",
  "holiday_hours",
  "guest_spot",
  "availability_status",
  "vacation_notice",
]);
export type SemiDynamicModule = z.infer<typeof SemiDynamicModuleSchema>;

export const RegulatoryFactSchema = z.object({
  question: LocalizedSchema,
  options: z.array(z.string()).min(1),
  placement: z.enum(["hero", "prominent", "standard"]),
  conversion_critical: z.boolean(),
});
export type RegulatoryFact = z.infer<typeof RegulatoryFactSchema>;

export const CharacterSetEntrySchema = z.object({
  label: LocalizedSchema,
  subtitle: LocalizedSchema,
  design_tokens: z.record(z.unknown()).optional(),
});
export type CharacterSetEntry = z.infer<typeof CharacterSetEntrySchema>;

export const BranchProfileSchema = z.object({
  branch_id: z.string().min(1),
  branch_label: LocalizedSchema,
  branch_aliases: z.array(z.string()).optional(),

  default_purpose: LocalizedSchema,

  conversion_type: ConversionTypeSchema,
  conversion_class: ConversionClassSchema,
  // Optional: zusätzliche Kontaktwege, die bei "full"-Tiefe der Conversion-Frage
  // als Alternativen zu conversion_type angeboten werden. Fehlt das Feld, bietet
  // der Motor ausschliesslich conversion_type an (dokumentierter Default —
  // im Profil-Schema festgelegt, nicht im Motor-Code).
  conversion_fallbacks: z.array(ConversionTypeSchema).optional(),

  craft_slider: z.number().int().min(0).max(100),

  proof_types: z.array(ProofTypeSchema).min(1),
  specialization_relevant: z.boolean(),

  default_blocks: z.array(BlockIdSchema).min(1),
  optional_blocks: z.array(BlockIdSchema).optional(),

  semi_dynamic_modules: z.array(SemiDynamicModuleSchema).optional(),
  regulatory_facts: z.array(RegulatoryFactSchema).optional(),

  character_set: z.array(CharacterSetEntrySchema).min(3).max(4),

  out_of_scope_signals: z.array(z.string()).optional(),
});
export type BranchProfile = z.infer<typeof BranchProfileSchema>;
