import React from 'react';
import { BlogPost } from '@/types/blog';

export const post: BlogPost = {
  title: "App Update: Improved OCR for Better Receipt Reading | FLICK2SPLIT",
  excerpt: "Our latest update includes major improvements to our optical character recognition system for more accurate bill scanning and faster expense splitting.",
  date: "February 19, 2023",
  imageUrl: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  category: "Updates",
  slug: "improved-ocr",
  author: {
    name: "Chris Nakamura",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  keywords: ["OCR receipt scanning", "receipt reader", "bill scanner app", "optical character recognition", "FLICK2SPLIT update", "receipt accuracy"]
};

const BlogContent: React.FC = () => {
  return (
    <div className="prose prose-invert max-w-none">
      <p>
        At the heart of FLICK2SPLIT is a simple promise: snap a photo of your receipt and let the app handle the rest. Today, we're excited to announce a major upgrade to the technology that makes that promise possible. Our <strong>improved OCR (Optical Character Recognition) system</strong> delivers faster, more accurate receipt scanning than ever before.
      </p>

      <h2 id="what-changed">What's Changed Under the Hood</h2>

      <p>
        Our engineering team has spent the past four months rebuilding our <strong>receipt scanning engine</strong> from the ground up. The previous system worked well for clean, well-lit receipts, but struggled with some of the real-world conditions our users encounter daily: crumpled paper, faded ink, low lighting, and the endlessly creative formatting that restaurants use for their bills.
      </p>

      <p>
        The new system uses an advanced <strong>machine learning model</strong> trained on over 500,000 real receipts from restaurants, bars, cafes, and retail stores across 30 countries. This massive training dataset means our OCR engine has seen virtually every receipt format, font, and layout it's likely to encounter in the wild.
      </p>

      <h2 id="accuracy-improvements">Accuracy by the Numbers</h2>

      <p>
        We don't just want to tell you it's better. We want to show you. Here are the key metrics from our internal testing against a benchmark set of 10,000 receipts:
      </p>

      <ul>
        <li><strong>Item name recognition:</strong> Improved from 87% to 96% accuracy, meaning nearly every dish and drink is correctly identified.</li>
        <li><strong>Price extraction:</strong> Improved from 91% to 98.5% accuracy. Getting the numbers right is critical, and our new engine virtually eliminates price misreads.</li>
        <li><strong>Tax and tip detection:</strong> Improved from 82% to 94% accuracy. The system now reliably identifies tax lines, service charges, and suggested tip amounts.</li>
        <li><strong>Processing speed:</strong> Average scan time reduced from 4.2 seconds to 1.8 seconds. You'll see results almost instantly after taking the photo.</li>
      </ul>

      <p>
        These improvements translate directly into a better experience. Fewer manual corrections mean faster splitting, and faster splitting means less time staring at your phone and more time enjoying your evening.
      </p>

      <h2 id="challenging-receipts">Handling Challenging Receipts</h2>

      <p>
        The real test of a <strong>receipt scanning system</strong> isn't how it handles perfect receipts. It's how it performs when conditions are less than ideal. Here's where our new OCR engine really shines:
      </p>

      <h3 id="low-light-scanning">Low-Light Environments</h3>

      <p>
        Restaurants are often dimly lit, which makes taking a clear photo of a receipt challenging. Our new system includes <strong>enhanced image preprocessing</strong> that automatically adjusts for low light conditions. It boosts contrast, reduces noise, and sharpens text before the OCR engine even starts reading. In our tests, low-light accuracy improved by 34% compared to the previous version.
      </p>

      <h3 id="crumpled-receipts">Crumpled and Folded Receipts</h3>

      <p>
        We've all shoved a receipt into a pocket or bag, only to pull out a wrinkled mess later. The new engine uses <strong>geometric correction algorithms</strong> that flatten the image digitally, accounting for folds, creases, and curves. Even a moderately crumpled receipt now scans with over 90% accuracy.
      </p>

      <h3 id="faded-thermal-paper">Faded Thermal Paper</h3>

      <p>
        Thermal paper receipts fade over time, sometimes within hours of printing. Our updated system is specifically optimized to read <strong>faded thermal prints</strong>, using adaptive thresholding that can detect text even when it's barely visible to the human eye. If you can read it, FLICK2SPLIT can read it, and often even when you can't.
      </p>

      <h3 id="international-formats">International Receipt Formats</h3>

      <p>
        Receipts look different around the world. European receipts often include VAT breakdowns, Asian receipts may use different character sets alongside numbers, and American receipts have their own conventions for tax and tip. Our new engine is trained on <strong>international receipt formats</strong> from over 30 countries, so it handles these variations seamlessly.
      </p>

      <h2 id="smart-item-grouping">Smart Item Grouping</h2>

      <p>
        Beyond just reading text more accurately, the improved OCR includes an intelligent <strong>item grouping feature</strong>. The system now understands the structure of receipts, recognizing which lines are items, which are modifiers (like "add avocado" or "extra cheese"), and which are subtotals or tax lines.
      </p>

      <p>
        This means that when you scan a receipt that lists "Burger - $15" followed by "Add Bacon - $2" and "Sub Fries for Salad - $1," the app correctly groups these as a single $18 item rather than three separate entries. This structural understanding makes the <strong>item assignment process</strong> much smoother and more intuitive.
      </p>

      <h2 id="supported-receipt-types">Expanded Supported Receipt Types</h2>

      <p>
        The updated OCR engine now supports an expanded range of <strong>receipt types and formats</strong>:
      </p>

      <ul>
        <li><strong>Standard restaurant receipts</strong> with itemized food and drinks</li>
        <li><strong>Bar tabs</strong> with running totals and multiple rounds</li>
        <li><strong>Delivery app receipts</strong> from services like Uber Eats, DoorDash, and Deliveroo</li>
        <li><strong>Grocery store receipts</strong> for shared household shopping</li>
        <li><strong>Hotel bills</strong> with room charges, minibar items, and service fees</li>
        <li><strong>Digital receipts</strong> displayed on screens, simply photograph your phone or tablet screen</li>
      </ul>

      <h2 id="manual-override">Easy Manual Override</h2>

      <p>
        Even with 98.5% price accuracy, we know perfection isn't always possible. That's why we've also improved the <strong>manual correction interface</strong>. If the OCR misreads an item, you can tap on it to edit with a streamlined inline editor. The app highlights any items it's less confident about, making it easy to spot-check the scan results before splitting.
      </p>

      <p>
        We've also added a <strong>confirmation step</strong> that shows you the scanned total alongside the receipt total, so you can verify everything matches before proceeding. If there's a discrepancy, the app highlights it and suggests where the difference might be.
      </p>

      <h2 id="how-to-get-best-results">Tips for the Best Scanning Results</h2>

      <p>
        While our new OCR handles far more challenging conditions than before, here are a few tips to get the <strong>best receipt scanning results</strong>:
      </p>

      <ul>
        <li><strong>Flatten the receipt</strong> as much as possible before photographing it.</li>
        <li><strong>Ensure the entire receipt</strong> is within the frame, including totals at the bottom.</li>
        <li><strong>Use your phone's flash</strong> if the lighting is poor, our preprocessing handles flash glare well.</li>
        <li><strong>Hold your phone parallel</strong> to the receipt to minimize perspective distortion.</li>
      </ul>

      <h2 id="available-now">Available Now</h2>

      <p>
        The <strong>improved OCR engine</strong> is rolling out today to all FLICK2SPLIT users. The update is automatic, so there's nothing you need to do. Simply open the app, scan a receipt, and experience the difference. We're confident this update will make your <strong>bill splitting experience</strong> smoother and faster than ever.
      </p>

      <p>
        As always, we're committed to continuously improving FLICK2SPLIT based on your feedback. If you encounter a receipt that gives the new system trouble, you can report it directly from the app, and our team will use it to make future improvements.
      </p>

      <h3>Experience the new receipt scanner</h3>
      <p>Update FLICK2SPLIT and try scanning your next receipt. You'll notice the difference immediately.</p>
    </div>
  );
};

export default BlogContent;