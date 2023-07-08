import { useRef } from "react";
import { useIcons } from "../../../hooks";
import "./styles.scss";

const AccordionItem = ({ handleToggle, active, faq }) => {
  const Icon = useIcons();
  const contentEl = useRef(null);
  const { header, id, text, svg } = faq;

  return (
    <li className='accordionItem'>
      <header
        className={`accordionItem__header ${active === id ? "active" : ""}`}
        onClick={() => handleToggle(id)}
      >
        <div className='icon__svg'>
          <Icon icon={svg} />
        </div>
        <h2>{header}</h2>
        <span className='collapse__svg'>
          <Icon icon='fas fa-chevron-down' />
        </span>
      </header>
      <div
        ref={contentEl}
        className={`collapse ${active === id ? "show" : ""}`}
        style={
          active === id
            ? { height: contentEl?.current?.scrollHeight }
            : { height: "0px" }
        }
      >
        <p>{text}</p>
      </div>
    </li>
  );
};

export { AccordionItem };
