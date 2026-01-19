function ColorCard({ color }) {
  return (
    <div className="rounded-xl shadow overflow-hidden">
      <div
        className="h-24"
        style={{ backgroundColor: color }}
      ></div>

      <p className="text-center py-2 font-mono">{color}</p>
    </div>
  );
}

export default ColorCard;
