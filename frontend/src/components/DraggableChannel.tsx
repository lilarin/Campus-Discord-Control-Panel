import React, {useState} from "react";
import {useSortable} from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";
import ReorderIcon from "@/assets/icons/reorder.svg";
import TextIcon from "@/assets/icons/text.svg";
import VoiceIcon from "@/assets/icons/voice.svg";
import RenameIcon from "@/assets/icons/rename.svg";
import DeleteIcon from "@/assets/icons/delete.svg";
import DraggableCategory from "@/components/DraggableCategory.tsx";

function DraggableChannel({
  channel,
  onActionTriggered,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: channel.id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
    ...(isDragging ? { border: 'dashed 2px #6b727f', zIndex: 9999 } : {}),
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      className="p-1 bg-[#2f3136] hover:bg-[#2a2c31] rounded ml-4 flex items-center justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-start w-4/5 items-center">
        <span className="cursor-grab mr-2" {...attributes} {...listeners}>
          <img
              src={ReorderIcon}
              alt="Перемістити"
              className="w-5 h-5 cursor-grab"
          />
        </span>
        {channel.type === 'text' && (
            <img src={TextIcon} alt="Текстовий канал" className="w-4 h-4 mr-1"/>
        )}
        {channel.type === 'voice' && (
          <img src={VoiceIcon} alt="Голосовий канал" className="w-4 h-4 mr-1" />
        )}
        <span>{channel.name.charAt(0).toUpperCase() + channel.name.slice(1)}</span>
      </div>
      <div className={`flex justify-end space-x-2 pr-1 ${isHovered ? '' : 'opacity-0'}`}>
        <div className="relative group" onClick={() => onActionTriggered('rename', 'channel', channel)}>
          <img
            src={RenameIcon}
            alt="Перейменувати"
            className="w-4 h-4 cursor-pointer filter group-hover:brightness-200 transition-all duration-200"
          />
        </div>
        <div className="relative group" onClick={() => onActionTriggered('delete', 'channel', channel)}>
          <img
            src={DeleteIcon}
            alt="Видалити"
            className="w-4 h-4 cursor-pointer filter group-hover:brightness-200 transition-all duration-200"
          />
        </div>
      </div>
    </li>
  );
}

export default DraggableChannel;