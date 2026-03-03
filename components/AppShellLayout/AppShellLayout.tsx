'use client';

import { AppShell, Burger, Group, ThemeIcon, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NavbarNested } from '../NavbarNested/NavbarNested';
import { IconBrandMantine } from '@tabler/icons-react';

export function AppShellLayout({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          {/* Temporary Logo Placeholder */}
          <Group gap="xs">
            <ThemeIcon size="lg" radius="md" color="blue">
              <IconBrandMantine size={20} />
            </ThemeIcon>
            <Text fw={700} size="lg">CMS Dashboard</Text>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <NavbarNested />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}