const CartIcon = ({
    width = 10,
    height = 10,
    color = 'white',
    fill = 'transparent'
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 10 10"
            xmlns="http://www.w3.org/2000/svg"
            className="cart-icon"
        >
            <path
                stroke={color}
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill={fill}
                d="M 1 1 l 1 0.25 l 0.5 4 m -0.25 -3 l 7 0.5 l -1 3 l -5.5 0 q -1 0 -1 1.5 l 7 0"
            />
            <circle
                cx="1.75"
                cy="8.75"
                r="0.25"
                stroke={color}
                strokeWidth="1"
                fill={fill}
            />
            <circle
                cx="8"
                cy="8.75"
                r="0.25"
                stroke={color}
                strokeWidth="1"
                fill={fill}
            />
        </svg>
    )
}

export default CartIcon