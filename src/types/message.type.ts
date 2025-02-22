type AgentType = 'assistant' | 'user';

export interface MessageProps {
  role: AgentType;
  content: string;
}
