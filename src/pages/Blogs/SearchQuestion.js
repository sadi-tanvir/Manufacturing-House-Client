import React from 'react';




const SearchQuestion = () => {
    return (
        <div>
            <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                </div>
                <div class="collapse-content">
                    <h1 className="font-bold text-xl">{`
                        const products = [
                            {
                                name: 'samsung galaxy A50',
                                price: 22500,
                                description: 'dual-band, Wi-Fi direct, Wi-Fi hotspot'
                            },
                        
                            {
                                name: 'IPhone 13pro',
                                price: 27500,
                                description: '2G, 3G, 4G, 5G supported'
                            },
                            {
                                name: 'Vivo v60',
                                price: 28200,
                                description: ' A-GPS, GLONASS, GALILEO, BDS, QZSS'
                            },
                            {
                                name: 'Oppu A12',
                                price: 35500,
                                description: 'Gorilla Glass 5 front, plastic body'
                            },
                        
                        ]
                    `}</h1>
                    <br />
                    <br />

                    <h3 className="font-semibold text-lg text-sky-600">{`
                        const serchProduct = (search) => {
                            return products.filter(product => {
                                return product.name.toLowerCase().includes(search.toLowerCase())
                            })
                        }
                    `}</h3>
                    <br />
                    <br />
                    <h4 className="font-semibold text-md text-green-600">
                        const result = serchProduct("Oppu A12")
                        console.log(result);
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default SearchQuestion;