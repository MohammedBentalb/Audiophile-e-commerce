import SignUpForm from '@/components/authentication/SignUpForm';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

async function RegisterPage() {
  const session = await getServerSession();

  if (session) {
    redirect('/');
  }
  return (
    <>
      <SignUpForm />
    </>
  );
}

export default RegisterPage;
