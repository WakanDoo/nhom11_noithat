export default function ProductInfo({ product }) {
  return (
    <div>
      <h1 className="text-3xl font-bold">
        {product.name}
      </h1>

      <p className="mt-2 text-gray-500">
        {product.shortDescription}
      </p>

      <p className="mt-4 text-xl font-semibold">
        {product.price.toLocaleString()} VND
      </p>

      <div className="mt-6">
        <h3 className="font-semibold">Specs</h3>
        <ul className="list-disc ml-5">
          {product.specs?.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}