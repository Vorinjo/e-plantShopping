import { useDispatch, useSelector } from 'react-redux';
import {
  addItem,
  selectCartItems,
  selectCartTotalQuantity,
} from './CartSlice.jsx';

export const plantCategories = [
  {
    name: 'Air-Purifying Plants',
    description: 'Fresh-looking favorites selected to enliven indoor spaces.',
    plants: [
      {
        id: 'monstera-deliciosa',
        name: 'Monstera Deliciosa',
        price: 28,
        description: 'Iconic split leaves and bold tropical character.',
        image:
          'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=640&q=80',
      },
      {
        id: 'snake-plant',
        name: 'Snake Plant',
        price: 22,
        description: 'Architectural leaves and wonderfully low maintenance.',
        image:
          'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=640&q=80',
      },
      {
        id: 'peace-lily',
        name: 'Peace Lily',
        price: 24,
        description: 'Glossy foliage crowned by elegant white blooms.',
        image:
          'https://images.unsplash.com/photo-1593482892290-f54927ae2b7e?auto=format&fit=crop&w=640&q=80',
      },
      {
        id: 'spider-plant',
        name: 'Spider Plant',
        price: 16,
        description: 'Playful striped foliage that looks great in a hanging pot.',
        image:
          'https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=640&q=80',
      },
      {
        id: 'rubber-plant',
        name: 'Rubber Plant',
        price: 30,
        description: 'Deep green leaves with a polished, modern look.',
        image:
          'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=640&q=80',
      },
      {
        id: 'boston-fern',
        name: 'Boston Fern',
        price: 20,
        description: 'Feathery fronds that bring softness to any room.',
        image:
          'https://images.unsplash.com/photo-1531058240690-006c446962d8?auto=format&fit=crop&w=640&q=80',
      },
    ],
  },
  {
    name: 'Pet-Friendly Plants',
    description: 'Beautiful choices for homes shared with curious companions.',
    plants: [
      {
        id: 'calathea-orbifolia',
        name: 'Calathea Orbifolia',
        price: 32,
        description: 'Silver-striped leaves with an elegant rounded shape.',
        image:
          'https://images.unsplash.com/photo-1600411832986-5a4477b64a1c?auto=format&fit=crop&w=640&q=80',
      },
      {
        id: 'parlor-palm',
        name: 'Parlor Palm',
        price: 26,
        description: 'Graceful palm fronds suited to gentle indoor light.',
        image:
          'https://images.unsplash.com/photo-1597055181300-e3633a917c9c?auto=format&fit=crop&w=640&q=80',
      },
      {
        id: 'prayer-plant',
        name: 'Prayer Plant',
        price: 21,
        description: 'Patterned leaves that fold upward as evening arrives.',
        image:
          'https://images.unsplash.com/photo-1602923668104-8f9e03f4a6a6?auto=format&fit=crop&w=640&q=80',
      },
      {
        id: 'peperomia',
        name: 'Peperomia',
        price: 18,
        description: 'Compact, textured foliage perfect for desks and shelves.',
        image:
          'https://images.unsplash.com/photo-1596724878582-76f1a8fdc8c8?auto=format&fit=crop&w=640&q=80',
      },
      {
        id: 'haworthia',
        name: 'Haworthia',
        price: 14,
        description: 'A petite striped succulent for bright windowsills.',
        image:
          'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=640&q=80',
      },
      {
        id: 'african-violet',
        name: 'African Violet',
        price: 17,
        description: 'Velvety leaves and cheerful clusters of colorful flowers.',
        image:
          'https://images.unsplash.com/photo-1491147334573-44cbb4602074?auto=format&fit=crop&w=640&q=80',
      },
    ],
  },
  {
    name: 'Easy-Care Plants',
    description: 'Resilient plants for busy people and first-time plant parents.',
    plants: [
      {
        id: 'zz-plant',
        name: 'ZZ Plant',
        price: 25,
        description: 'Shiny leaves and remarkable tolerance of low light.',
        image:
          'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=640&q=80',
      },
      {
        id: 'golden-pothos',
        name: 'Golden Pothos',
        price: 15,
        description: 'Fast-growing vines with sunny green-and-gold leaves.',
        image:
          'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=640&q=80',
      },
      {
        id: 'aloe-vera',
        name: 'Aloe Vera',
        price: 16,
        description: 'A sculptural succulent that thrives in bright light.',
        image:
          'https://images.unsplash.com/photo-1509423350716-97f2360af8e4?auto=format&fit=crop&w=640&q=80',
      },
      {
        id: 'jade-plant',
        name: 'Jade Plant',
        price: 19,
        description: 'A classic succulent with plump, glossy leaves.',
        image:
          'https://images.unsplash.com/photo-1483919283443-8db97e2bcd81?auto=format&fit=crop&w=640&q=80',
      },
      {
        id: 'chinese-evergreen',
        name: 'Chinese Evergreen',
        price: 27,
        description: 'Colorful foliage that adapts to a range of conditions.',
        image:
          'https://images.unsplash.com/photo-1614594575810-6c75b23d4f7b?auto=format&fit=crop&w=640&q=80',
      },
      {
        id: 'ponytail-palm',
        name: 'Ponytail Palm',
        price: 29,
        description: 'A whimsical trunk topped with long, cascading leaves.',
        image:
          'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=640&q=80',
      },
    ],
  },
];

function ShopNavbar({ onNavigate }) {
  const cartCount = useSelector(selectCartTotalQuantity);

  const goTo = (event, page) => {
    event.preventDefault();
    onNavigate(page);
  };

  return (
    <header className="shop-navbar">
      <a className="brand" href="#home" onClick={(event) => goTo(event, 'home')}>
        <span className="brand__icon" aria-hidden="true">🌿</span>
        <span>
          <strong>Paradise Nursery</strong>
          <small>Where green meets serenity</small>
        </span>
      </a>
      <nav aria-label="Main navigation">
        <a href="#home" onClick={(event) => goTo(event, 'home')}>Home</a>
        <a href="#plants" onClick={(event) => goTo(event, 'plants')}>Plants</a>
        <a
          className="cart-link"
          href="#cart"
          onClick={(event) => goTo(event, 'cart')}
          aria-label={`Cart with ${cartCount} items`}
        >
          <span aria-hidden="true">🛒</span>
          Cart
          <span className="cart-badge">{cartCount}</span>
        </a>
      </nav>
    </header>
  );
}

function ProductList({ onNavigate }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const isInCart = (plantId) =>
    cartItems.some((item) => item.id === plantId);

  return (
    <div className="shop-page" id="plants">
      <ShopNavbar onNavigate={onNavigate} />
      <main className="products-main">
        <div className="section-heading">
          <span>Find your new favorite</span>
          <h1>Houseplants for every home</h1>
          <p>
            Browse our hand-picked collection and add a little more green to
            your everyday life.
          </p>
        </div>

        {plantCategories.map((category) => (
          <section className="plant-category" key={category.name}>
            <div className="category-heading">
              <h2>{category.name}</h2>
              <p>{category.description}</p>
            </div>
            <div className="plant-grid">
              {category.plants.map((plant) => {
                const added = isInCart(plant.id);
                return (
                  <article className="plant-card" key={plant.id}>
                    <div className="plant-card__image-wrap">
                      <img src={plant.image} alt={plant.name} loading="lazy" />
                      <span className="plant-card__price">
                        ${plant.price.toFixed(2)}
                      </span>
                    </div>
                    <div className="plant-card__content">
                      <h3>{plant.name}</h3>
                      <p>{plant.description}</p>
                      <button
                        type="button"
                        className="primary-button"
                        disabled={added}
                        onClick={() => dispatch(addItem(plant))}
                      >
                        {added ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;
