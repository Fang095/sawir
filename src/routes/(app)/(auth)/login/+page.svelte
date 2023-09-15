<script lang="ts" context="module">
  import { z } from 'zod';

  export const formSchema = z.object({
    username: z.string().min(2).max(10),
    password: z.string().min(10, { message: 'password must be 10 characters or more' })
  });

  export type FormSchema = typeof formSchema;
</script>

<script lang="ts">
  import { User } from 'lucide-svelte';
  import type { SuperValidated } from 'sveltekit-superforms';

  import * as Card from '$lib/components/ui/card';
  import * as Form from '$lib/components/ui/form';
  import { AuthIcon } from '$lib/components';

  export let form: SuperValidated<FormSchema>;
</script>

<Card.Root class="pt-10 pb-6 space-y-8">
  <Card.Header class="space-y-4">
    <AuthIcon>
      <User />
    </AuthIcon>

    <div class="flex flex-col items-center justify-center space-y-2">
      <Card.Title tag="h2" class="text-2xl font-medium">Welcome back to Sawir</Card.Title>

      <Card.Description class="text-sm text-center text-text-secondary">
        Dive back into the conversations, share your updates, and connect with your community.
      </Card.Description>
    </div>
  </Card.Header>

  <Card.Content>
    <Form.Root
      schema={formSchema}
      {form}
      let:config
      method="POST"
      action="?/login"
      class="space-y-6"
    >
      <Form.Field {config} name="username">
        <Form.Item>
          <Form.Input />
          <Form.Label>Username</Form.Label>
        </Form.Item>
      </Form.Field>

      <Form.Field {config} name="password">
        <Form.Item>
          <Form.Input type="password" />
          <Form.Label>Password</Form.Label>
        </Form.Item>
      </Form.Field>

      <div class="flex items-center justify-between">
        <Form.Button>Login</Form.Button>

        <a
          href="/reset-password"
          class="text-sm transition-colors ease-out text-text-secondary hover:text-gray-950 hover:underline"
        >
          Forgot password?
        </a>
      </div>
    </Form.Root>
  </Card.Content>
</Card.Root>

<p class="flex items-center self-center space-x-1 text-sm">
  <span class="text-text-secondary">Don't have an account?</span>
  <a href="/register" class="text-sm font-medium underline">Register</a>
</p>
