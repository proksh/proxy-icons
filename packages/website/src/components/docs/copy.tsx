'use client';

// import { CheckIcon, CopyIcon } from 'lucide-react';
import { Button } from '@/components/common/button';
import { useState } from 'react';

export default function Copy({ content }: { content: string }) {
  const [isCopied, setIsCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(content);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  return (
    <Button variant="secondary" size="xs" onClick={handleCopy}>
      {isCopied ? <i className="pro-check-line" /> : <i className="pro-copy-line" />}
    </Button>
  );
}
