import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { WebsiteCreation } from "@/components/website-creation"
import { CaseStudies } from "@/components/case-studies"
import { Services } from "@/components/services"
import { SmartMarketing } from "@/components/smart-marketing"
import { BlogPosts } from "@/components/blog-posts"
import { Footer } from "@/components/footer"
import { Quotes } from "@/components/quotes"

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <WebsiteCreation />
      <CaseStudies />
      <Services />
      <SmartMarketing />
      <Quotes />
      <BlogPosts />
      <Footer />
    </main>
  )
}

