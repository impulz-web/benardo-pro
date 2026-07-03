import { Navbar } from "@/components/site/navbar";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import PremiumChatWidget from "@/components/site/PremiumChatWidget";

export const metadata = {
  title: "Premium Chat | Benard Mulindi",
  description: "Connect with Benard Mulindi via premium chat",
};

export default function PremiumChatPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="py-20">
        <Container className="max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-foreground mb-4">Premium Chat</h1>
            <p className="text-text max-w-2xl mx-auto">
              Connect with me directly for consultations, collaborations, or any questions you may have.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8">
            <PremiumChatWidget />
            
            <Button 
              href="https://premium.chat/MrCrusher" 
              target="_blank" 
              rel="noopener noreferrer" 
              size="lg" 
              className="text-base"
            >
              Premium Chat
            </Button>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
              <h2 className="text-xl font-semibold text-foreground mb-4">How it works</h2>
              <ul className="text-text space-y-3">
                <li>Click the chat button to start a conversation</li>
                <li>Follow the prompts to select your topic</li>
                <li>Connect with me for personalized support</li>
              </ul>
            </div>
          </div>
        </Container>
      </main>
      
      <footer className="pb-10">
        <Container>
          <p className="text-xs text-text-muted text-center">© {new Date().getFullYear()} Benard Mulindi. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
}