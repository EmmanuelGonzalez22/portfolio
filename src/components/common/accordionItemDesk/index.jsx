import { useIcons } from "../../../hooks";
import "./styles.scss";

const AccordionItemDesk = ({ faq }) => {
  const { Icon } = useIcons();
  const { header, text, svg } = faq;

  return (
    <li className='tabs'>
      <div className='social-links twitter-icon'>
        <Icon icon={svg} />
      </div>
      <div className='paragraph'>
        <h1>{header}</h1>
        <p>{text}</p>
      </div>
    </li>
  );
};

export { AccordionItemDesk };
