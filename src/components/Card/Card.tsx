type CardProps = {
  children: React.ReactNode;
  title: string;
};

export const Card = ({ children, title }: CardProps) => (
  <div>
    <div>{children}</div>
    <div>{title}</div>
  </div>
);
