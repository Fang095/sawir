<script lang="ts">
  import type { SuperValidated } from 'sveltekit-superforms';

  import { loginFormSchema, type LoginFormSchema } from '$lib/schemas';
  import * as Form from '$lib/components/ui/form';

  export let form: SuperValidated<LoginFormSchema>;
</script>

<Form.Root schema={loginFormSchema} {form} let:config method="POST" class="space-y-8">
  <Form.Field {config} name="username">
    <Form.Item>
      <Form.Input />
      <Form.Validation />
      <Form.Label>Username</Form.Label>
    </Form.Item>
  </Form.Field>

  <Form.Field {config} name="password">
    <Form.Item>
      <Form.Input type="password" />
      <Form.Label>Password</Form.Label>
      <Form.Validation />
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
