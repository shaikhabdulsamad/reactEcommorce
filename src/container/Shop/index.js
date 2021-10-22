import {Product} from '../../components'
function Shop() {
    return (
        <div className="mt-81">
            <div className="products mt-5">
                <div>
                    <h4>Products</h4>
                    <div className="border_line">
                    </div>
                </div>
            </div>
            <Product />
        </div>
    )
}

export default Shop;