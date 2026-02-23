import { useState } from "react";
import { Link } from "react-router-dom";
import { products, categories, materials, shapes, finishes, colors } from "@/data/products";
import productHexagon from "@/assets/product-hexagon.jpg";
import productConcrete from "@/assets/product-concrete.jpg";
import productTextured from "@/assets/product-textured.jpg";
import product3dAccent from "@/assets/product-3d-accent.jpg";

const imageMap: Record<string, string> = {
  "product-hexagon": productHexagon,
  "product-concrete": productConcrete,
  "product-textured": productTextured,
  "product-3d-accent": product3dAccent,
};

const filterGroups = [
  { label: "Category", options: categories, key: "category" },
  { label: "Material", options: materials, key: "material" },
  { label: "Shape", options: shapes, key: "shape" },
  { label: "Finish", options: finishes, key: "finish" },
  { label: "Color", options: colors, key: "color" },
];

const Products = () => {
  const [activeFilters, setActiveFilters] = useState<Record<string, string>>({});
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilter = (key: string, value: string) => {
    setActiveFilters((prev) => {
      if (prev[key] === value) {
        const next = { ...prev };
        delete next[key];
        return next;
      }
      return { ...prev, [key]: value };
    });
  };

  const filtered = products.filter((p) =>
    Object.entries(activeFilters).every(([key, value]) => {
      const productValue = p[key as keyof typeof p];
      if (Array.isArray(productValue)) return productValue.includes(value);
      return productValue === value;
    })
  );

  return (
    <div>
      {/* Hero */}
      <section className="bg-surface section-padding-sm">
        <div className="container-wide mx-auto">
          <h1 className="heading-section text-foreground mb-2">Our Products</h1>
          <p className="body-base text-muted-foreground">Discover our full collection of decorative wall panels.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto flex flex-col lg:flex-row gap-12">
          {/* Filter Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden text-sm font-medium text-primary mb-4"
            >
              {showFilters ? "Hide Filters" : "Show Filters"}
            </button>
            <div className={`${showFilters ? "block" : "hidden"} lg:block space-y-8`}>
              {filterGroups.map((group) => (
                <div key={group.key}>
                  <h3 className="font-heading text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">{group.label}</h3>
                  <div className="space-y-2">
                    {group.options.map((option) => (
                      <button
                        key={option}
                        onClick={() => toggleFilter(group.key, option)}
                        className={`block w-full text-left text-sm px-3 py-2 rounded-sm transition-colors ${
                          activeFilters[group.key] === option
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-muted-foreground hover:bg-muted"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              {Object.keys(activeFilters).length > 0 && (
                <button
                  onClick={() => setActiveFilters({})}
                  className="text-sm text-primary hover:text-primary/80"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {filtered.map((product) => (
                <div key={product.id} className="bg-card rounded-sm overflow-hidden shadow-soft hover:shadow-card transition-shadow group">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={imageMap[product.image]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-semibold text-foreground mb-1">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{product.shortDescription}</p>
                    <p className="text-xs text-muted-foreground/70 mb-4">{product.dimensions} · {product.thickness}</p>
                    <Link
                      to={`/products/${product.slug}`}
                      className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground py-20">No products match your filters.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
