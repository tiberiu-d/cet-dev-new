type EscalationCardProps = {
  id: string;
  title: string;
  description: string;
  type: string;
  escal_date: string;
  descal_date: string;
  est_descal_date: string;
  customer_group: string;
  level: {
    name: string;
    color: string;
  };
};

const EscalationCard = ({
  id,
  title,
  description,
  type,
  escal_date,
  descal_date,
  est_descal_date,
  customer_group,
  level,
}: EscalationCardProps) => {
  return <div className="container">{title}</div>;
};
export default EscalationCard;
