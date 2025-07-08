import { useEffect, useState } from "react";
import styles from "../sidebar/styles.module.css";
import type { Category } from "../../types/Category";

type SidebarType = {
  onCategoryChange: (selected: number | null) => void; 
};

const Sidebar = ({ onCategoryChange }: SidebarType) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);

  const apiCategoryUrl = "https://api.escuelajs.co/api/v1/categories";

  const handleRadioChange = (categoryId: number) => {
    setSelectedCategoryId(categoryId);
    onCategoryChange(categoryId); 
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(apiCategoryUrl);
        if (response.ok) {
          const data = await response.json();
          setCategories(data);
        }
      } catch (err) {
        console.error("Lỗi khi fetch danh mục:", err);
      }
    };

    fetchCategories();
  }, []);

  return (
    <aside className={styles.sidebar}>
      <h3>Bộ Lọc</h3>
      <ul className={styles.category_list}>
        {categories.map((category) => (
          <li key={category.id} className={styles.category_item}>
            <label>
              <input
                type="radio"
                name="category"
                value={category.id}
                checked={selectedCategoryId === category.id}
                onChange={() => handleRadioChange(category.id)}
              />
              <span>{category.name}</span>
            </label>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
