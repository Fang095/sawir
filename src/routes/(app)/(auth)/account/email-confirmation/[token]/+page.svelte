<script lang="ts">
  import { MailCheck } from 'lucide-svelte';

  import * as Card from '$lib/components/ui/card';
  import { AuthIcon } from '$lib/components';
  import { Button } from '$lib/components/ui/button';
</script>

<Card.Root class="pt-10 pb-6 space-y-8">
  <Card.Header class="space-y-4">
    <AuthIcon>
      <MailCheck />
    </AuthIcon>

    <div class="flex flex-col items-center justify-center space-y-2">
      <Card.Title tag="h2" class="text-xl font-medium">Email Confirmed Successfully</Card.Title>

      <Card.Description class="text-sm text-center text-text-secondary">
        Your email address has been successfully confirmed. You can now log in to your account using
        the link below.
      </Card.Description>
    </div>
  </Card.Header>

  <Card.Content>
    <Button href="/login" variant="outline" class="w-full">Login</Button>
  </Card.Content>
</Card.Root>
