<script lang="ts">
  import { Lock } from 'lucide-svelte';

  import * as Card from '$lib/components/ui/card';
  import { AuthIcon } from '$lib/components/auth';
  import { ResetPasswordForm } from '$lib/components/forms';

  export let data;
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
    <ResetPasswordForm form={data.form} />
  </Card.Content>
</Card.Root>

<p class="flex items-center self-center space-x-1 text-sm">
  <span class="text-text-secondary">Remember your password?</span>
  <a href="/login" class="text-sm font-medium underline"> Login </a>
</p>
