import React from 'react';
import productData from './productData';
import { Link,Route } from 'react-router-dom';
import Product from './product';

const Products = ({match}) => {
    const linkList = productData.map((p) => {
        return (
            <li>
                <Link key={p.id} to={`${match.url}/${p.id}`}>
                    {p.name}
                </Link>
            </li>
        )
    });

    return (
        <div>
            <div>
                <h3>Products</h3>
                <ul>
                    {linkList}
                </ul>
            </div>

            <Route path={`${match.url}/:productId`}
                render={ 
                    (props) => <Product data= {productData} {...props} />
                }/>
            
            {/* 只在 /products 路径下渲染组件 */}
            <Route exact path={match.url}
                render={() => (
                <div>Please select a product.</div>
                )}
            />
        </div>
    )
}


export default Products;