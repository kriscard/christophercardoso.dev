import Logo from "./Logo"
import Header from "./Header"
import SectionContainer from "./SectionContainer"

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
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
