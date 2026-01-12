import { useMemo } from 'react'
import './product.css'
import CartIcon from '../icons/Cart';

const Product = ({
    name,
    desc,
    image,
    alt = name,
    className = '',
    displayMode,
    onAddToCart,
}) => {

    const mode = useMemo(() => {
        switch (displayMode) {
            case 'vertical':
            case 'horizontal':
                return displayMode
            default:
                return '';
        }
    }, [displayMode]);

    return (
        <div className={`product${!mode ? `` : `--${mode}`} ${className}`}>
            <img
                src={image}
                alt={alt}
                title={name}
                className="product__image"
            />
            <section className='product__content'>
                <section className="product__info">
                    <p className="product__name">{name}</p>
                    <p className="product__desc">{desc}</p>
                </section>
                <section className="product__actions">
                    {onAddToCart && (
                        <button className="product__action" onClick={onAddToCart}>
                            <CartIcon
                                color='black'
                                width={20}
                                height={20}
                            />
                        </button>
                    )}
                </section>
            </section>
        </div>
    )
}

export default Product