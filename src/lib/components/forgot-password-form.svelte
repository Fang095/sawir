<script lang="ts">
  import type { SuperValidated } from 'sveltekit-superforms';

  import { resetPasswordFormSchema, type ResetPasswordFormSchema } from '$lib/schemas';
  import * as Form from '$lib/components/ui/form';

  export let form: SuperValidated<ResetPasswordFormSchema>;
</script>

<Form.Root schema={resetPasswordFormSchema} {form} let:config method="POST" class="space-y-8">
  <Form.Field {config} name="email">
    <Form.Item>
      <Form.Input type="email" />
      <Form.Label>Email</Form.Label>
      <Form.Validation />
    </Form.Item>
  </Form.Field>

  <Form.Button>Send Instructions To Email</Form.Button>
</Form.Root>
