import { useState, useEffect } from 'react'
import serviceService from '../../services/service'

const ServiceStatus = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        serviceService
        .getForUpdate()
        .then(initialServices => {
            setServices(initialServices)
        })
    }, [])

    const update = async (id, status) => {
        await serviceService.update(id, status);
    }

    return (
        <div>
            <ul>
                {services.map((service, i) => 
                    <li key = {i}>
                        Name: {service.name}
                        <br/>
                        Description: {service.description}
                        <br/>
                        Availability: {service.isAvailable ? 'Available' : 'Not Available'}
                        <br/>
                        <button onClick={() => update(service.id, true)}>Available</button>
                        <button onClick={() => update(service.id, false)}>Not Available</button>
                        <br/>
                        <br/>
                    </li>  
                )}
            </ul>
        </div>
    )
}

export default ServiceStatus