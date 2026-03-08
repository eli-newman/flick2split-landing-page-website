import React from 'react';
import { BlogPost } from '@/types/blog';

export const post: BlogPost = {
  title: "New Feature: Split by Percentage | FLICK2SPLIT Update",
  excerpt: "We're excited to announce our new feature that allows you to split bills by custom percentages. Perfect for roommates with different sized rooms!",
  date: "March 22, 2023",
  imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  category: "Features",
  slug: "split-by-percentage",
  author: {
    name: "Alex Johnson",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  keywords: ["split by percentage", "percentage bill splitting", "custom split", "roommate expenses", "FLICK2SPLIT features", "bill splitting app"]
};

const BlogContent: React.FC = () => {
  return (
    <div className="prose prose-invert max-w-none">
      <p>
        We've been listening to your feedback, and today we're thrilled to announce one of our most requested features: <strong>Split by Percentage</strong>. This powerful new addition to FLICK2SPLIT gives you complete flexibility in how you divide expenses with your group, going far beyond simple equal splits.
      </p>

      <h2 id="why-percentage-splitting">Why We Built Percentage-Based Splitting</h2>

      <p>
        Equal splitting works great for many situations, but real life is rarely perfectly equal. Since launching FLICK2SPLIT, we've heard from thousands of users who needed more flexibility in how they <strong>divide shared expenses</strong>. The scenarios were varied, but the need was universal: sometimes a fair split isn't an equal one.
      </p>

      <p>
        Consider a common situation among roommates. Three friends share an apartment, but one has the master bedroom with an ensuite bathroom, another has a medium room, and the third has a smaller room. Splitting rent equally doesn't feel fair when the living spaces are so different. With <strong>percentage-based splitting</strong>, they can divide rent 40/35/25, reflecting the actual value each person gets from their space.
      </p>

      <p>
        Or think about a group dinner where one friend is on a tight budget and orders modestly while others go all out. Rather than splitting evenly or doing the awkward line-by-line itemization, a quick percentage adjustment can make everyone feel the split is fair.
      </p>

      <h2 id="how-it-works">How Split by Percentage Works</h2>

      <p>
        We've designed this feature to be as intuitive as everything else in FLICK2SPLIT. Here's how to use <strong>percentage splitting</strong> in just a few taps:
      </p>

      <ul>
        <li><strong>Step 1:</strong> Scan your receipt or enter the total amount as you normally would.</li>
        <li><strong>Step 2:</strong> Instead of selecting "Split Equally," tap the new "Split by Percentage" option.</li>
        <li><strong>Step 3:</strong> Adjust the percentage slider for each person in your group. The app ensures all percentages add up to 100%.</li>
        <li><strong>Step 4:</strong> Review the calculated amounts and confirm. Each person sees exactly what they owe.</li>
      </ul>

      <p>
        The app includes a real-time balance indicator that shows you when your percentages total 100%. If you're over or under, FLICK2SPLIT highlights the discrepancy so you can adjust before finalizing the split.
      </p>

      <h2 id="use-cases">Real-World Use Cases for Percentage Splitting</h2>

      <p>
        Our beta testers discovered a wide range of scenarios where <strong>percentage-based bill splitting</strong> is the perfect solution. Here are some of the most popular use cases:
      </p>

      <h3 id="roommate-utilities">Roommates Splitting Utilities</h3>

      <p>
        Beyond rent, roommates can use percentage splits for utilities. If one person works from home and uses more electricity, or if someone has a space heater running all winter, adjusting the utility split by percentage feels fairer than dividing everything equally. You can even save your preferred percentage split as a template, so you don't have to set it up each month.
      </p>

      <h3 id="income-based-splitting">Income-Based Splitting Among Friends</h3>

      <p>
        In friend groups where there are significant <strong>income differences</strong>, percentage splitting allows everyone to participate in group activities without financial strain. A group of friends might agree that the higher earners cover 30% each while others cover 20%. This approach keeps the group together without putting anyone in an uncomfortable position.
      </p>

      <h3 id="dietary-restrictions">Accommodating Dietary Restrictions</h3>

      <p>
        Group dinners often include friends with different dietary needs and spending patterns. The vegetarian who ordered a $12 salad shouldn't pay the same as someone who had a $45 steak and two cocktails. With <strong>percentage splitting</strong>, you can quickly approximate a fair division without the tedious process of itemizing every single dish.
      </p>

      <h3 id="couples-in-groups">Couples Within Larger Groups</h3>

      <p>
        When couples join a group outing, the math can get complicated. Should a couple pay 50% of a four-person dinner? Or should each person, regardless of relationship status, pay 25%? Percentage splitting gives you the flexibility to decide what works best for your specific group dynamic.
      </p>

      <h2 id="saved-templates">Save Your Favorite Splits as Templates</h2>

      <p>
        One of the most powerful features of our <strong>percentage splitting tool</strong> is the ability to save custom split ratios as templates. If you and your roommates always split rent the same way, you can save that configuration and apply it with a single tap each month.
      </p>

      <p>
        Templates work for any recurring expense scenario. Weekly dinner with the same group? Monthly utilities? Shared subscription services? Set it once, reuse it forever. This saves time and eliminates the need to recalculate or remember specific percentages.
      </p>

      <h2 id="smart-suggestions">Smart Percentage Suggestions</h2>

      <p>
        We've also built in <strong>smart suggestions</strong> to make the process even faster. When you're setting up a percentage split, FLICK2SPLIT can suggest common ratios based on the number of people in your group. For two people, it might suggest 60/40 or 70/30. For three people, options like 40/35/25 or 50/30/20 appear as quick presets.
      </p>

      <p>
        These suggestions are based on analysis of the most commonly used split ratios among our users. Of course, you can always customize to any ratio you prefer. The suggestions are simply there to speed things up for common scenarios.
      </p>

      <h2 id="combining-split-methods">Combining Split Methods</h2>

      <p>
        The <strong>Split by Percentage</strong> feature works alongside our existing splitting methods. You can still split equally, split by item, or use a combination of approaches. For example, you might assign specific items to specific people and then split the shared appetizers by percentage. FLICK2SPLIT handles all the math seamlessly.
      </p>

      <p>
        This flexibility means you always have the right tool for the situation, whether it's a simple coffee run or a complex multi-course dinner with a dozen friends.
      </p>

      <h2 id="getting-started">Getting Started with Percentage Splitting</h2>

      <p>
        The <strong>Split by Percentage</strong> feature is available now in the latest version of FLICK2SPLIT. Simply update your app to access this new functionality. The feature is available on both iOS and Android and is completely free for all users.
      </p>

      <p>
        We built this feature because we believe that <strong>fair bill splitting</strong> shouldn't be limited to equal splits. Every group has its own dynamics, and your bill splitting app should be flexible enough to accommodate them. With percentage splitting, FLICK2SPLIT gives you the power to define fairness on your own terms.
      </p>

      <h3>Try Split by Percentage today!</h3>
      <p>Update FLICK2SPLIT to the latest version and discover a smarter way to divide expenses with your group.</p>
    </div>
  );
};

export default BlogContent;