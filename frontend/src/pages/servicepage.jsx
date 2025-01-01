import React from 'react';
import ServiceBox from '../components/services/serviceBox';
import BeforeImage1 from '../assets/images/SCC background.jpg';
import AfterImage1 from '../assets/images/SCC background2.jpg';
import BeforeImage2 from '../assets/images/SCC background.jpg';
import AfterImage2 from '../assets/images/SCC background2.jpg';

const servicesData = [
    {
        title: 'Service 1',
        description: 'Description for Service 1',
        beforeImage: BeforeImage1,
        afterImage: AfterImage1
    },
    {
        title: 'Service 2',
        description: 'Description for Service 2',
        beforeImage: BeforeImage2,
        afterImage: AfterImage2
    },
    {
        title: 'Service 3',
        description: 'Description for Service 3',
        beforeImage: BeforeImage2,
        afterImage: AfterImage2
    },
    // Add more services as needed
];

export default function ServicePage() {
    return (
        <div style={{ marginTop: '100px' }}>
            {servicesData.map((service, index) => (
                <ServiceBox
                    key={index}
                    title={service.title}
                    description={service.description}
                    beforeImage={service.beforeImage}
                    afterImage={service.afterImage}
                />
            ))}
        </div>
    );
}