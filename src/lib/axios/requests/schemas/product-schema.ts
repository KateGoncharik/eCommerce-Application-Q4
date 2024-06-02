import { z } from 'zod';

const CategoryReferenceSchema = z.object({
  id: z.string(),
  typeId: z.string(),
});

const AttributeValueSchema = z.record(z.string());
const AttributeSchema = z.object({
  name: z.string(),
  value: AttributeValueSchema,
});

const MasterVariantSchema = z.object({
  attributes: z.array(AttributeSchema),
  id: z.number(),
  images: z.array(
    z.object({
      dimensions: z.object({
        h: z.number(),
        w: z.number(),
      }),
      label: z.string().optional(),
      url: z.string(),
    }),
  ),
  prices: z.array(z.any()),
});

const productDataSchema = z.object({
  categories: z.array(CategoryReferenceSchema),
  description: z.string().optional(),
  masterVariant: MasterVariantSchema,
  name: z.string(),
  searchKeywords: z.string(),
  slug: z.record(z.string(), z.string()),
  variants: z.array(z.unknown()),
});

const productCatalogDataSchema = z.object({
  current: productDataSchema,
  hasStagedChanges: z.boolean(),
  published: z.boolean(),
  staged: productDataSchema,
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
  masterData: productCatalogDataSchema.optional(),
  masterVariant: MasterVariantSchema,
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
