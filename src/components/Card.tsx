interface CardProps {
  name: string;
}

export function Card({ name }: CardProps) {
  return (
    <div className="max-w-xl mx-auto my-4 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-2xl font-black text-gray-800">{name}</h2>
      </div>
    </div>
  );
}

export default Card;
