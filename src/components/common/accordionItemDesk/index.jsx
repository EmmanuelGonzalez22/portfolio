import { useIcons } from "../../../hooks";
import "./styles.scss";

const AccordionItemDesk = ({ faq }) => {
  const Icon = useIcons();
  const { header, id, text, svg } = faq;

  return (
    <li class='tabs'>
      <div class='social-links twitter-icon'>
        <Icon icon={svg} />
      </div>
      <div class='paragraph'>
        <h1>{header}</h1>
        <p>{text}</p>
      </div>
    </li>
  );
};

export { AccordionItemDesk };
