<script lang="ts" context="module">
  import { z } from 'zod';

  export const formSchema = z.object({
    email: z.string().email()
  });

  export type FormSchema = typeof formSchema;
</script>

<script lang="ts">
  import { Lock } from 'lucide-svelte';
  import type { SuperValidated } from 'sveltekit-superforms';

  import * as Form from '$lib/components/ui/form';
  import * as Card from '$lib/components/ui/card';
  import { AuthIcon } from '$lib/components/auth';

  export let form: SuperValidated<FormSchema>;
</script>

<Card.Root class="pt-10 pb-6 space-y-8">
  <Card.Header class="space-y-4">
    <AuthIcon>
      <Lock />
    </AuthIcon>

    <div class="flex flex-col items-center justify-center space-y-2">
      <Card.Title tag="h2" class="text-2xl font-medium">Forgot Your Password?</Card.Title>

      <Card.Description class="text-sm text-center text-text-secondary">
        Enter the email address you used when you joined and we&apos;ll send you instructions on how
        to reset your password.
      </Card.Description>
    </div>
  </Card.Header>

  <Card.Content>
    <Form.Root
      schema={formSchema}
      {form}
      let:config
      method="POST"
      action="?/reset-password"
      class="space-y-6"
    >
      <Form.Field {config} name="email">
        <Form.Item>
          <Form.Input type="email" />
          <Form.Label>Email</Form.Label>
          <Form.Validation />
        </Form.Item>
      </Form.Field>

      <Form.Button>Send Instructions To Email</Form.Button>
    </Form.Root>
  </Card.Content>
</Card.Root>

<p class="flex items-center self-center space-x-1 text-sm">
  <span class="text-text-secondary">Remember your password?</span>
  <a href="/login" class="text-sm font-medium underline"> Login </a>
</p>
