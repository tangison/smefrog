import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SearchOverlay } from "@/components/search-overlay";
import { FrogAIChat } from "@/components/frogai-chat";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-frog-black text-frog-light">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
      <SearchOverlay />
      <FrogAIChat />
    </>
  )
}
