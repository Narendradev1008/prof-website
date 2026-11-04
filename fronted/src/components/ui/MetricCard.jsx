function MetricCard({ label, value, horizontal = false, className = "" }) {
  return (
    <div className={`lab-metric ${horizontal ? "lab-metric--horizontal" : ""} ${className}`.trim()}>
      <p className="lab-metric__value">{value}</p>
      <p className="lab-metric__label">{label}</p>
    </div>
  );
}

export default MetricCard;
