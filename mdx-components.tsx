import type { MDXComponents } from 'nextra'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  }
}
