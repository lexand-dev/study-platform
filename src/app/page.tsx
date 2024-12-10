import { Navbar } from "@/components/navbar";
import { WelcomeSection } from "@/components/welcome-section";
import { ProgressSummary } from "@/components/progress-summary";
import { RecentAssessments } from "@/components/recent-assessments";
import { Notifications } from "@/components/notifications";
import { Chatbot } from "@/components/chatbot";
import { MentoringCommunity } from "@/components/mentoring-community";
import { UpcomingEvents } from "@/components/upcoming-events";
import { RecommendedResources } from "@/components/recommended-resources";
import { QuickActions } from "@/components/quick-actions";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container px-4 py-6 mx-auto">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="md:col-span-2 lg:col-span-3">
            <WelcomeSection />
          </div>
          <div className="lg:col-span-2">
            <ProgressSummary />
          </div>
          <RecentAssessments />
          <Notifications />
          <MentoringCommunity />
          <UpcomingEvents />
          <RecommendedResources />
          <QuickActions />
        </div>
      </main>
      <Chatbot />
    </div>
  );
}
