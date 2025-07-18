import { Product } from "../types/ItemType";

type ProductType = {
  product : Product
}

export const ProductItem = ({ product } : ProductType) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200 max-w-xs">
      <div className="flex justify-center mb-2">
        <img
          src={product.images[0] || "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/327098/hp-15-fc0085au-r5-a6vv8pa-170225-110652-878-600x600.jpg"}
          alt={product.title}
          className="w-full h-40 object-contain"
        />
      </div>
      <div className="text-left">
        <div className="flex items-center justify-center space-x-2 mb-1">
           <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">
              ĐÃ QUYEN
            </span>
        </div>
        <p className="text-gray-800 text-sm font-medium mb-1">{'1650ti'}</p>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{product.title}</h3>
        <p className="text-sm text-gray-600 mb-2">
          RAM {8} | SSD {256}
        </p>
        <div className="flex flex-col justify-center space-x-2 mb-2">
          <span className="text-red-600 font-bold text-xl">
            {product.price.toLocaleString()}đ
          </span>
          <span className="text-gray-500 line-through text-sm">
            {1000000}đ
          </span>
          <span className="text-green-600 text-sm">-{50}%</span>
        </div>
        <div className="flex items-center justify-center space-x-1 text-yellow-500">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i}>
              {i < Math.floor(4)
                ? "★"
                : i < 4
                ? "☆"
                : "☆"}
            </span>
          ))}
          <span className="text-gray-600 text-xs ml-1">
            ({4} - Đánh giá {100})
          </span>
        </div>
      </div>
    </div>
  );
};