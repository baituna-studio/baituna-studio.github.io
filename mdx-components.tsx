import type { MDXComponents } from 'nextra'
import {
  Alert,
  Anchor,
  Blockquote,
  Code,
  Divider,
  List,
  Table,
  Text,
  Title,
} from '@mantine/core'
import { IconInfoCircle } from '@tabler/icons-react'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <Title order={1} mt="md" mb="lg" fz={{ base: 38, md: 56 }} {...props} />,
    h2: (props) => (
      <>
        <Title order={2} mt={48} mb="md" fz={{ base: 30, md: 42 }} {...props} />
        <Divider mb="lg" />
      </>
    ),
    h3: (props) => <Title order={3} mt="xl" mb="sm" {...props} />,
    h4: (props) => <Title order={4} mt="lg" mb="sm" {...props} />,
    p: (props) => <Text mb="md" c="dimmed" lh={1.8} {...props} />,
    a: (props) => <Anchor c="bronze.7" fw={600} {...props} />,
    ul: (props) => <List mb="md" spacing="xs" {...props} />,
    ol: (props) => <List type="ordered" mb="md" spacing="xs" {...props} />,
    blockquote: (props) => <Blockquote color="bronze" my="md" {...props} />,
    code: (props) => <Code color="bronze" {...props} />,
    table: (props) => (
      <Table.ScrollContainer minWidth={680}>
        <Table striped highlightOnHover withTableBorder mb="md" {...props} />
      </Table.ScrollContainer>
    ),
    Callout: (props) => (
      <Alert
        color="bronze"
        icon={<IconInfoCircle size={16} />}
        my="md"
        title={typeof props.title === 'string' ? props.title : 'Info'}
      >
        <Text size="sm">{props.children}</Text>
      </Alert>
    ),
    ...components,
  }
}
