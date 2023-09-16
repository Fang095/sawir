<script lang="ts">
  import type { SuperValidated } from 'sveltekit-superforms';

  import { formSchema, type FormSchema } from './schema';
  import * as Form from '$lib/components/ui/form';

  export let form: SuperValidated<FormSchema>;
</script>

<Form.Root schema={formSchema} {form} let:config method="POST" class="space-y-8">
  <Form.Field {config} name="email">
    <Form.Item>
      <Form.Input type="email" />
      <Form.Label>email</Form.Label>
      <Form.Validation />
    </Form.Item>
  </Form.Field>

  <Form.Field {config} name="username">
    <Form.Item>
      <Form.Input />
      <Form.Label>Username</Form.Label>
      <Form.Validation />
    </Form.Item>
  </Form.Field>

  <Form.Field {config} name="password">
    <Form.Item>
      <Form.Input type="password" />
      <Form.Label>Password</Form.Label>
      <Form.Validation />
    </Form.Item>
  </Form.Field>

  <Form.Button>Register</Form.Button>
</Form.Root>
