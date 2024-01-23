import SignInForm from '@/components/authentication/SignInForm';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

async function LogInPage() {
  const session = await getServerSession();

  if (session) {
    redirect('/');
  }

  return <SignInForm />;
}

export default LogInPage;
