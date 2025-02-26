import Link from 'next/link'

import { Button } from '@/components/ui/button'
import ROUTES from '@/constants/routes'

const Custom404 = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-xl">Oops! Page not found</p>
      <p>The page you&apos;re looking for doesn&apos;t exist or has been moved. </p>
     
      <Button
          className="primary-gradient !text-light-900 min-h-[46px] px-4 py-3"
          asChild
        >
          <Link href={ROUTES.HOME}>Return Home</Link>
        </Button>
    </div>
  )
}

export default Custom404