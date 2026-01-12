import './cart.css'
import { useMemo, useState} from 'react'
import Product from '../product/Product'
import { formatCurrency } from '../../shared/helpers'
import CartIcon from '../icons/Cart'

const Cart = ({
    items = new Map(),
}) => {

    const uniqueItemCount = useMemo(() => {
        return items.size
    }, [items])

    const [isShowCartDetail, setShowCartDetail] = useState(false)

    const toggleShowPopup = () => {
        setShowCartDetail(isShow => !isShow)
    }

    const getItemDesc = (item) => {
        if (!item || !item.price) return ''

        const total = (item.quantity ?? 1) * item.price
        // TODO: update this
        return `Thành tiền: ${formatCurrency(item.price, 'de-DE', { style: 'decimal' })} x ${item.quantity ?? 1} = ${formatCurrency(total)}`
    }

    return (
        <section className='cart'>
            <button
                className='cart__button'
                onClick={toggleShowPopup}
            >
                Giỏ hàng
                <CartIcon
                    color='black'
                    width={20}
                    height={20}
                />
                <span className='cart__button-indicator'>{uniqueItemCount}</span>
            </button>
            <div className={`cart__popup${isShowCartDetail ? '' : '--hidden'}`}>
                {uniqueItemCount === 0 ? (
                    <p>
                        Hiện chưa có sản phẩm nào trong giỏ hàng.
                    </p>
                ) : (
                    Array.from(items.values()).map(item => (
                        <Product
                            key={item.id}
                            name={item.name}
                            desc={getItemDesc(item)}
                            image={item.image}
                            displayMode={'horizontal'}
                        />
                    ))
                )}

            </div>
        </section>
    )
}

export default Cart