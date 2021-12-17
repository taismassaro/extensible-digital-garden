import { useEffect, useState } from 'react';
import './topic-button.module.css';

export interface TopicButtonProps {
  name: string;
  onClick?: (name: string) => void;
}

export function TopicButton({ name, onClick }: TopicButtonProps) {
  const [icon, setIcon] = useState<string>('');

  useEffect(() => {
    async function getIcon() {
      const svgFilename = name.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      const Icon = await import(`./${svgFilename}.svg`);
      setIcon(Icon.default);
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
    >
      <img src={icon} alt={`${name} icon`} className="w-12" />
      <h1 className="font-bold text-4xl p-4">{name}</h1>
    </button>
  );
}

export default TopicButton;
