
function Products({ title, description, price, category, thumbnail }) {

    const imagePath = `/img/${thumbnail.split('/').pop()}`;

    return (
      <div className="product">
        <img src={imagePath} alt={title} className="product-image" />
        <div className="product-info">
          <h2 className="product-title">{title}</h2>
          <p className="product-description">{description}</p>
          <p className="product-price">${price}</p>
          <p className="product-category">Category: {category}</p>
        </div>
      </div>
    );
  }

 export default Products