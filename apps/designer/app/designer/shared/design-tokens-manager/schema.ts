import { z } from "zod";
import { groups } from "./groups";

export const DesignToken = z.object({
  name: z.string(),
  // zod expects readonly tuples for its enums
  type: z.enum(
    groups.map((group) => group.type) as unknown as readonly [
      typeof groups[number]["type"]
    ]
  ),
  value: z.string(),
  description: z.optional(z.string()),
  // zod expects readonly tuples for its enums
  group: z.enum(
    groups.map((group) => group.type) as unknown as readonly [
      typeof groups[number]["group"]
    ]
  ),
});

export type DesignToken = z.infer<typeof DesignToken>;
