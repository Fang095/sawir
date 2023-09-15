<script lang="ts" context="module">
  import { z } from 'zod';

  export const formSchema = z.object({
    email: z.string().email(),
    username: z.string().min(2).max(10),
    password: z.string().min(10, { message: 'password must be 10 characters or more' })
  });

  export type FormSchema = typeof formSchema;
</script>

<script lang="ts">
  import { Fingerprint } from 'lucide-svelte';
  import type { SuperValidated } from 'sveltekit-superforms';

  import * as Card from '$lib/components/ui/card';
  import * as Form from '$lib/components/ui/form';
  import { AuthIcon } from '$lib/components';

  export let form: SuperValidated<FormSchema>;
</script>

<Card.Root class="pt-10 pb-6 space-y-8">
  <Card.Header class="space-y-4">
    <AuthIcon>
      <Fingerprint />
    </AuthIcon>

    <div class="flex flex-col items-center justify-center space-y-2">
      <Card.Title tag="h2" class="text-2xl font-medium">Welcome to Sawir</Card.Title>

      <Card.Description class="text-sm text-center text-text-secondary">
        A platform for your thoughts, where you can share, connect and discover endless
        conversations.
      </Card.Description>
    </div>
  </Card.Header>

  <Card.Content>
    <Form.Root
      schema={formSchema}
      {form}
      let:config
      method="POST"
      action="?/register"
      class="space-y-6"
    >
      <Form.Field {config} name="email">
        <Form.Item>
          <Form.Input type="email" />
          <Form.Label>email</Form.Label>
        </Form.Item>
      </Form.Field>

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

      <Form.Button>Register</Form.Button>
    </Form.Root>
  </Card.Content>
</Card.Root>

<p class="flex items-center self-center space-x-1 text-sm">
  <span class="text-text-secondary">Already have an account?</span>
  <a href="/login" class="text-sm font-medium underline">Login</a>
</p>
