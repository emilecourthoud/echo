import { X, Copy, Check } from 'lucide-react';
import { Button } from './button';
import { useEffect, useState } from 'react';

interface GuidelinesPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

function SectionTitle({ title }: { title: string }) {
  return <h4 className="text-md font-medium mb-2">{title}</h4>;
}

function SectionParagraph({ text }: { text: string }) {
  return <p className=" text-text-secondary mb-2">{text}</p>;
}

function CopyableCode({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <div className="bg-bg-secondary dark:bg-bg-primary p-3 rounded-md border border-border-secondary dark:border-border-primary">
        <code className="text-sm">{code}</code>
      </div>
      <Button
        variant="ghost"
        size="sm"
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={handleCopy}
      >
        {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      </Button>
    </div>
  );
}

export function GuidelinesPanel({ isOpen, onClose }: GuidelinesPanelProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-y-0 right-0 w-full md:w-120 bg-white dark:bg-bg-primary shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="h-full flex flex-col">
        <div className="p-4 border-b border-border-secondary dark:border-border-primary flex justify-between items-center">
          <h3 className="text-lg font-semibold">How to write good instructions</h3>
          <Button size="icon" variant="ghost" onClick={onClose}>
            <X className="size-5" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          <section>
            <SectionTitle title="1. Be Specific and Clear" />
            <SectionParagraph text="Clearly define what you want the agent to do. The more specific your instructions, the better the results." />
            <CopyableCode code="Help me schedule a meeting with John for next Tuesday at 2 PM to discuss the Q2 project timeline." />
          </section>

          <section>
            <SectionTitle title="2. Provide Context" />
            <SectionParagraph text="Give relevant background information to help the agent understand the situation better." />
            <CopyableCode code="I'm working on a marketing campaign for our new product launch. The target audience is tech-savvy professionals aged 25-35. Help me draft an email sequence." />
          </section>

          <section>
            <SectionTitle title="3. Set Clear Boundaries" />
            <SectionParagraph text="Define what the agent should and shouldn't do to avoid misunderstandings." />
            <CopyableCode code="Please help me draft a response to this customer complaint. Do not make any promises about refunds or discounts, but acknowledge their frustration and offer to investigate the issue." />
          </section>

          <section>
            <SectionTitle title="4. Use Step-by-Step Instructions" />
            <SectionParagraph text="Break down complex tasks into smaller, manageable steps." />
            <CopyableCode code="1. Review the attached document\n2. Identify key points\n3. Create a summary\n4. Highlight any action items" />
          </section>

          <section>
            <SectionTitle title="5. Specify the Tone and Style" />
            <SectionParagraph text="Indicate the desired tone and style of communication." />
            <CopyableCode code="Write a friendly, conversational email to welcome new team members. Keep it professional but warm, and include information about our company culture." />
          </section>
        </div>
      </div>
    </div>
  );
}
