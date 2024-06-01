import { z } from 'zod';

const CategoryReferenceSchema = z.object({
  id: z.string(),
  typeId: z.string(),
});

const ProductVariantSchema = z.object({
  id: z.string(),
});

const ProductDataSchema = z.object({
  categories: z.array(CategoryReferenceSchema),
  description: z.string().optional(),
  masterVariant: ProductVariantSchema,
  name: z.string(),
  searchKeywords: z.string(),
  slug: z.record(z.string(), z.string()),
  variants: z.array(z.unknown()),
});

const ProductCatalogDataSchema = z.object({
  current: ProductDataSchema,
  hasStagedChanges: z.boolean(),
  published: z.boolean(),
  staged: ProductDataSchema,
});

export const productSchema = z.object({
  categories: z.array(z.record(z.string(), z.string())).optional(),
  categoryOrderHints: z.object({}).optional(),
  createdAt: z.string(),
  description: z.record(z.string(), z.string()).optional(),
  hasStagedChanges: z.boolean().optional(),
  id: z.string(),
  key: z.string(),
  lastModifiedAt: z.string(),
  masterData: ProductCatalogDataSchema.optional(),
  masterVariant: z.object({}).optional(),
  metaDescription: z.object({}).optional(),
  metaTitle: z.object({}).optional(),
  name: z.record(z.string(), z.string()),
  priceMode: z.string().optional(),
  productType: z.object({
    id: z.string(),
    typeId: z.string(),
  }),
  published: z.boolean().optional(),
  searchKeywords: z.object({}).optional(),
  slug: z.record(z.string(), z.string()).optional(),
  taxCategory: z
    .object({
      id: z.string(),
      typeId: z.string(),
    })
    .optional(),
  variants: z.array(z.unknown()).optional(),
  version: z.number(),
});

export type Product = z.infer<typeof productSchema>;

export const getProductsResultSchema = z.object({
  count: z.number(),
  limit: z.number(),
  offset: z.number(),
  results: z.array(productSchema),
  total: z.number(),
});

export type ProductsResponse = z.infer<typeof getProductsResultSchema>;
