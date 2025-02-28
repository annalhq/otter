import { Container } from '@/src/components/Container';
import { Flex } from '@/src/components/Flex';
import { Link } from '@/src/components/Link';
import { Paragraph } from '@/src/components/Paragraph';
import { SidebarLink } from '@/src/components/SidebarLink';
import { CONTENT, ROUTE_HOME, ROUTE_SIGNIN } from '@/src/constants';
import { createServerClient } from '@/src/utils/supabase/server';
import { UserCircle } from '@phosphor-icons/react/dist/ssr';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Index() {
  const cookieStore = cookies();
  const supabaseClient = createServerClient(cookieStore);
  const {
    data: { session },
  } = await supabaseClient.auth.getSession();

  if (session) {
    redirect(ROUTE_HOME);
  }

  return (
    <Container variant="auth" className="text-center">
      <img
        src="/otter-logo.svg"
        width="90"
        height="90"
        className="mx-auto mt-l"
      />
      <h2 className="mt-s">{CONTENT.appName}</h2>
      <Flex align="center" justify="center" gapX="xs" className="my-s">
        <SidebarLink href={ROUTE_SIGNIN}>
          <UserCircle weight="duotone" width="18" height="18" />
          {CONTENT.signInTitle}
        </SidebarLink>
        {/* <NextLink href={ROUTE_SIGNUP} passHref>
            <SidebarLink>
              <PlusCircledIcon />
              {CONTENT.signUpTitle}
            </SidebarLink>
          </NextLink> */}
      </Flex>

      <article>
        <Paragraph className="mt-m">
          This is a personalised instance of{' '}
          <Link variant="accent" href="https://github.com/mrmartineau/Otter">
            Otter
          </Link>{' '}
          by{' '}
          <Link variant="accent" href="https://annalhq.github.io/">
            Annalhq
          </Link>
        </Paragraph>
      </article>
    </Container>
  );
}
