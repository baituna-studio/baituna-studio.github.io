import { Center, Loader, Stack, Text } from '@mantine/core'

export default function Loading() {
  return (
    <Center mih="60vh">
      <Stack align="center" gap="sm">
        <Loader color="bronze" size="md" />
        <Text size="sm" c="dimmed">Loading premium experience...</Text>
      </Stack>
    </Center>
  )
}
