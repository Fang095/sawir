<script lang="ts">
  import type { SuperValidated } from 'sveltekit-superforms';

  import { type ChangePasswordFormSchema, changePasswordFormSchema } from '$lib/schemas';
  import * as Form from '$lib/components/ui/form';

  export let form: SuperValidated<ChangePasswordFormSchema>;
</script>

<Form.Root schema={changePasswordFormSchema} {form} let:config method="POST" class="space-y-6">
  <Form.Field {config} name="password">
    <Form.Item>
      <Form.Input type="password" />
      <Form.Label>Password</Form.Label>
      <Form.Validation />
    </Form.Item>
  </Form.Field>

  <Form.Field {config} name="confirmPassword">
    <Form.Item>
      <Form.Input type="password" />
      <Form.Label>Confirm Password</Form.Label>
      <Form.Validation />
    </Form.Item>
  </Form.Field>

  <Form.Button>Confirm New Password</Form.Button>
</Form.Root>
