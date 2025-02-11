import Divider from '@/components/common/Divider';
import Loading from '@/components/common/Loading';
import Accounts from '@/components/main/Accounts';

import { Suspense } from 'react';

export default function Home() {
  return (
    <main>
      <Divider className="my-5" />
      <Suspense fallback={<Loading />}>
        <Accounts />
      </Suspense>
    </main>
  );
}
