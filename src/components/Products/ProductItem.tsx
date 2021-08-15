import classes from './ProductItem.module.css';

import {Product} from '../../models/products';
import Card from '../UI/Card/Card';

const ProductItem:React.FC<{product: Product}> = (props) => {
    return (
        <Card>
            <div className={classes.card}>
                <img src={props.product.images[0].object_url} alt="product_group_name" className={classes.image} />
                <div className={classes.content}>
                    <p> { props.product.product_name } </p>
                </div>
            </div>
        </Card>
    );
}

export default ProductItem;