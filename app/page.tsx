import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageSquare, Shield, Zap, Globe, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen gradient-bg text-white overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-500/10 blur-[150px]" />
      </div>

      {/* Navigation */}
      <nav className="glass border-b border-white/5 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">FlashChat</span>
          </div>
          <div className="hidden md:flex gap-8 items-center text-sm font-medium text-gray-400">
            <Link href="#features" className="hover:text-white transition-colors">Features</Link>
            <Link href="#security" className="hover:text-white transition-colors">Security</Link>
            <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
          </div>
          <div className="flex gap-4 items-center">
            <Link href="/auth/login" className="text-sm font-medium hover:text-white transition-colors">Log in</Link>
            <Link href="/auth/signup">
              <Button className="bg-primary hover:bg-primary/90 text-white px-6 rounded-full shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95">
                Join Now
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest uppercase text-primary mb-8 animate-fade-in shadow-xl">
            <Sparkles className="w-3 h-3" />
            <span>Next-Gen Communication</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight animate-slide-up">
            Chat faster, <br />
            <span className="text-primary italic">connect deeper.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Experience the future of messaging with end-to-end encryption, lightning-fast delivery, and a stunning interface designed for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Link href="/chat">
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-10 h-14 rounded-2xl text-lg font-bold shadow-2xl shadow-primary/30 transition-all hover:scale-105 active:scale-95">
                Start Chatting Free
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="w-full sm:w-auto glass border-white/10 text-white px-10 h-14 rounded-2xl text-lg font-bold hover:bg-white/5 transition-all">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="container mx-auto px-6 py-24 border-t border-white/5 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass p-8 rounded-3xl border-white/5 hover:border-primary/30 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Lightning Fast</h3>
            <p className="text-gray-400 leading-relaxed">Messaging with zero lag. Our global infrastructure ensures your chats are delivered instantly.</p>
          </div>
          <div className="glass p-8 rounded-3xl border-white/5 hover:border-primary/30 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Shield className="w-6 h-6 text-purple-500" />
            </div>
            <h3 className="text-xl font-bold mb-4">Ultra Secure</h3>
            <p className="text-gray-400 leading-relaxed">Your privacy is our priority. Every message and call is protected by military-grade encryption.</p>
          </div>
          <div className="glass p-8 rounded-3xl border-white/5 hover:border-primary/30 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Globe className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-4">Connect Anywhere</h3>
            <p className="text-gray-400 leading-relaxed">Available on all devices. Sync your chats across mobile, tablet, and desktop seamlessly.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 bg-black/50">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">FlashChat</span>
          </div>
          <p className="text-gray-500 text-sm mb-8">© 2026 FlashChat Inc. Crafted with ❤️ for modern communication.</p>
          <div className="flex justify-center gap-6 text-gray-500 text-sm">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Status</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

