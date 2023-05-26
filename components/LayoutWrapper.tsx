import { type ReactNode } from 'react'

import Header from '@components/Header'
import SectionContainer from '@components/SectionContainer'

function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <Header />
        <main className="flex-1">{children}</main>
        {/* <Footer /> */}
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
