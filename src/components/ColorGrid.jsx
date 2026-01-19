import ColorCard from "./ColorCard";

function ColorGrid({ colors }) {
  return (
    <div className="p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {colors.map((color, index) => (
        <ColorCard key={index} color={color} />
      ))}
    </div>
  );
}

export default ColorGrid;
