import { useEffect, useState } from 'react';
export interface TopicButtonProps {
  name: string;
  onClick?: (name: string) => void;
}

export function TopicButton({ name, onClick }: TopicButtonProps) {
  const [icon, setIcon] = useState<string>('');

  useEffect(() => {
    async function getIcon() {
      const svgFilename = name.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

      let Icon;
      try {
        Icon = await import(`./${svgFilename}.svg`);
      } catch {
        Icon = await import('./bookmark.svg');
      }

      setIcon(Icon?.default.src);
    }

    getIcon();
  }, [name]);

  function onClickHandler() {
    if (onClick) {
      onClick(name);
    } else {
      console.warn(`No onClick handler for ${name} topic button`);
    }
  }

  return (
    <button
      className="bg-white pl-4 rounded-lg shadow flex items-center max-w-md min-w-max hover:shadow-md transition-shadow"
      onClick={onClickHandler}
      data-testid="topic-button"
    >
      <img src={icon} alt={`${name} icon`} className="w-8" />
      <h2 data-testid="topic-name" className="font-bold text-2xl p-4">
        {name}
      </h2>
    </button>
  );
}

export default TopicButton;
