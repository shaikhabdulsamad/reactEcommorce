import { useSelector, useDispatch } from 'react-redux'
import { getDataFromApi } from '../../store/Actions'
import { Slider, Product, DetailCards, Footer } from '../../components'
import './css/index.css'
function Home() {
    const store = useSelector(state => state.auth);
    const dispatch = useDispatch()

    return (
        <div className="p-0">
            <Slider />
            <DetailCards />
            <div className="products mt-5">
                <div>
                    <h4>New Arrivals</h4>
                    <div className="border_line">
                    </div>
                </div>
            </div>
            <Product />
            <div className="products mt-5">
                <div>
                    <h4>Products on Sell</h4>
                    <div className="border_line">
                    </div>
                </div>
                </div>
                <Product />
<Footer />
            </div>
            )
}

            export default Home;