import { useState, useEffect } from 'react'
import shopService from '../../services/shop'

const ViewShops = () => {
    const [shops, setShops] = useState([])

    useEffect(() => {
        shopService
        .getAll()
        .then(initialShops => {
            setShops(initialShops)
        })
    }, [])

    return (
        <div>
            <ul>
                {shops.map((shop, i) => 
                    <li key = {i}>
                        Name: {shop.name}
                        <br/>
                        Category: {shop.category}
                        <br/>
                        TenantID: {shop.tenantID}
                        <br/>
                        Description: {shop.description}
                        <br/>
                        Location: {shop.location}
                        <br/>
                        Email: {shop.email}
                        <br/>
                        Phone: {shop.phone}
                        <br/>
                        <br/>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default ViewShops