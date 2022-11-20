export type SendButtonProps = {
  children: string;
  onPress: () => void | Promise<void>;
  disabled?: boolean;
};
