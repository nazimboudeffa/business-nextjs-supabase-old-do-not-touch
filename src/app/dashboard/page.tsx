import Header from '@/components/Header'
import Footer from '@/components/Footer'

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

async function Dashboard () {

  const cookieStore = cookies();

  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const { data } = await supabase.auth.getSession();

  console.log(data.session)

  if (!data?.session) {
    redirect('/');
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();


  return (
    <>
    <div className="min-h-screen flex flex-col justify-between">
    <Header user = {user} />
    <div className="container flex flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold tracking-tight">
            Your dashboard
        </h1>
        <p className="text-sm text-muted-foreground">
            Here you will find your dashboard.
        </p>
    </div>
    <Footer />
    </div>
    </>
  )
}

export default Dashboard