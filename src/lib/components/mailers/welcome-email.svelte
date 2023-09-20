<script lang="ts">
  import { Container, Head, Heading, Hr, Html, Img, Link, Section, Text } from 'svelte-email';

  const section = {
    backgroundColor: '#ffffff'
  };

  const container = {
    margin: '0 auto',
    padding: '20px',
    width: '580px',
    border: '1px solid rgba(229, 229, 229, .75)'
  };

  const fontFamily =
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';

  const heading = {
    fontFamily,
    fontSize: '20px',
    lineHeight: '1.3',
    fontWeight: '700',
    color: '#484848'
  };

  const paragraph = {
    fontFamily,
    fontSize: '18px',
    lineHeight: '1.4',
    color: '#484848'
  };

  const hr = {
    borderColor: 'rgb(229, 229, 229)',
    margin: '20px 0'
  };

  const linkButton = {
    display: 'inline-block',
    padding: '10px 23px',
    margin: '12px 0',
    color: 'rgb(255, 255, 255)',
    background: 'rgb(34, 197, 94)',
    borderRadius: ' 4px',
    fontSize: '15px',
    fontWeight: '600',
    textDecoration: 'none',
    cursor: 'pointer'
  };

  const link = {
    color: '#2563eb',
    textDecoration: 'underline'
  };

  const muted = {
    color: 'grey'
  };
</script>

<Html lang="">
  <Head />
  <Section style={section}>
    <Container style={container}>
      <Img
        src="https://ucarecdn.com/d7da0185-618f-42ec-a267-a97a8eeff81f/"
        alt="Sawir logo"
        width="45"
        height="45"
      />
      <p style="margin-top: 0px;">&nbsp;</p>

      <Heading style={heading}>Welcome to Sawir!</Heading>

      <Hr style={hr} />

      <Text style={paragraph}>
        We're excited to have you on board. Your registration was successful, and now it's time to
        dive into the world of Sawir. To get started, simply click the button below to sign in with
        your newly created account:
      </Text>

      <Link href="http://localhost:5173/login" style={linkButton}>Login To Sawir</Link>

      <Text style={muted}>
        Still need help?
        <Link href="mailto:support@sawir.com" style={link}>Contact our support team</Link>
      </Text>
    </Container>
  </Section>
</Html>
