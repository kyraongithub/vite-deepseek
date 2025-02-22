import { MessageProps } from '../../types/message.type';
import styles from './Message.module.css';

const Message = (props: MessageProps) => {
  const { role = 'assistant', content } = props;
  return <div className={styles[role]}>{content}</div>;
};

export default Message;
