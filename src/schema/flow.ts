import { z } from "zod";
import { LocalizedSchema, ConversionClassSchema, BlockIdSchema } from "./profile.js";

const NodeIdSchema = z.string().min(1);

const BranchSelectNodeSchema = z.object({
  id: NodeIdSchema,
  type: z.literal("branch_select"),
  next: NodeIdSchema,
});

const ConfirmDefaultNodeSchema = z.object({
  id: NodeIdSchema,
  type: z.literal("confirm_default"),
  prompt_template: z.literal("default_purpose"),
  on_exact: NodeIdSchema,
  on_more: NodeIdSchema,
  on_no: NodeIdSchema,
});

const ChecklistNodeSchema = z.object({
  id: NodeIdSchema,
  type: z.literal("checklist"),
  source_field: z.literal("optional_blocks"),
  next: NodeIdSchema,
});

const LookupGateNodeSchema = z.object({
  id: NodeIdSchema,
  type: z.literal("lookup_gate"),
  generic_options: z.array(LocalizedSchema).min(1),
  signal_field: z.literal("out_of_scope_signals"),
  on_match: NodeIdSchema,
  on_no_match: NodeIdSchema,
});

const GatekeeperNodeSchema = z.object({
  id: NodeIdSchema,
  type: z.literal("gatekeeper"),
  message: LocalizedSchema,
  terminal: z.literal(true),
});

const PurposeReselectNodeSchema = z.object({
  id: NodeIdSchema,
  type: z.literal("purpose_reselect"),
  next: NodeIdSchema,
});

const TrustQuestionNodeSchema = z.object({
  id: NodeIdSchema,
  type: z.literal("trust_question"),
  next: NodeIdSchema,
});

const DepthConfigSchema = z.object({
  depth: z.enum(["full", "short"]),
  branching: z.boolean(),
  visible: z.literal(true),
  max_options: z.number().int().positive().optional(),
});

const ScalableQuestionNodeSchema = z.object({
  id: NodeIdSchema,
  type: z.literal("scalable_question"),
  depth_source: z.literal("conversion_class"),
  depth_table: z.record(ConversionClassSchema, DepthConfigSchema),
  next: NodeIdSchema,
});

const EmphasisThresholdSchema = z.object({
  max: z.number().int().min(0).max(100),
  emphasis: z.enum(["full", "reduced"]),
});

const CharacterQuestionNodeSchema = z.object({
  id: NodeIdSchema,
  type: z.literal("character_question"),
  slider_source: z.literal("craft_slider"),
  emphasis_thresholds: z.array(EmphasisThresholdSchema).min(1),
  next: NodeIdSchema,
});

const FactsFormNodeSchema = z.object({
  id: NodeIdSchema,
  type: z.literal("facts_form"),
  fields: z.array(z.string()).min(1),
  next: NodeIdSchema,
});

const MandatoryAboveThresholdSchema = z.object({
  threshold: z.number().int().min(0).max(100),
  block: BlockIdSchema,
});

const MaterialCollectNodeSchema = z.object({
  id: NodeIdSchema,
  type: z.literal("material_collect"),
  slider_source: z.literal("craft_slider"),
  mandatory_above_threshold: z.array(MandatoryAboveThresholdSchema),
  next: NodeIdSchema,
});

const ReviewNodeSchema = z.object({
  id: NodeIdSchema,
  type: z.literal("review"),
  terminal: z.literal(true),
});

export const FlowNodeSchema = z.discriminatedUnion("type", [
  BranchSelectNodeSchema,
  ConfirmDefaultNodeSchema,
  ChecklistNodeSchema,
  LookupGateNodeSchema,
  GatekeeperNodeSchema,
  PurposeReselectNodeSchema,
  TrustQuestionNodeSchema,
  ScalableQuestionNodeSchema,
  CharacterQuestionNodeSchema,
  FactsFormNodeSchema,
  MaterialCollectNodeSchema,
  ReviewNodeSchema,
]);
export type FlowNode = z.infer<typeof FlowNodeSchema>;

export const FlowGraphSchema = z.object({
  entry: NodeIdSchema,
  nodes: z.array(FlowNodeSchema).min(1),
});
export type FlowGraph = z.infer<typeof FlowGraphSchema>;
