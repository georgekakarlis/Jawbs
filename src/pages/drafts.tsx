import AccessDenied from '@/components/access-denied';
import DraftsPage from '@/components/Drafts/DraftsPage';
import Layout from '@/components/Layout';
import { useSession } from 'next-auth/react';




const Drafts = () => {
    const { data: session } = useSession();
  
    // If no session exists, display access denied message
    if (!session) {
      return (
        <Layout>
          <AccessDenied />
        </Layout>
      );
    }
    // If session exists, display content
    return (
      <Layout>
        <DraftsPage />
      </Layout>
  )
}

export default Drafts