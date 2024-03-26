import useFetch from "../../hooks/useFetch";
import CardItem from "../../component/cardItem"
import "./home.scss"

function Home() {
    const { data, loading, error } = useFetch("https://dummyjson.com/products")

    console.log(data.products)
    return (
        <div className="home">
            
            {error && <h2>Error</h2>}
            {loading && <h2>Loading ....</h2>}
            {
                data.products && data.products.map((item => (
                        <CardItem  key={item.id} item={item}/>
       
                )))
            }
        </div>
    )
}

export default Home
