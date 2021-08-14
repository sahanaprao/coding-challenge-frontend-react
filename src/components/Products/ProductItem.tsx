import classes from './ProductItem.module.css';

const ProductItem = () => {
    return (
        <div>
            <img src="" alt="product_group_name" className={classes.image} />
            <div>
                <p>product_name</p>
                <p><strong>Amount:</strong> total_amount</p>
            </div>
        </div>
    );
}

export default ProductItem;