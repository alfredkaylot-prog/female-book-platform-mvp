"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { books } from "@/lib/books";

// Sample book content (replace with actual content when available)
const sampleContent = {
  1: {
    title: "The Elegant Life",
    author: "Jane Doe",
    content: `
# Chapter 1: The Art of Grace

In a world that often demands we rush through life, there is profound beauty in embracing elegance. The elegant life is not about perfection, but about presence—being fully engaged in each moment with poise and intention.

## The Foundation of Elegance

Elegance begins with self-awareness. It requires us to understand our values, our strengths, and our areas for growth. When we know ourselves deeply, we can move through the world with confidence and authenticity.

### Key Principles:

1. **Mindful Presence**: Being fully present in each interaction
2. **Authentic Expression**: Honoring your true self
3. **Gracious Communication**: Speaking with kindness and clarity
4. **Purposeful Action**: Moving through life with intention

## Cultivating Inner Grace

Inner grace is the cornerstone of an elegant life. It involves:

- **Self-Compassion**: Treating yourself with the same kindness you extend to others
- **Emotional Intelligence**: Understanding and managing your emotions effectively
- **Resilient Spirit**: Bouncing back from challenges with dignity

> "Elegance is the only beauty that never fades." - Audrey Hepburn

This chapter explores how to cultivate these qualities in your daily life, creating a foundation for lasting fulfillment and joy.

## Practical Exercises

1. **Morning Reflection**: Spend 5 minutes each morning reflecting on three things you're grateful for
2. **Mindful Breathing**: Practice deep breathing exercises to center yourself
3. **Gratitude Journal**: Write down three positive experiences each evening

Remember, elegance is not a destination but a journey. Each day offers new opportunities to practice grace and poise in your interactions with the world.
    `,
    totalPages: 15
  },
  2: {
    title: "Empowered Women",
    author: "Mary Smith",
    content: `
# Chapter 1: The Power Within

Every woman possesses an incredible reservoir of strength, wisdom, and capability. Yet too often, we underestimate our own power and potential. This chapter explores the journey of self-discovery and empowerment that leads to true liberation.

## Recognizing Your Inner Strength

The first step toward empowerment is recognizing the strength that already exists within you. This strength has carried you through every challenge, every triumph, and every moment of your life.

### Signs of Inner Strength:

- **Resilience**: Your ability to recover from setbacks
- **Intuition**: Your inner guidance system
- **Creativity**: Your unique way of solving problems
- **Compassion**: Your capacity for empathy and understanding

## Breaking Through Limiting Beliefs

Many women hold unconscious beliefs that limit their potential. These beliefs often stem from societal expectations, past experiences, or internalized stereotypes.

### Common Limiting Beliefs:

1. "I'm not good enough"
2. "I don't deserve success"
3. "I'm too old/young to change"
4. "I need to choose between career and family"

## Building Confidence

Confidence is not something you have or don't have—it's something you practice and cultivate. Here are practical ways to build lasting confidence:

### Daily Practices:

- **Affirmations**: Use positive statements to rewire your mindset
- **Skill Building**: Continuously learn and develop new abilities
- **Celebrate Wins**: Acknowledge your achievements, no matter how small
- **Support Network**: Surround yourself with encouraging people

> "You are more powerful than you know; you are beautiful just as you are." - Melissa Etheridge

## The Empowerment Journey

Empowerment is not a destination but an ongoing process of growth and self-discovery. It requires courage, commitment, and compassion for yourself and others.

### Key Stages:

1. **Awareness**: Recognizing areas for growth
2. **Action**: Taking steps toward change
3. **Integration**: Making new behaviors habitual
4. **Inspiration**: Sharing your journey with others

Remember, your empowerment benefits not just you, but everyone around you. When women step into their power, they create ripple effects that inspire change in their communities and beyond.
    `,
    totalPages: 12
  },
  3: {
    title: "She Leads",
    author: "Aisha Brown",
    content: `
# Chapter 1: The Leadership Within

Leadership is not a position or title—it's a way of being. Every woman has the capacity to lead, whether in her family, community, workplace, or personal life. This chapter explores the unique qualities of feminine leadership and how to cultivate them.

## Redefining Leadership

Traditional models of leadership often emphasize hierarchy, competition, and control. Feminine leadership offers a different paradigm—one rooted in collaboration, empathy, and sustainable growth.

### Feminine Leadership Qualities:

- **Empathy**: Understanding and connecting with others' experiences
- **Collaboration**: Building partnerships rather than competing
- **Intuition**: Trusting inner wisdom alongside analytical thinking
- **Nurturing**: Supporting growth in yourself and others
- **Holistic Vision**: Seeing the interconnectedness of all things

## The Courage to Lead

Leading requires courage—the courage to speak your truth, challenge the status quo, and stand up for what you believe in. This courage is not the absence of fear, but the willingness to act despite fear.

### Cultivating Courage:

1. **Know Your Values**: Clarify what matters most to you
2. **Practice Vulnerability**: Share your authentic self
3. **Take Small Risks**: Build confidence through gradual challenges
4. **Seek Support**: Surround yourself with encouraging allies

## Leading with Heart and Mind

Effective leadership integrates both heart (empathy, intuition) and mind (strategy, analysis). This balanced approach creates sustainable, meaningful change.

### Heart-Centered Leadership:

- **Active Listening**: Truly hearing what others are saying
- **Emotional Intelligence**: Managing your emotions and reading others'
- **Inclusive Decision-Making**: Considering diverse perspectives
- **Compassionate Accountability**: Holding others responsible with kindness

### Mind-Centered Leadership:

- **Strategic Thinking**: Planning for long-term impact
- **Systems Awareness**: Understanding how different parts interconnect
- **Data-Informed Decisions**: Using information to guide choices
- **Innovation**: Finding creative solutions to complex problems

> "The most powerful leadership tool you have is your own personal example." - John Wooden

## Creating Lasting Change

Leadership is about creating positive change that endures beyond your individual efforts. Focus on building systems, developing others, and fostering environments where everyone can thrive.

### Leadership Legacy:

- **Mentorship**: Guide the next generation of leaders
- **Institutional Change**: Work to transform systems and structures
- **Cultural Shift**: Contribute to broader societal change
- **Personal Growth**: Continue your own development journey

Remember, you don't need permission to lead. Your voice, your vision, and your actions have the power to create meaningful change in the world. Step into your leadership with confidence and grace.
    `,
    totalPages: 18
  },
  4: {
    title: "Inspiring Stories",
    author: "Linda Kofi",
    content: `
# Chapter 1: The Power of Story

Stories have the power to transform lives, bridge divides, and inspire action. Every woman has a story worth telling—a story of struggle, triumph, growth, and hope. This chapter explores how to harness the power of storytelling for personal and collective empowerment.

## Your Story Matters

Your experiences, challenges, and victories are not just personal—they have the potential to inspire and guide others. Your story is a unique contribution to the tapestry of human experience.

### Elements of a Powerful Story:

- **Authenticity**: Being honest about your journey
- **Vulnerability**: Sharing your struggles and fears
- **Resilience**: Demonstrating strength in the face of adversity
- **Hope**: Offering inspiration and possibility
- **Connection**: Finding common ground with others

## Crafting Your Narrative

Every story has a structure that makes it compelling and memorable. Understanding this structure helps you share your experiences more effectively.

### Story Structure:

1. **Beginning**: Set the scene and introduce the challenge
2. **Middle**: Explore the struggle and growth process
3. **End**: Share the resolution and lessons learned

## The Art of Storytelling

Effective storytelling combines content with delivery. The way you tell your story can be as important as the story itself.

### Storytelling Techniques:

- **Sensory Details**: Paint vivid pictures with sights, sounds, smells
- **Emotional Connection**: Help listeners feel what you felt
- **Pacing**: Build tension and release it appropriately
- **Authentic Voice**: Speak in your natural, genuine tone

## Stories of Empowerment

Throughout history, women's stories have driven social change and inspired movements. Your story is part of this powerful tradition.

### Types of Empowering Stories:

- **Overcoming Adversity**: Stories of resilience and triumph
- **Breaking Barriers**: Tales of challenging norms and expectations
- **Personal Growth**: Journeys of self-discovery and transformation
- **Community Impact**: Stories of collective action and change

> "The world changes according to the way people see it, and if you can alter, even by a millimeter, the way people look at reality, you can change the world." - James Baldwin

## Sharing Your Story

Once you've crafted your story, consider how and where to share it. Different platforms and audiences require different approaches.

### Sharing Strategies:

1. **Personal Conversations**: Share with trusted friends and family
2. **Writing**: Journal, blog, or publish your story
3. **Speaking**: Present at events or through media
4. **Digital Platforms**: Use social media, podcasts, or videos

## The Ripple Effect

When you share your story authentically, it creates ripples that extend far beyond your immediate audience. Your courage inspires others to share their stories, creating a wave of empowerment and connection.

### Impact Areas:

- **Personal Healing**: Processing your experiences through storytelling
- **Community Building**: Creating connections with others
- **Social Change**: Challenging harmful narratives and stereotypes
- **Cultural Shift**: Contributing to broader conversations about women's experiences

Remember, your story has power. It has the ability to heal, inspire, and transform. Share it boldly and watch the ripples spread.
    `,
    totalPages: 14
  }
};

export default function ReadPage({
  params,
}: {
  params: { id: string };
}) {
  const { data: session } = useSession();
  const [currentPage, setCurrentPage] = useState(1);
  const [fontSize, setFontSize] = useState(16);
  const [readingProgress, setReadingProgress] = useState(0);

  const bookId = parseInt(params.id);
  const book = books.find((b) => b.id === bookId);
  const content = sampleContent[bookId as keyof typeof sampleContent];

  useEffect(() => {
    if (!session) {
      redirect(`/login?callbackUrl=/read/${params.id}`);
    }
  }, [session, params.id]);

  useEffect(() => {
    // Save reading progress to localStorage
    const progressKey = `reading-progress-${bookId}`;
    const savedProgress = localStorage.getItem(progressKey);
    if (savedProgress) {
      setCurrentPage(parseInt(savedProgress));
    }

    // Add to reading history
    const history = JSON.parse(localStorage.getItem('reading-history') || '[]');
    const historyEntry = {
      id: bookId,
      title: book?.title,
      lastRead: new Date().toISOString(),
      progress: currentPage
    };

    const existingIndex = history.findIndex((item: any) => item.id === bookId);
    if (existingIndex >= 0) {
      history[existingIndex] = historyEntry;
    } else {
      history.unshift(historyEntry);
    }

    localStorage.setItem('reading-history', JSON.stringify(history.slice(0, 10))); // Keep last 10
  }, [bookId, currentPage, book?.title]);

  useEffect(() => {
    // Update progress
    if (content) {
      setReadingProgress((currentPage / content.totalPages) * 100);
    }
  }, [currentPage, content]);

  if (!session) {
    return <div>Redirecting to login...</div>;
  }

  if (!book || !content) {
    return (
      <main className="p-6 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Book Not Found</h1>
        <p>The requested book is not available.</p>
        <Link href="/books" className="inline-block mt-4 px-4 py-2 rounded" style={{ backgroundColor: 'var(--primary-color)', color: 'var(--white)' }}>
          Back to Books
        </Link>
      </main>
    );
  }

  const nextPage = () => {
    if (currentPage < content.totalPages) {
      setCurrentPage(currentPage + 1);
      localStorage.setItem(`reading-progress-${bookId}`, (currentPage + 1).toString());
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      localStorage.setItem(`reading-progress-${bookId}`, (currentPage - 1).toString());
    }
  };

  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--background-color)' }}>
      {/* Header */}
      <div className="sticky top-0 z-10 p-4 border-b" style={{ backgroundColor: 'var(--white)', borderColor: 'var(--border-color)' }}>
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold" style={{ color: 'var(--text-color)' }}>{content.title}</h1>
            <p className="text-sm" style={{ color: 'var(--primary-color)' }}>by {content.author}</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/books" className="px-3 py-1 rounded text-sm" style={{ backgroundColor: 'var(--primary-color)', color: 'var(--white)' }}>
              ← Books
            </Link>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="max-w-3xl mx-auto mt-2">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="h-2 rounded-full transition-all duration-300"
              style={{ width: `${readingProgress}%`, backgroundColor: 'var(--primary-color)' }}
            ></div>
          </div>
          <div className="text-xs text-center mt-1" style={{ color: 'var(--text-color)' }}>
            Page {currentPage} of {content.totalPages} ({Math.round(readingProgress)}% complete)
          </div>
        </div>
      </div>

      {/* Reading Controls */}
      <div className="max-w-3xl mx-auto p-4 flex justify-between items-center">
        <div className="flex gap-2">
          <button
            onClick={() => setFontSize(Math.max(12, fontSize - 2))}
            className="px-3 py-1 rounded text-sm"
            style={{ backgroundColor: 'var(--light-gray)', color: 'var(--text-color)' }}
          >
            A-
          </button>
          <button
            onClick={() => setFontSize(Math.min(24, fontSize + 2))}
            className="px-3 py-1 rounded text-sm"
            style={{ backgroundColor: 'var(--light-gray)', color: 'var(--text-color)' }}
          >
            A+
          </button>
        </div>
        <div className="text-sm" style={{ color: 'var(--text-color)' }}>
          Font Size: {fontSize}px
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto p-6">
        <div
          className="prose prose-lg max-w-none"
          style={{
            fontSize: `${fontSize}px`,
            lineHeight: '1.6',
            color: 'var(--text-color)'
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: content.content.replace(/\n/g, '<br/>').replace(/^# (.+)$/gm, '<h1>$1</h1>').replace(/^## (.+)$/gm, '<h2>$2</h2>').replace(/^### (.+)$/gm, '<h3>$3</h3>').replace(/> (.+)$/gm, '<blockquote>$1</blockquote>') }} />
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-3xl mx-auto p-4 flex justify-between">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-6 py-3 rounded disabled:opacity-50"
          style={{ backgroundColor: 'var(--primary-color)', color: 'var(--white)' }}
        >
          ← Previous Page
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === content.totalPages}
          className="px-6 py-3 rounded disabled:opacity-50"
          style={{ backgroundColor: 'var(--primary-color)', color: 'var(--white)' }}
        >
          Next Page →
        </button>
      </div>

      {/* Footer */}
      <div className="max-w-3xl mx-auto p-4 text-center text-sm" style={{ color: 'var(--text-color)', opacity: 0.7 }}>
        <p>📖 Enjoy your reading experience! This is sample content. Replace with actual book content when available.</p>
      </div>
    </main>
  );
}
