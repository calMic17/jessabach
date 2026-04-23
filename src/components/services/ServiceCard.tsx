type ServiceProps = {
  title: string;
  description: string;
  icon: string;
  tags?: string[];
};

function ServiceCard({ title, description, icon, tags }: ServiceProps) {
  return (
    <div className="service-card">
      <div className="icon-box">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      {tags && (
        <div className="instrument-list">
          {tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      )}
    </div>
  );
}
export default ServiceCard;